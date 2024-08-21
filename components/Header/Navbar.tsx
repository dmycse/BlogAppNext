'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  navlinks: NavLink[];
}

export default function Navbar( {navlinks}: NavbarProps) {

  const pathname = usePathname();

  return (
    <ul className='flex justify-center gap-8'>
      {navlinks && navlinks.map(link => (
        <li 
          key={link.label} 
          className={link.href === pathname ? 'active_link' : 'link'}
        >
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}
