'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/app/components/ui/image';
import { ExternalLink, Github, Tag } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and secure payment processing.',
      image: '/images/projects/ecommerce.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/priteshraj/ecommerce-platform',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and team collaboration with real-time updates.',
      image: '/images/projects/taskmanager.jpg',
      tags: ['React', 'Firebase', 'Redux', 'Material UI'],
      category: 'web',
      liveUrl: 'https://example-taskmanager.com',
      githubUrl: 'https://github.com/priteshraj/task-manager',
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'A mobile application that provides accurate weather forecasts with interactive maps and notifications.',
      image: '/images/projects/weather.jpg',
      tags: ['React Native', 'API Integration', 'Geolocation'],
      category: 'mobile',
      liveUrl: 'https://example-weather.com',
      githubUrl: 'https://github.com/priteshraj/weather-app',
    },
    {
      id: 4,
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing complex datasets with customizable charts and filters.',
      image: '/images/projects/dashboard.jpg',
      tags: ['D3.js', 'Vue.js', 'Python', 'Flask'],
      category: 'data',
      liveUrl: 'https://example-dashboard.com',
      githubUrl: 'https://github.com/priteshraj/data-dashboard',
    },
  ];
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'data', name: 'Data Projects' },
  ];
  
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my recent work and projects that showcase my skills and expertise.
          </p>
        </motion.div>
        
        <Tabs defaultValue="all" className="w-full mb-12" onValueChange={setFilter}>
          <TabsList className="flex justify-center">
            {categories.map(category => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map(category => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {(category.id === 'all' ? projects : projects.filter(p => p.category === category.id)).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col overflow-hidden">
                      <div className="relative h-60 w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => (
                            <span
                              key={tag}
                              className="inline-flex items-center text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                            >
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-4 mt-auto">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                          >
                            <Github className="h-4 w-4 mr-1" />
                            Source Code
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Projects; 