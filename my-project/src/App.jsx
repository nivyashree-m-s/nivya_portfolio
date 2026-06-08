import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Mail, Phone, Linkedin, Github, ExternalLink, ArrowUp } from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  // Floating blob component
  const FloatingBlob = ({ delay, size, className }) => (
    <motion.div
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
      }}
      className={`absolute rounded-full mix-blend-multiply blur-2xl opacity-20 ${className}`}
      style={{ width: size, height: size }}
    />
  )

  // Navbar
  const Navbar = () => (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 backdrop-blur-md ${
        isDarkMode ? 'bg-gray-900/80' : 'bg-cream/80'
      } border-b ${isDarkMode ? 'border-gray-700' : 'border-dusty-pink/20'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <motion.a
          href="#home"
          className={`text-2xl font-bold font-playfair ${
            isDarkMode ? 'text-dusty-pink' : 'text-warm-brown'
          }`}
          whileHover={{ scale: 1.05 }}
        >
          NM
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['about', 'skills', 'projects', 'education', 'contact'].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              whileHover={{ y: -2 }}
              className={`font-poppins capitalize text-sm font-medium ${
                isDarkMode ? 'text-gray-300 hover:text-dusty-pink' : 'text-warm-brown hover:text-dusty-pink'
              } transition`}
            >
              {item}
            </motion.button>
          ))}
          <motion.button
            onClick={() => setIsDarkMode(!isDarkMode)}
            whileHover={{ scale: 1.1 }}
            className={`p-2 rounded-full ${
              isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-dusty-pink/20 text-warm-brown'
            }`}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            onClick={() => setIsDarkMode(!isDarkMode)}
            whileHover={{ scale: 1.1 }}
            className={`p-2 rounded-full ${
              isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-dusty-pink/20 text-warm-brown'
            }`}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </motion.button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 ${isDarkMode ? 'text-dusty-pink' : 'text-warm-brown'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-cream'} border-t ${
              isDarkMode ? 'border-gray-700' : 'border-dusty-pink/20'
            }`}
          >
            <div className="px-4 py-4 space-y-4">
              {['about', 'skills', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left capitalize font-poppins ${
                    isDarkMode ? 'text-gray-300' : 'text-warm-brown'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )

  // Hero Section
  const HeroSection = () => (
    <section
      id="home"
      className={`relative min-h-screen ${
        isDarkMode ? 'bg-gray-900' : 'bg-cream'
      } overflow-hidden flex items-center justify-center pt-20`}
    >
      {/* Floating blobs */}
      <FloatingBlob delay={0} size="300px" className="top-20 left-10 bg-dusty-pink" />
      <FloatingBlob delay={1} size="250px" className="bottom-20 right-10 bg-sage-green" />
      <FloatingBlob delay={2} size="200px" className="top-1/2 right-1/4 bg-dusty-pink" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-6xl md:text-7xl font-playfair font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-warm-brown'
          }`}
        >
          Nivyashree M S
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-xl md:text-2xl font-caveat mb-6 ${
            isDarkMode ? 'text-dusty-pink' : 'text-dusty-pink'
          }`}
        >
          AI Enthusiast • Developer • Problem Solver
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`text-lg font-poppins mb-10 max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-warm-brown/80'
          }`}
        >
          Information Science student passionate about Artificial Intelligence, Machine Learning, Computer Vision, and building impactful software solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-dusty-pink text-white rounded-full font-poppins font-semibold hover:shadow-lg transition"
          >
            View Projects
          </motion.button>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 border-2 rounded-full font-poppins font-semibold flex items-center gap-2 transition ${
              isDarkMode
                ? 'border-dusty-pink text-dusty-pink hover:bg-dusty-pink/10'
                : 'border-dusty-pink text-dusty-pink hover:bg-dusty-pink/10'
            }`}
          >
            <Download size={18} /> Resume
          </motion.a>
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full font-poppins font-semibold transition ${
              isDarkMode
                ? 'border-2 border-sage-green text-sage-green hover:bg-sage-green/10'
                : 'border-2 border-sage-green text-sage-green hover:bg-sage-green/10'
            }`}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className={`w-6 h-10 border-2 ${isDarkMode ? 'border-dusty-pink' : 'border-dusty-pink'} rounded-full flex justify-center`}>
          <motion.div className="w-1 h-2 bg-dusty-pink rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )

  // About Section
  const AboutSection = () => (
    <section
      id="about"
      className={`py-20 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-5xl font-playfair font-bold mb-12 text-center ${
            isDarkMode ? 'text-white' : 'text-warm-brown'
          }`}
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`p-8 rounded-3xl backdrop-blur-md ${
            isDarkMode
              ? 'bg-gray-700/50 border border-gray-600'
              : 'bg-cream/50 border border-dusty-pink/20'
          }`}
        >
          <p className={`text-lg font-poppins leading-relaxed mb-6 ${
            isDarkMode ? 'text-gray-200' : 'text-warm-brown'
          }`}>
            I am an Information Science Engineering student at NMAM Institute of Technology with a strong interest in AI, Machine Learning, Computer Vision, and Full-Stack Development. I enjoy building innovative solutions, exploring new technologies, and transforming ideas into real-world applications.
          </p>

          <div>
            <h3 className={`text-2xl font-playfair font-bold mb-4 ${
              isDarkMode ? 'text-dusty-pink' : 'text-dusty-pink'
            }`}>
              Interests & Passions
            </h3>
            <div className="flex flex-wrap gap-3">
              {['AI & Machine Learning', 'Computer Vision', 'Web Development', 'Designing', 'Movies', 'Crafting'].map((interest, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-4 py-2 rounded-full font-poppins text-sm font-medium ${
                    isDarkMode
                      ? 'bg-dusty-pink/20 text-dusty-pink'
                      : 'bg-dusty-pink/20 text-dusty-pink'
                  }`}
                >
                  ✨ {interest}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )

  // Skills Section
  const SkillsSection = () => (
    <section
      id="skills"
      className={`py-20 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-cream'}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-5xl font-playfair font-bold mb-12 text-center ${
            isDarkMode ? 'text-white' : 'text-warm-brown'
          }`}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              category: 'Programming',
              skills: ['Java', 'Python', 'JavaScript', 'SQL'],
              color: 'dusty-pink',
            },
            {
              category: 'Web Development',
              skills: ['HTML', 'CSS', 'TypeScript', 'React'],
              color: 'sage-green',
            },
            {
              category: 'AI & Data',
              skills: ['YOLO', 'CNN', 'OpenCV', 'MySQL'],
              color: 'dusty-pink',
            },
            {
              category: 'Soft Skills',
              skills: ['Communication', 'Team Collaboration', 'Problem Solving', 'Analytical Thinking'],
              color: 'sage-green',
            },
          ].map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 rounded-2xl backdrop-blur-md ${
                isDarkMode
                  ? 'bg-gray-700/50 border border-gray-600'
                  : 'bg-white/50 border border-gray-200'
              }`}
            >
              <h3 className={`text-xl font-playfair font-bold mb-4 ${
                skillGroup.color === 'dusty-pink' ? 'text-dusty-pink' : 'text-sage-green'
              }`}>
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className={`font-poppins text-sm ${
                        isDarkMode ? 'text-gray-200' : 'text-warm-brown'
                      }`}>
                        {skill}
                      </span>
                    </div>
                    <div className={`h-2 rounded-full ${
                      isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={`h-full rounded-full ${
                          skillGroup.color === 'dusty-pink' ? 'bg-dusty-pink' : 'bg-sage-green'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )

  // Projects Section
  const ProjectsSection = () => (
    <section
      id="projects"
      className={`py-20 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-5xl font-playfair font-bold mb-12 text-center ${
            isDarkMode ? 'text-white' : 'text-warm-brown'
          }`}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Machine Learning Based Petri Dish Image Analysis',
              description: 'Developed a deep learning pipeline using YOLO and CNN models to automate bacterial colony detection and classification.',
              features: ['Computer Vision', 'Colony Detection', 'Automated Analysis', 'Medical Imaging'],
              tech: ['Python', 'YOLO', 'CNN', 'OpenCV'],
              color: 'dusty-pink',
            },
            {
              title: 'Restaurant Database Management System',
              description: 'Developed a relational database system for restaurant operations and staff management.',
              features: ['Database Design', 'Backend Operations', 'Query Optimization'],
              tech: ['MySQL', 'Python'],
              color: 'sage-green',
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`rounded-2xl overflow-hidden backdrop-blur-md h-full ${
                isDarkMode
                  ? 'bg-gray-700/50 border border-gray-600'
                  : 'bg-cream/50 border border-gray-200'
              }`}
            >
              <div className={`h-40 ${
                project.color === 'dusty-pink' ? 'bg-dusty-pink/20' : 'bg-sage-green/20'
              } flex items-center justify-center`}>
                <div className="text-6xl">
                  {project.color === 'dusty-pink' ? '🤖' : '💾'}
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-2xl font-playfair font-bold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-warm-brown'
                }`}>
                  {project.title}
                </h3>
                <p className={`font-poppins mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-warm-brown/80'
                }`}>
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.features.map((feature, i) => (
                      <span
                        key={i}
                        className={`text-xs font-poppins px-2 py-1 rounded-full ${
                          project.color === 'dusty-pink'
                            ? 'bg-dusty-pink/20 text-dusty-pink'
                            : 'bg-sage-green/20 text-sage-green'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-300/30 pt-4">
                  <p className={`text-sm font-poppins mb-3 ${
                    isDarkMode ? 'text-gray-400' : 'text-warm-brown/60'
                  }`}>
                    Tech Stack: {project.tech.join(', ')}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )

  // Education Section
  const EducationSection = () => (
    <section
      id="education"
      className={`py-20 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-cream'}`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-5xl font-playfair font-bold mb-12 text-center ${
            isDarkMode ? 'text-white' : 'text-warm-brown'
          }`}
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {[
            {
              school: 'NMAM Institute of Technology',
              degree: 'B.Tech Information Science and Engineering',
              period: '2023 – Present',
              detail: 'CGPA: 8.24',
              icon: '🎓',
            },
            {
              school: 'St. Aloysius PU College',
              degree: 'Pre University Course',
              period: '2021 – 2023',
              detail: 'Percentage: 86.17%',
              icon: '📚',
            },
          ].map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-6 rounded-2xl backdrop-blur-md ${
                isDarkMode
                  ? 'bg-gray-700/50 border border-gray-600'
                  : 'bg-white/50 border border-gray-200'
              }`}
            >
              <div className="flex gap-4">
                <div className="text-4xl">{edu.icon}</div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-playfair font-bold ${
                    isDarkMode ? 'text-white' : 'text-warm-brown'
                  }`}>
                    {edu.school}
                  </h3>
                  <p className={`font-poppins mt-1 ${
                    isDarkMode ? 'text-dusty-pink' : 'text-dusty-pink'
                  }`}>
                    {edu.degree}
                  </p>
                  <p className={`text-sm font-poppins mt-2 ${
                    isDarkMode ? 'text-gray-400' : 'text-warm-brown/60'
                  }`}>
                    {edu.period}
                  </p>
                  <p className={`text-sm font-poppins font-semibold mt-2 ${
                    isDarkMode ? 'text-sage-green' : 'text-sage-green'
                  }`}>
                    {edu.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className={`text-3xl font-playfair font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-warm-brown'
          }`}>
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Mastering Data Structures & Algorithms using C and C++',
              'TypeScript Programming for Web Development',
              'Software Engineering Fundamentals',
              'Microsoft AI Learning Challenge',
              'Applied AI Learning Challenge',
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-xl backdrop-blur-md flex items-center gap-3 ${
                  isDarkMode
                    ? 'bg-dusty-pink/10 border border-dusty-pink/30'
                    : 'bg-dusty-pink/10 border border-dusty-pink/30'
                }`}
              >
                <span className="text-xl">🏆</span>
                <span className={`font-poppins text-sm ${
                  isDarkMode ? 'text-gray-200' : 'text-warm-brown'
                }`}>
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )

  // Contact Section
  const ContactSection = () => (
    <section
      id="contact"
      className={`py-20 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-5xl font-playfair font-bold mb-12 text-center ${
            isDarkMode ? 'text-white' : 'text-warm-brown'
          }`}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Mail,
              label: 'Email',
              value: 'nivyashreems@gmail.com',
              link: 'mailto:nivyashreems@gmail.com',
              color: 'dusty-pink',
            },
            {
              icon: Phone,
              label: 'Phone',
              value: '8075792400',
              link: 'tel:8075792400',
              color: 'sage-green',
            },
            {
              icon: Linkedin,
              label: 'LinkedIn',
              value: 'View Profile',
              link: 'https://linkedin.com/in/nivyashree-m-s-66815b311',
              color: 'dusty-pink',
            },
          ].map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={index}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl backdrop-blur-md text-center ${
                  isDarkMode
                    ? 'bg-gray-700/50 border border-gray-600'
                    : 'bg-cream/50 border border-gray-200'
                }`}
              >
                <Icon
                  size={32}
                  className={`mx-auto mb-3 ${
                    contact.color === 'dusty-pink' ? 'text-dusty-pink' : 'text-sage-green'
                  }`}
                />
                <h3 className={`font-playfair font-bold text-lg ${
                  isDarkMode ? 'text-white' : 'text-warm-brown'
                }`}>
                  {contact.label}
                </h3>
                <p className={`font-poppins text-sm mt-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-warm-brown/80'
                }`}>
                  {contact.value}
                </p>
              </motion.a>
            )
          })}
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`p-8 rounded-2xl backdrop-blur-md ${
            isDarkMode
              ? 'bg-gray-700/50 border border-gray-600'
              : 'bg-white/50 border border-gray-200'
          }`}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className={`px-4 py-3 rounded-lg backdrop-blur-sm font-poppins ${
                isDarkMode
                  ? 'bg-gray-600/50 border border-gray-500 text-white placeholder-gray-400'
                  : 'bg-white/50 border border-gray-300 text-warm-brown placeholder-warm-brown/50'
              }`}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={`px-4 py-3 rounded-lg backdrop-blur-sm font-poppins ${
                isDarkMode
                  ? 'bg-gray-600/50 border border-gray-500 text-white placeholder-gray-400'
                  : 'bg-white/50 border border-gray-300 text-warm-brown placeholder-warm-brown/50'
              }`}
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm font-poppins mb-6 ${
              isDarkMode
                ? 'bg-gray-600/50 border border-gray-500 text-white placeholder-gray-400'
                : 'bg-white/50 border border-gray-300 text-warm-brown placeholder-warm-brown/50'
            }`}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-dusty-pink text-white rounded-lg font-poppins font-semibold hover:shadow-lg transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )

  // Footer
  const Footer = () => (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`py-8 px-4 border-t ${
        isDarkMode
          ? 'bg-gray-900 border-gray-700 text-gray-400'
          : 'bg-cream border-dusty-pink/20 text-warm-brown/60'
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-poppins text-sm">
          © 2024 Nivyashree M S. All rights reserved.
        </p>
        <p className="font-poppins text-xs mt-2">
          Designed & Built with <span className="text-dusty-pink">❤️</span> using React, Tailwind CSS, and Framer Motion
        </p>
      </div>
    </motion.footer>
  )

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3 bg-dusty-pink text-white rounded-full shadow-lg hover:shadow-xl transition"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
