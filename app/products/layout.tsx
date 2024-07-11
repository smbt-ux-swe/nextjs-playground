import Link from "next/link";
import React from "react";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex justify-start gap-[5px] border-solid border-[3px] border-[brown] ">
        <Link href="/products/male">male</Link>
        <Link href="/products/female">Female</Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
