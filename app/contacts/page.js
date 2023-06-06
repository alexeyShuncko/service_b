import s from './page.module.css';

export default function Contacts() {
  return (
    <div className={s.container}>
      <span className={s.title}>Сервис B+</span>
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
