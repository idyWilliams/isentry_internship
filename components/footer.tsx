import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import { LOGO_URL, SOCIAL_LINKS } from '@/lib/constants';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/internship', label: 'Internship' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/apply', label: 'Apply' },
  { href: '/contact', label: 'Contact' },
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
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Empowering Africa's next generation of tech innovators through
              hands-on experience on live projects.
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
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-[#00A8E8] dark:text-gray-400 dark:hover:text-[#00A8E8]"
              >
                <Twitter className="h-5 w-5" />
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
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-[#00A8E8] dark:text-gray-400 dark:hover:text-[#00A8E8]"
              >
                <Github className="h-5 w-5" />
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
              <li>isentryinternship@gmail.com</li>
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
