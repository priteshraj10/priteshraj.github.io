'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/app/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get to know me better - my background, experience, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/about.jpg"
              alt="Pritesh Raj working"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="subheading">Who I Am</h3>
            <p className="mb-4 text-muted-foreground">
              I'm a passionate software developer with a strong focus on creating efficient, 
              scalable, and user-friendly applications. With a background in computer science 
              and several years of industry experience, I've developed a deep understanding of 
              software development principles and best practices.
            </p>
            
            <h3 className="subheading mt-6">My Approach</h3>
            <p className="mb-4 text-muted-foreground">
              I believe in writing clean, maintainable code that solves real problems. My approach 
              combines technical excellence with a user-centered mindset, ensuring that the solutions 
              I build not only work well but also provide an excellent user experience.
            </p>
            
            <h3 className="subheading mt-6">When I'm Not Coding</h3>
            <p className="mb-4 text-muted-foreground">
              Outside of work, I enjoy staying up-to-date with the latest tech trends, contributing 
              to open-source projects, and sharing my knowledge through blog posts and community 
              involvement. I also enjoy hiking, photography, and exploring new cuisines.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-primary mb-2">Education</h4>
                  <p className="text-sm text-muted-foreground">
                    B.S. in Computer Science<br />
                    University of Technology
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-primary mb-2">Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    5+ Years<br />
                    Professional Development
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 