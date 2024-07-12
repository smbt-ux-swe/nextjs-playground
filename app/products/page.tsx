import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <h1> products list </h1>
      <ul>
        <Link href="/products/scarf">
          <li>scarf</li>
        </Link>
        <Link href="/products/necklass">
          <li>necklass</li>
        </Link>
      </ul>
    </>
  );
}
