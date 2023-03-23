import Link from "next/link";
import React from "react";

export const Footer: React.FC = () => (
  <div className="footer">
    <Link href="https://twitter.com/phil__ectronic">
      <img src="/img/twitter.svg" alt="Twitter" height="30" width="30" />
    </Link>
    <Link href="https://defcon.social/@phil__ectronic">
      <img src="/img/mastodon.svg" alt="Mastodon" height="30" width="30" />
    </Link>
    <Link href="/rss.xml">
      <img src="/img/rss-white.svg" alt="RSS Feed" height="30" width="30" />
    </Link>
  </div>
);
