'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Award, Users, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every strategy is designed with measurable outcomes in mind. No fluff, just results.'
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is my success. I build partnerships, not just consulting relationships.'
  },
  {
    icon: Zap,
    title: 'Innovation Focus',
    description: 'Leveraging cutting-edge methodologies and technologies to stay ahead of the curve.'
  },
  {
    icon: Award,
    title: 'Excellence Standard',
    description: 'Uncompromising commitment to delivering exceptional quality in every engagement.'
  }
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <p className="text-primary font-semibold tracking-wider uppercase">
                  About TYGEN
                </p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Building Systems That
                  <span className="text-primary block">Scale & Succeed</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  With over 5 years of experience helping businesses optimize operations and accelerate growth, 
                  I specialize in turning strategic vision into executable reality.
                </p>
              </div>
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Work With Me
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-lg" />
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business strategist"
                  className="relative rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
            <p>
              My passion for business optimization began early in my career when I witnessed firsthand 
              how small operational improvements could yield massive returns. What started as curiosity 
              evolved into expertise as I helped dozens of companies streamline processes, develop winning 
              strategies, and build systems that scale.
            </p>
            <p>
              Today, I work with ambitious entrepreneurs, growing companies, and established organizations 
              who refuse to accept "good enough." My approach combines data-driven analysis with proven 
              methodologies to deliver measurable results that impact the bottom line.
            </p>
            <p>
              Whether it's conducting comprehensive process audits, developing strategic roadmaps, or 
              optimizing sales and marketing operations, every engagement is designed with one goal: 
              your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Core Values That
              <span className="text-primary block">Drive Everything</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision, strategy, and recommendation I make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Track Record of
              <span className="text-primary block">Proven Results</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">Avg. Efficiency Gain</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-muted-foreground">Revenue Generated</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can transform your business challenges into competitive advantages.
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Start the Conversation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}