import s from './page.module.css';
import Image from 'next/image';
import logo from '../../public/logo.svg';

export default function Contacts() {
  return (
    <div className={s.container}>
      <div className={s.logoImg}>
        <Image
          src={logo}
          fill={true}
          alt="Логотип"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <ul>
        <li>
          <a href="tel:+84956656253">8 (495) 665-62-53</a>
          <div className={s.text}>Москва, ул. Новодмитровская, д. 2, к. 7</div>
        </li>
        <li>
          <a href="mailto:info@adwill.ru">info@adwill.ru</a>
          <div className={s.text}>PR, пресса</div>
        </li>
      </ul>
    </div>
  );
}
