'use client';
import Image from 'next/image';
import s from './page.module.css';
import grad from '../public/Grain_01.jpg';
import photo1 from '../public/photo1.jpg';
import photo2 from '../public/photo2.jpg';
import photo3 from '../public/photo3.jpg';
import arrow from '../public/arrow.png';
import logo from '../public/logo.svg';

import { useLayoutEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [top, setTop] = useState(0);
  const [lng, setLng] = useState(false);

  const handler = () => {
    setTop(window.scrollY);
  };

  useLayoutEffect(() => {
    setTop(window.scrollY);
    document.addEventListener('scroll', handler);
    return () => document.removeEventListener('scroll', handler);
  }, []);
  useLayoutEffect(() => {
    const arrDiv = [...document.querySelectorAll("[data-id='fon']")];
    const heightW = window.innerHeight;

    if (top < heightW) {
      arrDiv[0].style.opacity = 1;
      arrDiv[1].style.opacity = 0;
      arrDiv[2].style.opacity = 0;
      arrDiv[3].style.opacity = 0;
      arrDiv[4].style.opacity = 0;
    }
    if (heightW <= top && top < 2 * heightW) {
      arrDiv[1].style.opacity = 1;
      arrDiv[0].style.opacity = 0;
      arrDiv[2].style.opacity = 0;
      arrDiv[3].style.opacity = 0;
      arrDiv[4].style.opacity = 0;
    }
    if (2 * heightW <= top && top < 3 * heightW) {
      arrDiv[2].style.opacity = 1;
      arrDiv[0].style.opacity = 0;
      arrDiv[1].style.opacity = 0;
      arrDiv[3].style.opacity = 0;
      arrDiv[4].style.opacity = 0;
    }
    if (3 * heightW <= top && top < 4 * heightW) {
      arrDiv[2].style.opacity = 0;
      arrDiv[0].style.opacity = 0;
      arrDiv[1].style.opacity = 0;
      arrDiv[3].style.opacity = 1;
      arrDiv[4].style.opacity = 0;
    }
    if (top >= 4 * heightW) {
      arrDiv[2].style.opacity = 0;
      arrDiv[0].style.opacity = 0;
      arrDiv[1].style.opacity = 0;
      arrDiv[3].style.opacity = 0;
      arrDiv[4].style.opacity = 1;
    }
  }, [top]);

  return (
    <div className={s.main}>
      <div className={s.containerMain}>
        <Image
          data-id="fon"
          src={grad}
          fill={true}
          alt="Природа"
          className={s.fonMain}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
        <div className={s.blockText}>
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
          <span className={s.textSlogan}>
            Любим недвижимоcть, <br></br> как людей
          </span>
        </div>
      </div>
      <div className={s.container}>
        <Image
          data-id="fon"
          src={photo1}
          fill={true}
          alt="Природа"
          className={s.fon}
          style={{ opacity: 0 }}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
        <Link href={'/projects/1'} className={s.linkText}>
          <span className={s.textName}>Ресторан в горах</span>{' '}
        </Link>
        <div className={s.arrowBlock}>
          <Image
            src={arrow}
            alt="Природа"
            fill={true}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>
      <div className={s.container}>
        <Image
          data-id="fon"
          src={photo2}
          fill={true}
          alt="Природа"
          className={s.fon}
          style={{ opacity: 0 }}
        />
        <Link href={'/projects/2'} className={s.linkText}>
          <span className={s.textName}>MOD</span>
        </Link>
        <div className={s.arrowBlock}>
          <Image
            src={arrow}
            alt="Природа"
            fill={true}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>
      <div className={s.container}>
        <Image
          data-id="fon"
          src={photo3}
          fill={true}
          alt="Природа"
          className={s.fon}
          style={{ opacity: 0 }}
        />
        <Link href={'/projects/3'} className={s.linkText}>
          <span className={s.textName}>Гай-Кодзор</span>
        </Link>
        <div className={s.arrowBlock}>
          <Image
            src={arrow}
            alt="Природа"
            fill={true}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>
      <div className={s.containerFooter}>
        <Image
          data-id="fon"
          src={grad}
          fill={true}
          alt="Природа"
          className={s.fon}
          style={{ opacity: 0 }}
        />
        <div className={s.myFooter}>
          <div>
            <a href="mailto:info@adwill.ru">info@adwill.ru</a>
            <a href="tel:+84956656253">8 (495) 665-62-53</a>
          </div>
          <div onClick={() => setLng(!lng)}>{lng ? 'RU' : 'EN'}</div>
        </div>
      </div>
    </div>
  );
}
