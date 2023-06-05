'use client';
import Link from 'next/link';
import s from './MyHeader.module.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export const MyHeader = () => {
  const pathname = usePathname();
  return (
    <header className={s.myHeader}>
      {/* <Image src={logo} alt="Логотип" width={50} height={20} /> */}
      <ul>
        <li>
          <Link href={'/'} className={pathname === '/' ? s.activeLink : ''}>
            Главная
          </Link>
        </li>
        <li>
          <Link
            href={'/projects'}
            className={pathname === '/projects' ? s.activeLink : ''}>
            Проекты
          </Link>
        </li>
        <li>
          <Link
            href={'/about'}
            className={pathname === '/about' ? s.activeLink : ''}>
            О компании
          </Link>
        </li>

        <li>
          <Link
            href={'/contacts'}
            className={pathname === '/contacts' ? s.activeLink : ''}>
            Контакты
          </Link>
        </li>
      </ul>
    </header>
  );
};
