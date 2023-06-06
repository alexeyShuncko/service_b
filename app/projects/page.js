'use client';

import { useEffect, useState } from 'react';
import s from './page.module.css';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import foto1 from '../../public/photo1.jpg';
import foto2 from '../../public/photo2.jpg';
import foto3 from '../../public/photo3.jpg';

export default function Projects() {
  const [filter, setFilter] = useState('Тип объекта');
  const [typeState, setTypeState] = useState('');

  const dataInit = [
    {
      name: 'Савёловский сити',
      type: 'БЦ',
      year: '2017',
      status: 'Активный',
      service: 'Управление коммерческой недвижимостью',
      image: foto1,
    },
    {
      name: 'Дискавери',
      type: 'TЦ',
      year: '2021',
      status: 'Активный',
      service: 'Управление коммерческой недвижимостью',
      image: foto2,
    },
    {
      name: 'Фили град',
      type: 'ТЦ',
      year: '2021', //нет года в таблице
      status: 'Активный',
      service: 'Управление коммерческой недвижимостью',
      image: foto3,
    },
    {
      name: 'ФИЛИ',
      type: 'ДОУ',
      year: '2022',
      status: 'Активный',
      service: 'Управление коммерческой недвижимостью',
      image: foto1,
    },
    {
      name: 'ЯСНЫЙ',
      type: 'ДОУ',
      year: '2022',
      status: 'Активный',
      service: 'Управление коммерческой недвижимостью',
      image: foto2,
    },
    {
      name: 'ПЕРОВСКИЙ',
      type: 'ДОУ',
      year: '2022',
      status: 'Активный',
      service: 'Управление коммерческой недвижимостью',
      image: foto3,
    },
    {
      name: 'Селигер сити',
      type: 'Стрит',
      year: '2022',
      status: 'Активный',
      service: 'Управление коммерческой недвижимостью',
      image: foto1,
    },
    {
      name: 'ICITY',
      type: 'БЦ',
      year: '2023',
      status: 'Активный',
      service: 'Консалтинг',
      image: foto2,
    },
    {
      name: 'Никольская',
      type: 'МФК',
      year: '2022',
      status: 'Завершён',
      service: 'Консалтинг',
      image: foto3,
    },
    {
      name: 'ТЦ Коньково',
      type: 'ТЦ',
      year: '2022',
      status: 'Завершён',
      service: 'Управление коммерческой недвижимостью',
      image: foto1,
    },
  ];
  const data = dataInit
    .sort((a, b) => {
      if (filter === 'Тип объекта') {
        return a.type.length - b.type.length;
      }
      if (filter === 'Услуги') {
        return a.service.length - b.service.length;
      }
      if (filter === 'Год') {
        return a.year - b.year;
      }
      if (filter === 'Статус работы') {
        return a.status.length - b.status.length;
      }
    })
    .filter((el) => {
      if (typeState === '') {
        return el;
      }
      if (filter === 'Тип объекта') {
        return el.type === typeState;
      }
      if (filter === 'Услуги') {
        return el.service === typeState;
      }
      if (filter === 'Год') {
        return el.year === typeState;
      }
      if (filter === 'Статус работы') {
        return el.status === typeState;
      }
    });

  const filterHandler = (e) => {
    if (e.target.nodeName === 'LI') {
      setFilter(e.target.innerText);
      setTypeState('');
    }
  };
  const typeHandler = (e) => {
    if (e.target.nodeName === 'LI') {
      setTypeState(e.target.innerText);
    }
  };

  useEffect(() => {
    window.scrollTo(0, -window.scrollY);
  }, [typeState]);

  const filterItem = ['Тип объекта', 'Услуги', 'Год', 'Статус работы'];
  const typeObj = ['БЦ', 'ТЦ', 'ДОУ', 'Стрит', 'МФК'];
  const services = ['Управление коммерческой недвижимостью', 'Консалтинг'];
  const year = [2017, 2021, 2022, 2023];
  const status = ['Активный', 'Завершён'];
  return (
    <div className={s.container}>
      <div className={s.filter}>
        <div className={s.logo}>
          <Image src={logo} width={450} alt="Логотип" />
        </div>
        <div>
          <ul className={s.listFilter} onClick={filterHandler}>
            {filterItem.map((el, i) => (
              <li key={i} className={filter === el ? s.activeItem : ''}>
                {el}
              </li>
            ))}
          </ul>
          <ul onClick={typeHandler} className={s.listCategory}>
            {filter === 'Тип объекта' &&
              typeObj.map((el, i) => (
                <li
                  key={i}
                  className={typeState === el ? s.activeLi : s.itemLi}>
                  {el}
                </li>
              ))}

            {filter === 'Услуги' &&
              services.map((el, i) => (
                <li
                  key={i}
                  className={typeState === el ? s.activeLi : s.itemLi}>
                  {el}
                </li>
              ))}

            {filter === 'Год' &&
              year.map((el, i) => (
                <li
                  key={i}
                  className={
                    typeState === el.toString() ? s.activeLi : s.itemLi
                  }>
                  {el}
                </li>
              ))}
            {filter === 'Статус работы' &&
              status.map((el, i) => (
                <li
                  key={i}
                  className={typeState === el ? s.activeLi : s.itemLi}>
                  {el}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className={s.content}>
        <ul>
          {data.map((el) => (
            <li key={el.name} className={s.listContentItem}>
              <Image src={el.image} width={600} height={400} alt="Проект" />
              <span> {el.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
