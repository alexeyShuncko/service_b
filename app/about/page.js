'use client';

import { useEffect, useState } from 'react';
import s from './page.module.css';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import rustam from '../../public/team/rustam.jpg';
import iolanta from '../../public/team/iolanta.jpg';
import vladislav from '../../public/team/vladislav.jpg';
import olga from '../../public/team/olga.jpg';
import yulia from '../../public/team/yulia.jpg';
import marina from '../../public/team/marina.jpg';
import noPhoto from '../../public/team/noPhoto.jpg';

import client1 from '../../public/clients/client1.webp';
import client2 from '../../public/clients/client2.webp';
import client3 from '../../public/clients/client3.webp';
import client4 from '../../public/clients/client4.png';
import client5 from '../../public/clients/client5.webp';
import client6 from '../../public/clients/client6.jpg';

import about1 from '../../public/about/about1.jpg';
import about2 from '../../public/about/about2.jpg';
import about3 from '../../public/about/about3.jpg';

export default function About() {
  const [filter, setFilter] = useState('О компании');

  useEffect(() => {
    window.scrollTo(0, -window.scrollY);
  }, [filter]);

  const filterHandler = (e) => {
    if (e.target.nodeName === 'LI') {
      setFilter(e.target.innerText);
    }
  };

  const filterItem = ['О компании', 'Команда', 'Клиенты', 'Партнёры'];

  const about = [about1, about2, about3];

  const team = [
    {
      name: 'Топчиев Рустам',
      photo: rustam,
      id: 'rustam',
      position: 'Генеральный директор',
    },
    {
      name: 'Овчинникова Иоланта',
      photo: iolanta,
      id: 'iolanta',
      position: 'Исполнительный директор',
    },
    {
      name: 'Ворошилов Владислав',
      photo: vladislav,
      id: 'vladislav',
      position: 'Заместитель генерального директора',
    },
    {
      name: 'Школьна Ольга',
      photo: olga,
      id: 'olga',
      position: 'Финансовый директор',
    },
    {
      name: 'Назмутдинова Юлия',
      photo: yulia,
      id: 'yulia',
      position: 'Управлящая объектом',
    },
    {
      name: 'Ковалёва Марина',
      photo: marina,
      id: 'marina',
      position: 'Руководитель отдела консалтинга',
    },
    {
      name: 'Назаров Евгений',
      photo: noPhoto,
      id: 'evgen',
      position: 'Руководитель юридического отдела',
    },
  ];

  const arrClients = [client1, client2, client3, client4, client5, client6];

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
          <div className={s.listCategory}>
            {filter === 'О компании' && (
              <div className={s.text}>
                Компания "Сервис в плюс" была создана компаниями Adwill и MR
                Group для создания качественно нового подхода к управлению
                коммерческой недвижимостью и внедрению концепции гостеприимства
                на объектах.{' '}
              </div>
            )}

            {filter === 'Команда' && (
              <ul>
                {team.map((hum) => (
                  <li key={hum.name} className={s.teamItem}>
                    <a href={`#${hum.id}`}> {hum.name}</a>
                  </li>
                ))}
              </ul>
            )}

            {filter === 'Клиенты' && (
              <div>
                <div>АО "МР "Групп"</div>
                <br></br>
                Компания "Сервис в плюс" была создана компаниями Adwill и MR
                Group для создания качественно нового подхода к управлению
                коммерческой недвижимостью и внедрению концепции гостеприимства
                на объектах. Что-то о клиентах ...
              </div>
            )}
            {filter === 'Партнёры' && (
              <ul>
                {team.slice(0, 3).map((hum) => (
                  <li key={hum.name} className={s.teamItem}>
                    <a href={`#${hum.id}`}> {hum.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className={s.content}>
        {filter === 'О компании' && (
          <ul className={s.listFhotosTeam}>
            {about.map((img, i) => (
              <li key={i}>
                <Image src={img} width={450} height={300} alt="Фото" />
              </li>
            ))}
          </ul>
        )}
        {filter === 'Команда' && (
          <ul className={s.listFhotosTeam}>
            {team.map((hum, i) => (
              <li key={i} className={s.teamPhotos} id={hum.id}>
                <Image src={hum.photo} width={300} height={450} alt="Фото" />
                <span className={s.name}>{hum.name}</span>
                <span>{hum.position}</span>
              </li>
            ))}
          </ul>
        )}

        {filter === 'Клиенты' && (
          <ul className={s.listFhotosTeam}>
            <li className={s.clients}>
              {arrClients.map((ico, i) => (
                <Image src={ico} width={120} height={120} alt="Фото" key={i} />
              ))}
            </li>
            <li className={s.clients}>
              {arrClients.map((ico, i) => (
                <Image src={ico} width={120} height={120} alt="Фото" key={i} />
              ))}
            </li>
            <li className={s.clients}>
              {arrClients.map((ico, i) => (
                <Image src={ico} width={120} height={120} alt="Фото" key={i} />
              ))}
            </li>
          </ul>
        )}

        {filter === 'Партнёры' && (
          <ul className={s.listFhotosTeam}>
            {team.slice(0, 3).map((hum, i) => (
              <li key={i} className={s.teamPhotos} id={hum.id}>
                <Image src={hum.photo} width={300} height={450} alt="Фото" />
                <span className={s.name}>{hum.name}</span>
                <span>{hum.position}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
