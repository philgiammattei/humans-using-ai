import Link from "next/link";
import React from "react";
import { globals } from "../globals";

export const Header: React.FC = () => (
  <div className="header">
    <Link href="/">{globals.siteName}</Link>
    <div className="flex-spacer" />
    {/*     <Link href="/about">about</Link>
    <Link href="/links">links</Link> */}
  </div>
);
