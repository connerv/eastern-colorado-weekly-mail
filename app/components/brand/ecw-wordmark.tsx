import type * as React from "react";

export function EcwWordmark(): React.ReactElement {
  return (
    <div className="ecw-masthead">
      <a className="ecw-wordmark" href="https://www.easterncoloradoweekly.com/">
        <span>Eastern Colorado</span>
        <strong>
          Weekly
          <svg
            fill="currentColor"
            className="ecw-wheat-mark"
            viewBox="0 0 32 48"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M16 15C10 11 11 5 16 2C21 5 22 11 16 15ZM14 23C6 22 3 17 3 13C10 13 14 17 14 23ZM18 23C26 22 29 17 29 13C22 13 18 17 18 23ZM14 31C6 30 3 25 3 21C10 21 14 25 14 31ZM18 31C26 30 29 25 29 21C22 21 18 25 18 31ZM14 39C6 38 3 33 3 29C10 29 14 33 14 39ZM18 39C26 38 29 33 29 29C22 29 18 33 18 39Z" />
            <path
              d="M16 13V46"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </strong>
      </a>
      <p className="ecw-eyebrow">Staff webmail</p>
    </div>
  );
}
