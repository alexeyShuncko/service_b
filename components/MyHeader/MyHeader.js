'use client';
import Link from 'next/link';
import s from './MyHeader.module.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const MyHeader = () => {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const fn = () => {
      setIsHidden(true);
    };
    if (isHidden === false) {
      document.addEventListener('click', fn);
    }
    return () => document.removeEventListener('click', fn);
  }, [isHidden]);

  const menuItem = [
    { name: 'Главная', url: '/' },
    { name: 'Проекты', url: '/projects' },
    { name: 'О компании', url: '/about' },
    { name: 'Контакты', url: '/contacts' },
  ];

  return (
    <header className={s.myHeader}>
      <ul className={s.listMainMenu}>
        {menuItem.map((link) => (
          <li key={link.name}>
            <Link
              href={link.url}
              className={pathname === link.url ? s.activeLink : ''}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className={s.hiddenMenuBlock} onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? (
          <div className={s.hiddenMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <ul className={s.listMenuHidden}>
            {menuItem.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  className={pathname === link.url ? s.activeLink : ''}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};
