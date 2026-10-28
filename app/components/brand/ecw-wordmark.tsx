import type * as React from "react";

export function EcwWordmark(): React.ReactElement {
  return (
    <div className="ecw-masthead">
      <a className="ecw-wordmark" href="https://www.easterncoloradoweekly.com/">
        <span>Eastern Colorado</span>
        <strong>Weekly</strong>
      </a>
      <p className="ecw-eyebrow">Staff webmail</p>
    </div>
  );
}
