import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const skillsData = [
  { category: "Frontend", skills: [
    { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", level: 90, color: "from-blue-500 to-indigo-600" },
    { name: "Next.js", level: 85, color: "from-gray-600 to-gray-800" },
    { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-teal-600" },
  ]},
  { category: "Backend", skills: [
    { name: "Node.js", level: 88, color: "from-green-400 to-green-600" },
    { name: "Python", level: 82, color: "from-yellow-400 to-orange-500" },
    { name: "PostgreSQL", level: 85, color: "from-blue-600 to-purple-600" },
    { name: "MongoDB", level: 80, color: "from-green-500 to-green-700" },
  ]},
  { category: "Tools & Others", skills: [
    { name: "Git", level: 93, color: "from-orange-400 to-red-500" },
    { name: "Docker", level: 78, color: "from-blue-500 to-blue-700" },
    { name: "AWS", level: 75, color: "from-yellow-500 to-orange-600" },
    { name: "Figma", level: 70, color: "from-purple-400 to-pink-500" },
  ]},
];

export const Skills: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillsData.map(({ category, skills }, categoryIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white text-center pb-4 border-b border-gray-700">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills.map(({ name, level, color }, skillIndex) => (
                    <motion.div
                      key={name}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{name}</span>
                        <span className="text-gray-400 text-sm">{level}%</span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${level}%` } : {}}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.5, ease: "easeOut" }}
                        >
                          <motion.div
                            className="absolute right-0 top-0 w-full h-full bg-white/20 rounded-full"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 1.5 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};