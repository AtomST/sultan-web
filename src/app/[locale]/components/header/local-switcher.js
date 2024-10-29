'use client';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useState } from 'react';
import styles from './local-switcher.module.css';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const currentLocale = useLocale();
  const [isHovered, setIsHovered] = useState(false);
  
  const getNextLocale = (locale) => (locale === 'ru' ? 'en' : 'ru');
  
  const getFlagSvg = (locale) => {
    const flagStyle = isHovered ? { filter: 'brightness(0.9)' } : {};
    if (locale === 'ru') {
      //Флаг Великобритании
      return (
        <svg width="36px" height="36px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" style={flagStyle}>
          <path fill="#00247D" d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"/>
          <path fill="#CF1B2B" d="M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z"/>
          <path fill="#EEE" d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z"/>
          <path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"/>
        </svg>
      );
    } else {
      //Флаг России
      return (
        <svg width="36px" height="36px" viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={flagStyle}>
          <g clipPath="url(#clip0_503_2726)">
            <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5" strokeWidth="0.5"/>
            <mask id="mask0_503_2726" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
              <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white" strokeWidth="0.5"/>
            </mask>
            <g mask="url(#mask0_503_2726)">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 13.3333H28V6.66667H0V13.3333Z" fill="#0C47B7"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 20H28V13.3333H0V20Z" fill="#E53B35"/>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_503_2726">
              <rect width="28" height="20" rx="2" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      );
    }
  };

  const onButtonClick = () => {
    const nextLocale = getNextLocale(currentLocale);
    startTransition(() => {
      const currentPath = window.location.pathname;
      const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${nextLocale}`);
      router.replace(newPath);
    });
  };

  return (
    <button 
      onClick={onButtonClick} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      disabled={isPending} 
      style={{ background: 'none', border: 'none', padding: 0 }}
      className={styles.localeSwitcher}
    >
      {getFlagSvg(currentLocale)}
      <span className={styles.languageText}>
        {currentLocale === 'ru' ? 'English' : 'Русский'}
      </span>
    </button>
  );
}
