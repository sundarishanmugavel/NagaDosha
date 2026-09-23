import type { Metadata } from 'next';
import '../css/variables.css';
import '../css/base.css';
import '../css/navbar.css';
import '../css/hero.css';
import '../css/info-cards.css';
import '../css/landing-sections.css';
import '../css/footer.css';

export const metadata: Metadata = {
  title: 'Naga Dosha Calculator | AstroVed',
  description: 'Check your Naga Dosha status for free. Get detailed astrological analysis, severity indicators, and effective remedies for peace and harmony.',
  icons: {
    icon: '/images/fav_icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
