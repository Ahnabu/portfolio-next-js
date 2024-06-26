"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

const nav = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];
const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-3">
      {nav.map((item) => (
        <Link href={item.path} key={item.name} className={`${item.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all px-4`}>
        
            {item.name}
       
        </Link>
      ))}
    </nav>
  );
}

export default function Header() {
 
  return (
    <header className="mx-auto max-w-screen-xl xl:py-12 py-8 text-white">
      <div className="container flex items-center justify-between mx-auto">
        {/* navbar left  */}
        <Link href={'/'}>
          <h1 className="text-4xl font-semibold">
            Abu Horaira
            <span className='text-accent'> .</span>
          </h1>
        </Link>

        {/* desktop nav & hire me */}
         
        <div className="hidden xl:flex justify-between gap-8">
          <Nav />
          <Link href={'/contact'}>
            <Button>Hire Me</Button>
          </Link>
        </div>
        {/* mobile nav & hire me */}
        <div className="xl:hidden gap-2">
    <MobileNav></MobileNav>
        </div>
      </div>
    </header>
  );
}