'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Twitter, Instagram, Github, Facebook, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: CONTACT_INFO.email,
    link: `mailto:${CONTACT_INFO.email}`,
  },
  // {
  //   icon: MapPin,
  //   title: 'Location',
  //   value: CONTACT_INFO.location,
  // },
];

const socialLinks = [
  { icon: Linkedin, name: 'LinkedIn', url: SOCIAL_LINKS.linkedin },
  { icon: X, name: 'Twitter', url: SOCIAL_LINKS.x },
  { icon: Instagram, name: 'Instagram', url: SOCIAL_LINKS.instagram },
  { icon: Facebook, name: 'Facebook', url: SOCIAL_LINKS.facebook },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-[#0D3B66] to-[#00A8E8] py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Get in Touch
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Have questions about the program? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="rounded-lg bg-[#00A8E8]/10 p-3">
                          <method.icon className="h-6 w-6 text-[#00A8E8]" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                            {method.title}
                          </h3>
                          {method.link ? (
                            <a
                              href={method.link}
                              className="text-gray-600 transition-colors hover:text-[#00A8E8] dark:text-gray-400"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-400">
                              {method.value}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-[#00A8E8] hover:text-white dark:bg-gray-800 dark:text-gray-400"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Our Location
                </h3>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7085607217556!2d3.3792057!3d6.4281238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="iSentry Location"
                  ></iframe>
                </div>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Subject</Label>
                      <Input
                        id="email"
                        name="subject"
                        type="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject of your email"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what's on your mind..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#00A8E8] text-white hover:bg-[#00A8E8]/90"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
