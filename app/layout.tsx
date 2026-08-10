import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';
import BackgroundParticles from '@/components/3d/BackgroundParticles';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DEEPAN S R | AI Full Stack Developer & MERN Architect',
  description:
    'Official portfolio of DEEPAN S R - AI Full Stack Developer, MERN Stack Specialist, and B.E. Computer Science Engineering student at Mahendra Engineering College.',
  keywords: [
    'Deepan S R',
    'Deepan S R Portfolio',
    'AI Full Stack Developer',
    'MERN Stack Engineer',
    'React Developer',
    'Node.js Developer',
    'Machine Learning Web Apps',
    'Mahendra Engineering College',
    'Tamil Nadu Web Developer',
  ],
  authors: [{ name: 'Deepan S R', url: 'https://github.com/deepansr007' }],
  openGraph: {
    title: 'DEEPAN S R | AI Full Stack Developer',
    description:
      'Ultra modern 3D interactive portfolio of Deepan S R. Explore MERN healthcare apps, AI symptom diagnostics, and enterprise software engineering projects.',
    type: 'website',
    locale: 'en_US',
    siteName: 'DEEPAN S R Portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${firaCode.variable}`}>
      <body className="bg-[#050816] text-white selection:bg-primary selection:text-white antialiased">
        <CustomCursor />
        <BackgroundParticles />
        {children}
      </body>
    </html>
  );
}
