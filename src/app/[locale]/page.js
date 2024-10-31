"use client";
import {useTranslations} from 'next-intl';
import Footer from './components/Footer/Footer';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import PromoCarousel from './components/PromoCarousel/PromoCarousel';
import CatalogCarousel from './components/CatalogCarousel/CatalogCarousel';
import Header from './components/header/header';
import ContactMapSection from './components/ContactMapSection/ContactMapSection';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <>
        <Header />
        <main className="page-main">
               <FeaturedProducts />
               <PromoCarousel />
               <CatalogCarousel />
        <div>
            <ContactMapSection />
        </div>
        </main>
        
        <Footer></Footer>
    </>

  );
}
