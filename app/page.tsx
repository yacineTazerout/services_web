import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Testimonials } from '@/components/sections/testimonials';
import { CTA } from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}