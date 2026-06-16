import './globals.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

export const metadata = {
  title: 'Le Hoang Thien | Portfolio',
  description: 'Engineering-focused personal portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
