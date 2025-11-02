'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';

export default function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    github: '',
    motivation: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }

    if (!formData.github.trim()) {
      newErrors.github = 'GitHub/Portfolio link is required';
    } else if (
      !/^https?:\/\/.+/.test(formData.github) &&
      !/^github\.com\/.+/.test(formData.github)
    ) {
      newErrors.github = 'Please provide a valid URL';
    }

    if (!formData.motivation.trim()) {
      newErrors.motivation = 'Motivation is required';
    } else if (formData.motivation.trim().length < 50) {
      newErrors.motivation = 'Please provide at least 50 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const mailtoLink = `mailto:isentryinternship@gmail.com?subject=Internship Application - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCountry: ${formData.country}\nGitHub/Portfolio: ${formData.github}\n\nMotivation:\n${formData.motivation}`
      )}`;

      window.location.href = mailtoLink;
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-[80vh] flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex rounded-full bg-green-100 p-4 dark:bg-green-900">
            <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Application Submitted!
          </h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            Thank you for your interest in iSentry Internship. We'll review your application and get back to you soon.
          </p>
          <Button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                country: '',
                github: '',
                motivation: '',
              });
            }}
            variant="outline"
          >
            Submit Another Application
          </Button>
        </motion.div>
      </div>
    );
  }

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
              Apply to iSentry Internship
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Applications for the next cohort are now open! Join Africa's most practical internship experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Application Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Nigeria"
                      className={errors.country ? 'border-red-500' : ''}
                    />
                    {errors.country && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.country}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="github">GitHub / Portfolio Link *</Label>
                    <Input
                      id="github"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      placeholder="https://github.com/yourusername"
                      className={errors.github ? 'border-red-500' : ''}
                    />
                    {errors.github && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.github}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="motivation">
                      Why do you want to join iSentry Internship? *
                    </Label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      placeholder="Tell us about your motivation, goals, and what you hope to learn..."
                      rows={6}
                      className={errors.motivation ? 'border-red-500' : ''}
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      {formData.motivation.length} characters (minimum 50)
                    </p>
                    {errors.motivation && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.motivation}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#00A8E8] text-white hover:bg-[#00A8E8]/90"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
