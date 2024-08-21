import Link from "next/link";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1 className="mb-6 font-semibold text-center">About Us</h1>
      <ul className="flex justify-center gap-10">
        <li className="link">
          <Link href="/about/team">Team</Link>
        </li>
        <li className="link">
          <Link href="/about/contacts">Contacts</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}