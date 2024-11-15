'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItemsData } from '@/data/navigation';

const NavLink = ({ children, href }) => {
    const pathname = usePathname(); // 현재 경로를 가져오는 역할
    const isActive = pathname === href;
    return (
        <Link href={href} className={`py-2 ${isActive ? 'text-primary' : ''}`}>
            {children}
        </Link>
    );
};

const Header = () => {
    return (
        <header className="flex justify-between">
            <h1>
                <Link href={'/'}>logo</Link>
            </h1>
            <ul className="flex gap-5">
                {navItemsData.map(({ href, label }) => (
                    <li key={href}>
                        <NavLink href={href}>{label}</NavLink>
                    </li>
                ))}
            </ul>
        </header>
    );
};

// 타입별로 헤더가 다르게 나오게 만드는거 꼭 알려주세요 선생님!
export default Header;
