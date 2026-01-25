import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Instagram, Github, Facebook } from 'lucide-react';
import { LOGO_URL, SOCIAL_LINKS } from '@/lib/constants';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/internship', label: 'Internship' },
  { href: '/showcase', label: 'Showcase' },
  { href: '/resources', label: 'Resources' },
  { href: '/partnerships', label: 'Partners' },
  { href: '/community', label: 'Community' },
  { href: '/apply', label: 'Apply' },
];

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={LOGO_URL}
                alt="iSentry Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-2 text-xs font-semibold text-[#0D3B66] dark:text-[#00A8E8]">
              A Subsidiary of iSentry Technologies
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Empowering Africa&apos;s next generation of tech innovators
              through hands-on experience on live projects that impact millions.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-[#00A8E8] dark:text-gray-400 dark:hover:text-[#00A8E8]"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-[#00A8E8] dark:text-gray-400 dark:hover:text-[#00A8E8]"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-[#00A8E8] dark:text-gray-400 dark:hover:text-[#00A8E8]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-[#00A8E8] dark:text-gray-400 dark:hover:text-[#00A8E8]"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-[#00A8E8] dark:text-gray-400 dark:hover:text-[#00A8E8]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="">internship@isentrytechnologies.com</Link>
              <li>Lagos, Nigeria (Remote Program)</li>

            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} iSentry Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
