'use client';
import s from './page.module.css';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import { useEffect } from 'react';
import { dataInit } from '../../../data/data';

export default function ProjectItem({ params }) {
  useEffect(() => {
    window.scrollTo(0, -window.scrollY);
  }, []);

  const data = dataInit.find((el) => el.id == params.id);

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
        <div className={s.description}>{data.description}</div>
      </div>
      <div className={s.content}>
        <ul className={s.photoList}>
          {data.image.map((photo, i) => (
            <li key={i} className={s.listContentItem}>
              <Image src={photo} fill={true} alt="Проект" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
