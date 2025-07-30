'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="py-20 bg-primary/5 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform
            <span className="text-primary block">Your Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Stop leaving money on the table. Let's identify the opportunities hiding in your operations 
            and build a strategic roadmap for sustainable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                <Calendar className="mr-2 h-4 w-4" />
                Book Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 p-6 bg-background rounded-lg border border-border max-w-md mx-auto"
          >
            <div className="text-sm text-muted-foreground mb-2">Free 30-minute consultation</div>
            <div className="font-semibold">No commitment • Immediate insights • Strategic roadmap</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}