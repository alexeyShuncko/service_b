'use client';

import { useState } from 'react';
import s from './page.module.css';
import Image from 'next/image';
import logo from '../../public/logo.svg';

const data = [
  {
    name: 'Савёловский сити',
    type: 'БЦ',
    year: '2017',
    status: 'Активный',
    service: 'Управление коммерческой недвижимостью',
    image: '',
  },
  {
    name: 'Дискавери',
    type: 'TЦ',
    year: '2021',
    status: 'Активный',
    service: 'Управление коммерческой недвижимостью',
    image: '',
  },
  {
    name: 'Фили град',
    type: 'ТЦ',
    year: '2021', //нет года в таблице
    status: 'Активный',
    service: 'Управление коммерческой недвижимостью',
    image: '',
  },
  {
    name: 'ФИЛИ',
    type: 'ДОУ',
    year: '2022',
    status: 'Активный',
    service: 'Управление коммерческой недвижимостью',
    image: '',
  },
  {
    name: 'ЯСНЫЙ',
    type: 'ДОУ',
    year: '2022',
    status: 'Активный',
    service: 'Управление коммерческой недвижимостью',
    image: '',
  },
  {
    name: 'ПЕРОВСКИЙ',
    type: 'ДОУ',
    year: '2022',
    status: 'Активный',
    service: 'Управление коммерческой недвижимостью',
    image: '',
  },
  {
    name: 'Селигер сити',
    type: 'Стрит',
    year: '2022',
    status: 'Активный',
    service: 'Управление коммерческой недвижимостью',
    image: '',
  },
  {
    name: 'ICITY',
    type: 'БЦ',
    year: '2023',
    status: 'Активный',
    service: 'Консалтинг',
    image: '',
  },
  {
    name: 'Никольская',
    type: 'МФК',
    year: '2022',
    status: 'Завершён',
    service: 'Консалтинг',
    image: '',
  },
  {
    name: 'ТЦ Коньково',
    type: 'ТЦ',
    year: '2022',
    status: 'Завершён',
    service: 'Управление коммерческой недвижимостью',
    image: '',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('Тип объекта');

  const filterHandler = (e) => {
    if (e.target.nodeName === 'LI') {
      setFilter(e.target.innerText);
    }
  };

  const filterItem = ['Тип объекта', 'Услуги', 'Год', 'Статус работы'];
  return (
    <div className={s.container}>
      <div className={s.filter}>
        <div className={s.logo}>
          <Image src={logo} width={450} height={40} alt="Логотип" />
        </div>
        <div>
          <ul className={s.listFilter} onClick={filterHandler}>
            {filterItem.map((el, i) => (
              <li key={i} className={filter === el ? s.activeItem : ''}>
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.content}></div>
    </div>
  );
}
