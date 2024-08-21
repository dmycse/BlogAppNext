import Navbar from './Navbar';

let navitems = [
  {label: 'Home', href: '/'},
  {label: 'Blog', href: '/blog'},
  {label: 'About', href: '/about'}
];

export default function Header() {
  return (
    <header className='p-8 w-full font-semibold active:text-orange-500 border-b border-gray-300'>
      <Navbar navlinks={navitems} />
    </header>
  )
}
