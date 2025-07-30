'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Calendar } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent } from '@/components/ui/card';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'hello@tygen.com',
    description: 'Send us an email anytime'
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm'
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'San Francisco, CA',
    description: 'Available for on-site consulting'
  },
  {
    icon: Clock,
    title: 'Response Time',
    details: '< 24 hours',
    description: 'We respond quickly'
  }
];

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build Something
              <span className="text-primary block">Extraordinary</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business? I'm here to help you navigate challenges, 
              optimize operations, and achieve sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                    <p className="font-medium mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently Asked
              <span className="text-primary block">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">How long does a typical engagement take?</h3>
                  <p className="text-muted-foreground">
                    Project timelines vary based on scope and complexity. Most strategic assessments take 2-4 weeks, 
                    while full implementations can range from 3-6 months. We'll provide a detailed timeline during our initial consultation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">What's included in the free consultation?</h3>
                  <p className="text-muted-foreground">
                    The 30-minute consultation includes a high-level assessment of your current challenges, 
                    identification of key opportunities, and a preliminary roadmap for improvement. No strings attached.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Do you work with remote teams?</h3>
                  <p className="text-muted-foreground">
                    Absolutely. I work with clients globally and have extensive experience with remote teams. 
                    All consulting can be delivered virtually, with on-site visits available when beneficial.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">What industries do you serve?</h3>
                  <p className="text-muted-foreground">
                    I work across various industries including technology, manufacturing, professional services, 
                    and e-commerce. The operational and strategic principles I apply are universally effective.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}