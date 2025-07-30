'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock blog posts - in a real app, this would come from a CMS or markdown files
const blogPosts = [
  {
    slug: 'strategic-planning-framework',
    title: 'The Ultimate Strategic Planning Framework for Growing Businesses',
    excerpt: 'Learn the proven 4-step framework I use to help companies develop winning strategies that drive measurable results.',
    date: '2025-01-15',
    author: 'TYGEN',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Strategy', 'Planning', 'Growth']
  },
  {
    slug: 'process-optimization-guide',
    title: 'How to Identify and Eliminate Operational Bottlenecks',
    excerpt: 'A comprehensive guide to process auditing that reveals hidden inefficiencies costing your business thousands.',
    date: '2025-01-10',
    author: 'TYGEN',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Operations', 'Process', 'Efficiency']
  },
  {
    slug: 'sales-funnel-optimization',
    title: 'The Science of Sales Funnel Optimization',
    excerpt: 'Data-driven strategies to improve conversion rates and accelerate revenue growth through systematic optimization.',
    date: '2025-01-05',
    author: 'TYGEN',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Sales', 'Marketing', 'Conversion']
  },
  {
    slug: 'leadership-transformation',
    title: 'Transforming Leadership Teams for Scale',
    excerpt: 'How to build high-performing leadership teams that can navigate growth challenges and drive organizational success.',
    date: '2024-12-28',
    author: 'TYGEN',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Leadership', 'Team Building', 'Culture']
  },
  {
    slug: 'digital-transformation-strategy',
    title: 'Digital Transformation Without the Buzzwords',
    excerpt: 'A practical approach to digital transformation that focuses on results rather than technology for its own sake.',
    date: '2024-12-20',
    author: 'TYGEN',
    readTime: '9 min read',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Digital', 'Technology', 'Innovation']
  },
  {
    slug: 'roi-measurement-framework',
    title: 'Measuring ROI on Strategic Initiatives',
    excerpt: 'Learn how to establish clear metrics and measurement frameworks that prove the value of your strategic investments.',
    date: '2024-12-15',
    author: 'TYGEN',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['ROI', 'Metrics', 'Analysis']
  }
];

export default function Blog() {
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
              Strategic Insights
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Business Growth
              <span className="text-primary block">Strategies & Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical strategies, proven frameworks, and actionable insights to help you 
              optimize operations and accelerate sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blogPosts[0].tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${blogPosts[0].slug}`}>
                      {blogPosts[0].title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base mb-6">
                    {blogPosts[0].excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="group" asChild>
                      <Link href={`/blog/${blogPosts[0].slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold">Latest Articles</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="group" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Read
                          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Stay Updated With
              <span className="text-primary block">Strategic Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get weekly insights on business optimization, strategic growth, and operational excellence 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <Button size="lg">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}