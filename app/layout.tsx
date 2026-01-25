import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import "flag-icons/css/flag-icons.min.css";

const helix = localFont({
  src: [
    {
      path: './fonts/Hellix-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Hellix-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Hellix-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Hellix-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Hellix-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-helix',
});

export const metadata: Metadata = {
  title: 'iSentry Internship | Empowering African Tech Talent',
  description: 'Join Africa\'s most practical tech internship program. Work on real projects, gain hands-on experience, and launch your tech career with expert mentorship.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${helix.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
