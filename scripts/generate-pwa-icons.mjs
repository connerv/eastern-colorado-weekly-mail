import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const logo = await readFile(path.join(root, "public/ecw-icon.svg"), "utf8");
const wheat = await readFile(path.join(root, "public/ecw-wheat.svg"), "utf8");
const browser = await chromium.launch({ headless: true });

try {
  for (const icon of [
    { background: "#f5f0e6", file: "icon-512.png", markWidth: 308, size: 512 },
    { background: "#f5f0e6", file: "icon-192.png", markWidth: 115, size: 192 },
    { background: "#f5f0e6", file: "apple-touch-icon.png", markWidth: 108, size: 180 },
    { background: "#f5f0e6", file: "icon-maskable-512.png", markWidth: 266, size: 512 },
    {
      background: "transparent",
      file: "notification-badge.png",
      markWidth: 52,
      monochrome: true,
      size: 96
    }
  ]) {
    const page = await browser.newPage({
      deviceScaleFactor: 1,
      viewport: { height: icon.size, width: icon.size }
    });

    await page.setContent(
      `<!doctype html>
      <style>
        html, body {
          width: 100%;
          height: 100%;
          margin: 0;
          overflow: hidden;
          background: ${icon.background};
        }
        body {
          display: grid;
          place-items: center;
        }
        svg {
          display: block;
          width: ${icon.markWidth}px;
          height: auto;
        }
        ${
          icon.monochrome
            ? `svg g { color: #fff !important; }
        svg rect, svg path { fill: #fff !important; }
        svg stop { stop-color: #fff !important; }`
            : ""
        }
      </style>
      ${icon.monochrome ? wheat : logo}`,
      { waitUntil: "load" }
    );
    await page.screenshot({
      omitBackground: icon.background === "transparent",
      path: path.join(root, "public/icons", icon.file),
      type: "png"
    });
    await page.close();
  }
} finally {
  await browser.close();
}
