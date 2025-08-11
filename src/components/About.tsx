import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Code, Palette, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 relative"
              style={{ backgroundSize: '200% 200%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              About Me
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-2xl -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              I'm a passionate developer who loves turning ideas into reality through code.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative group">
                <motion.div 
                  className="w-96 h-96 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="w-80 h-80 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div 
                      className="text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      JD
                    </motion.div>
                  </motion.div>
                  
                  {/* Animated rings */}
                  <motion.div
                    className="absolute inset-4 border-2 border-blue-500/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-8 border border-purple-500/20 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500/80 rounded-full blur-sm"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-8 h-8 bg-purple-500/80 rounded-full blur-sm"
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                />
                <motion.div
                  className="absolute top-1/2 -right-8 w-6 h-6 bg-pink-500/60 rounded-full blur-sm"
                  animate={{ 
                    y: [-10, 10, -10],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.8 }}
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <motion.h3 
                className="text-4xl font-bold text-white mb-8 relative"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Crafting Digital Experiences
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : {}}
                  transition={{ delay: 1, duration: 1 }}
                />
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                With over 5 years of experience in web development, I specialize in creating
                modern, responsive, and user-friendly applications. My journey started with
                curiosity and has evolved into a passion for clean code and innovative solutions.
              </motion.p>
              
              <motion.p 
                className="text-gray-300 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                I believe in the power of technology to transform ideas into reality, and I'm
                committed to delivering high-quality solutions that make a difference.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                {[
                  { icon: Code, title: "Clean Code", desc: "Writing maintainable and scalable code" },
                  { icon: Palette, title: "UI/UX Design", desc: "Creating beautiful user interfaces" },
                  { icon: Zap, title: "Performance", desc: "Optimizing for speed and efficiency" },
                ].map(({ icon: Icon, title, desc }, index) => (
                  <motion.div
                    key={title}
                    className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.1 + index * 0.2, duration: 0.8 }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="text-blue-400 group-hover:text-blue-300 mb-4 transition-colors duration-300" size={28} />
                    </motion.div>
                    <h4 className="text-white font-semibold mb-2 text-lg group-hover:text-blue-100 transition-colors duration-300">{title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};