'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Search, Target, Settings, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';

const iconMap = {
  Search,
  Target,
  Settings,
  TrendingUp,
};

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'Comprehensive assessment of your current operations, challenges, and opportunities.'
  },
  {
    step: '02',
    title: 'Strategic Planning',
    description: 'Development of tailored solutions and actionable roadmaps aligned with your goals.'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Hands-on execution and optimization with continuous monitoring and adjustments.'
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'Ongoing refinement and scaling to ensure sustainable long-term results.'
  }
];

export default function Services() {
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
              Strategic Services
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Solutions
              <span className="text-primary block">That Drive Growth</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From process optimization to strategic planning, I provide end-to-end consulting services 
              designed to unlock your organization's full potential.
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Core Service
              <span className="text-primary block">Offerings</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Key Benefits:</h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" className="group w-full mt-6">
                          Learn More About {service.title}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Proven Methodology
              <span className="text-primary block">For Success</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My systematic approach ensures consistent results and measurable outcomes for every engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Results You Can
              <span className="text-primary block">Expect</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-primary mb-4">20-40%</div>
                  <h3 className="text-xl font-semibold mb-3">Efficiency Improvement</h3>
                  <p className="text-muted-foreground">
                    Streamlined processes that eliminate waste and optimize resource allocation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-primary mb-4">15-30%</div>
                  <h3 className="text-xl font-semibold mb-3">Cost Reduction</h3>
                  <p className="text-muted-foreground">
                    Significant savings through operational optimization and strategic improvements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-primary mb-4">25-50%</div>
                  <h3 className="text-xl font-semibold mb-3">Revenue Growth</h3>
                  <p className="text-muted-foreground">
                    Accelerated growth through strategic positioning and market optimization.
                  </p>
                </CardContent>
              </Card>
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
              Ready to Transform
              <span className="text-primary block">Your Operations?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your specific challenges and develop a customized strategy for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">
                  Learn More About Me
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}