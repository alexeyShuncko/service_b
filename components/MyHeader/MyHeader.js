import Link from 'next/link';
import s from './MyHeader.module.css';

export const MyHeader = () => {
  return (
    <header className={s.myHeader}>
      <ul>
        <li>
          <Link href={'/'}>Главная</Link>
        </li>
        <li>
          <Link href={'/projects'}>Проекты</Link>
        </li>
        <li>
          <Link href={'/about'}>О компании</Link>
        </li>

        <li>
          <Link href={'/contacts'}>Контакты</Link>
        </li>
      </ul>
    </header>
  );
};
