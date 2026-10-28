import { AppError } from "../../lib/errors";

const maxMessageBytes = 5 * 1024 * 1024;
const encoder = new TextEncoder();

// This is a conservative preflight budget, not the provider's exact MIME serializer.
// Reserve MIME/signing overhead, allow worst-case text encoding and folding, and
// count base64 expansion plus CRLF wrapping for every file and inline image.
export function requireMessageSize(email: EmailMessageBuilder): void {
  const { attachments = [], text = "", html = "", ...headers } = email;
  let budget = 64 * 1024 + 4 * encoder.encode(JSON.stringify(headers)).byteLength;
  budget += 4 * (encoder.encode(text).byteLength + encoder.encode(html).byteLength);
  for (const attachment of attachments) {
    const content = attachment.content;
    const encodedLength =
      typeof content === "string" ? content.length : 4 * Math.ceil(content.byteLength / 3);
    budget += encodedLength + 2 * Math.ceil(encodedLength / 76);
    budget +=
      2048 +
      4 *
        encoder.encode(`${attachment.filename}${attachment.type}${attachment.contentId ?? ""}`)
          .byteLength;
  }
  if (budget > maxMessageBytes) {
    throw new AppError(
      "MESSAGE_TOO_LARGE",
      "This message is too large to send. Keep attachments below 3 MiB total and use sharing links for larger files.",
      413
    );
  }
}
