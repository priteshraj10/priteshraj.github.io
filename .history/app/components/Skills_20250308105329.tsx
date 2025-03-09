'use client';

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiLayout, FiTool, FiCloud } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <FiLayout className="text-3xl text-primary mb-4" />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <FiServer className="text-3xl text-primary mb-4" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'Django', level: 70 },
        { name: 'RESTful APIs', level: 90 },
      ],
    },
    {
      id: 'database',
      title: 'Database',
      icon: <FiDatabase className="text-3xl text-primary mb-4" />,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Redis', level: 70 },
        { name: 'Firebase', level: 80 },
      ],
    },
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <FiCode className="text-3xl text-primary mb-4" />,
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 70 },
        { name: 'C++', level: 65 },
      ],
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      icon: <FiCloud className="text-3xl text-primary mb-4" />,
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 75 },
        { name: 'Kubernetes', level: 65 },
        { name: 'Terraform', level: 60 },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Others',
      icon: <FiTool className="text-3xl text-primary mb-4" />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Jest/Testing', level: 80 },
        { name: 'Figma', level: 70 },
        { name: 'SEO', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg"
            >
              <div className="text-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 