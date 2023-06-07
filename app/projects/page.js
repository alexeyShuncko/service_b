'use client';

import { useEffect, useState } from 'react';
import s from './page.module.css';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import Link from 'next/link';
import { dataInit } from '../../data/data';

export default function Projects() {
  const [filter, setFilter] = useState('Тип объекта');
  const [typeState, setTypeState] = useState('');

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
  }, [filter, typeState]);

  const filterItem = ['Тип объекта', 'Услуги', 'Год', 'Статус работы'];
  const typeObj = ['БЦ', 'ТЦ', 'ДОУ', 'Стрит', 'МФК'];
  const services = ['Управление коммерческой недвижимостью', 'Консалтинг'];
  const year = [2017, 2021, 2022, 2023];
  const status = ['Активный', 'Завершён'];
  return (
    <div className={s.container}>
      <div className={s.filter}>
        <div className={s.logo}>
          <Image
            src={logo}
            fill={true}
            alt="Логотип"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
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
            <li key={el.name}>
              <Link href={`/projects/${el.id}`} className={s.listContentItem}>
                <div className={s.projectPhoto}>
                  <Image
                    src={el.image[0]}
                    fill={true}
                    alt="Проект"
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                </div>
                <span> {el.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
