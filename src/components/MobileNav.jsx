'use client'
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
const nav = [
    {
        name: 'home',
        path: '/',
    },
    // {
    //     name: 'services',
    //     path: '/services',
    // },
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
const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-3xl text-accent"></CiMenuFries>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl"> 
                    <Link href="/">
                    Abu Horaira <span className="text-accent">.</span>
                    </Link>
                </div>
                <nav>
                    {nav.map((item) => (
                    <Link href={item.path} key={item.name} className="text-xl capitalize transition-all">
                            <p className={pathname === item.path? "text-accent" : "text-slate-500"}>
                                {item.name}
                            </p>
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;