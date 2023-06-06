'use client';
import s from './page.module.css';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import foto1 from '../../../public/photo1.jpg';
import foto2 from '../../../public/photo2.jpg';
import foto3 from '../../../public/photo3.jpg';
import { useEffect } from 'react';

export default function ProjectItem({ params }) {
  useEffect(() => {
    window.scrollTo(0, -window.scrollY);
  }, []);

  const dataInit = [
    {
      id: 1,
      name: 'Савёловский сити',
      type: 'БЦ',
      year: '2017',
      status: 'Активный',
      service: 'Управление коммерческой недвижимостью',
      description: `Горный ресторан в Хибинах – это
бетонное плато, интегрированное в
скальное основание, с панорамным
остеклением по периметру.`,
      image: [foto1, foto2, foto3],
    },
    {
      id: 2,
      name: 'Дискавери',
      type: 'TЦ',
      year: '2021',
      status: 'Активный',
      service: 'Управление коммерческой недвижимостью',
      description: `Горный ресторан в Хибинах – это
бетонное плато, интегрированное в
скальное основание, с панорамным
остеклением по периметру.`,
      image: [foto1, foto2, foto3],
    },
    {
      id: 3,
      name: 'Фили град',
      type: 'ТЦ',
      year: '2021', //нет года в таблице
      status: 'Активный',
      service: 'Управление коммерческой недвижимостью',
      description: `Горный ресторан в Хибинах – это
бетонное плато, интегрированное в
скальное основание, с панорамным
остеклением по периметру.`,
      image: [foto1, foto2, foto3],
    },
    {
      id: 4,
      name: 'ФИЛИ',
      type: 'ДОУ',
      year: '2022',
      status: 'Активный',
      service: 'Управление коммерческой недвижимостью',
      description: `Горный ресторан в Хибинах – это
бетонное плато, интегрированное в
скальное основание, с панорамным
остеклением по периметру.`,
      image: [foto1, foto2, foto3],
    },
    {
      id: 5,
      name: 'ЯСНЫЙ',
      type: 'ДОУ',
      year: '2022',
      status: 'Активный',
      service: 'Управление коммерческой недвижимостью',
      description: `Горный ресторан в Хибинах – это
бетонное плато, интегрированное в
скальное основание, с панорамным
остеклением по периметру.`,
      image: [foto1, foto2, foto3],
    },
    {
      id: 6,
      name: 'ПЕРОВСКИЙ',
      type: 'ДОУ',
      year: '2022',
      status: 'Активный',
      service: 'Управление коммерческой недвижимостью',
      description: `Горный ресторан в Хибинах – это
бетонное плато, интегрированное в
скальное основание, с панорамным
остеклением по периметру.`,
      image: [foto1, foto2, foto3],
    },
    {
      id: 7,
      name: 'Селигер сити',
      type: 'Стрит',
      year: '2022',
      status: 'Активный',
      service: 'Управление коммерческой недвижимостью',
      description: `Горный ресторан в Хибинах – это
бетонное плато, интегрированное в
скальное основание, с панорамным
остеклением по периметру.`,
      image: [foto1, foto2, foto3],
    },
    {
      id: 8,
      name: 'ICITY',
      type: 'БЦ',
      year: '2023',
      status: 'Активный',
      service: 'Консалтинг',
      description: `Горный ресторан в Хибинах – это
бетонное плато, интегрированное в
скальное основание, с панорамным
остеклением по периметру.`,
      image: [foto1, foto2, foto3],
    },
    {
      id: 9,
      name: 'Никольская',
      type: 'МФК',
      year: '2022',
      status: 'Завершён',
      service: 'Консалтинг',
      description: `Горный ресторан в Хибинах – это
бетонное плато, интегрированное в
скальное основание, с панорамным
остеклением по периметру.`,
      image: [foto1, foto2, foto3],
    },
    {
      id: 10,
      name: 'ТЦ Коньково',
      type: 'ТЦ',
      year: '2022',
      status: 'Завершён',
      service: 'Управление коммерческой недвижимостью',
      description: `Горный ресторан в Хибинах – это
бетонное плато, интегрированное в
скальное основание, с панорамным
остеклением по периметру.`,
      image: [foto1, foto2, foto3],
    },
  ];
  console.log(dataInit);
  const data = dataInit.find((el) => el.id == params.id);
  console.log(data);
  return (
    <div className={s.container}>
      <div className={s.filter}>
        <div className={s.logo}>
          <Image src={logo} width={450} alt="Логотип" />
        </div>
        <div className={s.description}>{data.description}</div>
      </div>
      <div className={s.content}>
        <ul className={s.photoList}>
          {data.image.map((photo, i) => (
            <li key={i} className={s.listContentItem}>
              <Image src={photo} width={600} height={400} alt="Проект" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
