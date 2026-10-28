import { requireMessageSize } from "@worker/features/send/message-size";
import { describe, expect, it } from "vitest";

const message = {
  from: "news@example.com",
  to: ["reader@example.net"],
  subject: "Fixture",
  text: "Hello"
};
const file = (bytes: number, inline = false): EmailAttachment =>
  inline
    ? {
        disposition: "inline",
        contentId: "fixture@example.com",
        filename: "image.png",
        type: "image/png",
        content: new Uint8Array(bytes).buffer
      }
    : {
        disposition: "attachment",
        filename: "report.pdf",
        type: "application/pdf",
        content: new Uint8Array(bytes).buffer
      };

describe("outgoing message size preflight", () => {
  it("allows a normal message with 3 MiB of binary files and a small body", () => {
    expect(() =>
      requireMessageSize({
        ...message,
        attachments: [file(2 * 1024 * 1024), file(1024 * 1024, true)]
      })
    ).not.toThrow();
  });
  it("counts base64 expansion before submitting a file near 4 MiB", () => {
    expect(() => requireMessageSize({ ...message, attachments: [file(4 * 1024 * 1024)] })).toThrow(
      /too large/
    );
  });
  it("counts the UTF-8 body, HTML and inline images together", () => {
    const body = "😀".repeat(40_000);
    expect(() =>
      requireMessageSize({
        ...message,
        text: body,
        html: `<p>${body}</p>`,
        attachments: [file(3 * 1024 * 1024, true)]
      })
    ).toThrow(/sharing links/);
    expect(() =>
      requireMessageSize({
        ...message,
        text: "a".repeat(40_000),
        html: `<p>${"a".repeat(40_000)}</p>`,
        attachments: [file(3 * 1024 * 1024)]
      })
    ).not.toThrow();
  });
  it("also budgets base64 string attachments", () => {
    expect(() =>
      requireMessageSize({
        ...message,
        attachments: [{ ...file(0), content: "A".repeat(5 * 1024 * 1024) }]
      })
    ).toThrow(/too large/);
  });
});
