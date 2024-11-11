import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import Header from './components/header/header';
import Footer from './components/Footer/Footer';
import "./globals.scss";
import "./vars.scss";

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['300','400', '600', '700', '800'],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default async function RootLayout({ children, params }) {
  const {locale} = params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
