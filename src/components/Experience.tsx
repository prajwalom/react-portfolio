import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Calendar, MapPin } from 'lucide-react';

const experienceData = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovation Inc.",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description: "Leading development of scalable web applications and mentoring junior developers. Built microservices architecture serving 100K+ users.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    location: "New York, NY",
    description: "Developed and maintained multiple client projects, improving performance by 40% and reducing load times significantly.",
    technologies: ["React", "Python", "Django", "MongoDB", "Redis"],
  },
  {
    title: "Frontend Developer",
    company: "Creative Web Agency",
    period: "2019 - 2020",
    location: "Austin, TX",
    description: "Created responsive web applications and collaborated with design teams to implement pixel-perfect UI components.",
    technologies: ["React", "TypeScript", "Sass", "Figma", "Git"],
  },
  {
    title: "Junior Developer",
    company: "StartUp Innovations",
    period: "2018 - 2019",
    location: "Remote",
    description: "Started my professional journey building web applications and learning best practices in software development.",
    technologies: ["JavaScript", "HTML/CSS", "Bootstrap", "jQuery", "PHP"],
  },
];

export const Experience: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My journey through various roles and the impact I've made.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3 }}
                />

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-white mb-1 sm:mb-0">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="text-blue-400 font-semibold mb-2">
                      {exp.company}
                    </div>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <MapPin size={14} className="mr-1" />
                      {exp.location}
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};