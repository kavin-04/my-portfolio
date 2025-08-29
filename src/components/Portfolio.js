import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, MessageCircle, Moon, Sun, Palette, ExternalLink, ArrowLeft, User, GraduationCap, Code, Eye, Download, FileText, Github } from 'lucide-react';

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);
  const [theme, setTheme] = useState('light');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const themes = {
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      secondary: 'text-gray-600',
      accent: 'bg-blue-600',
      card: 'bg-white',
      border: 'border-gray-200',
      hover: 'hover:bg-gray-50',
      animation: 'animate-pulse',
      particleClass: 'light-particles',
      cardHover: 'hover:shadow-blue-200 hover:shadow-2xl'
    },
    dark: {
      bg: 'bg-gray-900',
      text: 'text-white',
      secondary: 'text-gray-300',
      accent: 'bg-purple-600',
      card: 'bg-gray-800',
      border: 'border-gray-700',
      hover: 'hover:bg-gray-700',
      animation: 'animate-bounce',
      particleClass: 'dark-particles',
      cardHover: 'hover:shadow-purple-500 hover:shadow-2xl'
    },
    mid: {
      bg: 'bg-gray-100',
      text: 'text-gray-800',
      secondary: 'text-gray-600',
      accent: 'bg-green-600',
      card: 'bg-gray-50',
      border: 'border-gray-300',
      hover: 'hover:bg-gray-200',
      animation: 'animate-spin',
      particleClass: 'mid-particles',
      cardHover: 'hover:shadow-green-200 hover:shadow-2xl'
    }
  };

  const currentTheme = themes[theme];


  const allProjects = [

    {
      id: 1,
      title: 'Internship',
      category: 'Internships',
      cover: '/display/internship-cover.jpeg',
      description: 'I have completed enriching internships in UI/UX Design and Internet of Things (IoT) with Cognifyz Technologies, Tamizhan Skills, and NoviTech R&D Pvt. Ltd., where I explored both creative design and technical problem-solving.',
      details: 'Across these experiences, I worked on diverse and exciting projects that shaped my learning journey. At Cognifyz Technologies, I designed for a centralized application and a drone app, focusing on creating smooth and user-friendly interfaces. My time at Tamizhan Skills allowed me to experiment with practical solutions like a banking system, food ordering application, and a portfolio website, which helped me strengthen my design thinking and creativity. At NoviTech R&D, I stepped into the world of IoT, working on electronics-based projects such as a soil moisture measurement system, where I learned how hardware and software blend together to solve real problems. These combined experiences not only built my skills but also gave me the confidence to create solutions that are both innovative and impactful.',
      display: ['/display/certificates/internship/cc.jpeg', '/display/certificates/internship/certificate.jpg', '/display/certificates/internship/novi.jpg'],
      tools: ['Figma', 'User Research', 'Prototyping', 'IoT'],
    },

    {
      id: 2,
      title: 'Workshop',
      category: 'Workshops',
      cover: '/display/workshop-cover.jpeg',
      description: 'I have participated in workshops on Flutter App Development at Kongu Engineering College and Blockchain & Cryptocurrency at Sri Eshwar College of Engineering, which helped me explore both mobile app development and emerging technologies.',
      details: 'The Flutter workshop at Kongu Engineering College gave me hands-on exposure to cross-platform app development concepts, where I learned the basics of Flutter framework, widgets, and application flow. It strengthened my interest in building scalable mobile applications with efficient UI components. At Sri Eshwar College, I gained valuable insights into Blockchain, Bitcoin, and Cryptocurrency for enterprises, which enhanced my understanding of decentralized systems, digital transactions, and their real-world applications. Together, these workshops broadened my technical perspective and provided me with a solid foundation to explore both mobile app development and blockchain-based innovations in future projects.',
      display: ['/display/certificates/workshop/kongu.jpg', '/display/certificates/workshop/tech.jpg'],
      tools: ['Flutter', 'Linux'],
    },

    {
      id: 3,
      title: 'Certification courses',
      category: 'Course Completion',
      cover: '/display/figma-course-cover.jpg',
      description: 'I have a solid foundation in both digital design and web development, with certifications in Figma, Canva, and web design. My proficiency in creating user interfaces and web designs is complemented by my understanding of the fundamental principles of web development and IoT, showcasing a versatile and modern skill set.',
      details: 'My coursework began with an Introduction to Web Design and Development, where I gained a fundamental understanding of HTML and the core principles of web design. I further enhanced my design capabilities by completing the Figma UI UX Design Essentials and Learning Canva courses. This training has equipped me with the practical skills to create intuitive user interfaces and compelling visual content, from conceptualization in Figma to execution in Canva. Additionally, I successfully completed a 30-day MasterClass in the Internet of Things (IoT), providing me with knowledge of a rapidly evolving technological field and demonstrating my commitment to continuous learning in various tech domains. This combination of design, web, and IoT skills makes me a well-rounded and adaptable professional.',
      display: ['/display/certificates/coursecompletion/certificate.jpg', '/display/certificates/coursecompletion/lc.jpeg', '/display/certificates/coursecompletion/lin.jpg', '/display/certificates/coursecompletion/novitech.jpg'],
      tools: ['Figma', 'Canva', 'Visual studio code', 'Arduino'],
    },

    {
      id: 4,
      title: 'Hackathon',
      category: 'Hackathons',
      cover: '/display/hackathon-cover.jpg',
      description: 'I have actively participated in a variety of technical hackathons, which highlight my skills in developing innovative solutions under pressure. My projects include a DDOS attack monitoring website, an AI-suggested music system, and a centralized project expo site named Inventicon.',
      details: 'My experience in hackathons demonstrates my ability to apply technical knowledge to solve real-world problems. At the GenAI Hackathon, I was part of a team that built a website to monitor and visualize DDOS attacks, showcasing my proficiency in cybersecurity and web development. During the Sindhanai AI Hackathon, our project focused on creating an AI-suggested music system that provides personalized recommendations, highlighting my skills in artificial intelligence and machine learning. Finally, at the 24-Hour HackXtreme, my team developed "Inventicon," a centralized project expo site designed to showcase and manage innovative projects, which demonstrates my capability in creating practical, user-centric web applications.',
      display: ['/display/certificates/hackathon/intel.jpg', '/display/certificates/hackathon/sindhanai.jpg', '/display/certificates/hackathon/rama.jpg'],
      tools: ['Figma', 'AI', 'wireshark', 'Opencv', 'Python', 'React.js'],
    },

    {
      id: 5,
      title: 'Project Expo',
      category: 'Project Expo',
      cover: '/display/project-expo-cover.webp',
      description: 'I have actively participated in multiple Project Expos at the national and college levels, showcasing my technical projects and gaining valuable experience in a competitive environment. My participation in events at Velammal Engineering College and CARE College of Engineering highlights my commitment to applying my skills in a practical setting.',
      details: 'My involvement in Project Expos demonstrates my ability to develop and present innovative projects. At the Project Expo at CARE College of Engineering, I showcased an autonomous car, a project that refined my skills in robotics and embedded systems. I also participated in the National Level Technical Symposium DXM 2K24 at Velammal Engineering College, where I presented a UAV (Unmanned Aerial Vehicle) as part of a project from my MSME, demonstrating my expertise in aerospace technology and project development. These experiences have been crucial in refining my skills in conceptualization, development, and presentation, as I successfully showcased my work to a broader audience and received recognition for my efforts.',
      display: ['/display/certificates/project expo/care.jpg', '/display/certificates/project expo/velammal.jpg'],
      tools: ['React', 'Node.js', 'MongoDB', 'Figma'],
    },

    {
      id: 6,
      title: 'The Ministry of Micro , Small and Medium Enterprises',
      category: 'MSME',
      cover: '/display/msme-cover.webp',
      description: 'My MSME experience began at the AIC RAISE Business Incubator in Coimbatore, where my team and I were selected for the first round of idea pitching. We presented our concept for a Firefighter UAV, an innovative solution aimed at assisting in firefighting efforts. Although we were not selected for the next round, the experience provided us with invaluable knowledge in marketing and business strategy.',
      details: 'Following our initial venture, we applied again, this time to the SRM Institute of Science & Technology in Tiruchirapalli, with a new project idea: a universal robotic arm. We were once again selected for the first round of idea pitching, which demonstrates our consistent ability to develop and present compelling innovative projects. We are currently awaiting the results of this round. This journey has not only honed my skills in technical development but also in the crucial areas of ideation, presentation, and adapting to feedback. My continued participation in these competitive environments showcases my resilience and dedication to innovation.',
      display: ['/display/certificates/msme/uav.jpeg', '/display/certificates/msme/factoryPulse logo.jpeg', '/display/certificates/msme/fp.png'],
      tools: ['UAV-Flysky(i6)', 'Robotic arm', 'ESP32', 'Arduino'],
    },

    {
      id: 7,
      title: 'Design Projects',
      category: 'Design Projects',
      cover: '/display/ui-ux-cover.webp',
      description: 'I have completed many projects, but I am showcasing a few of my most remarkable ones here. This collection demonstrates my ability to design for different audiences, from a socially conscious website to a complex technical dashboard.',
      details: 'My work on the "Zero Hunger" platform involved creating an accessible website to connect food donors with those in need. The site highlights the organization mission, vision, and impact, communicating its social purpose effectively. One of my most remarkable projects is the sleek UI for a next-gen cloud technology platform. This design features a secure dashboard with an overview of files, usage stats, and reports. The "About" section is particularly notable for its layered diagram that visually explains the platform security architecture, highlighting my deep understanding of complex system design in a user-friendly way.',
      display: ['/display/certificates/Design projects/all.mp4', '/display/certificates/Design projects/intel.mp4'],
      tools: ['Figma', 'Canva'],
    },
  ];

  const projectsToDisplay = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === selectedCategory);


  const skills = [
    { name: 'HTML', icon: '🌐', color: 'text-orange-500', proficiency: 60 },
    { name: 'CSS', icon: '🎨', color: 'text-blue-500', proficiency: 60 },
    { name: 'JavaScript', icon: '⚡', color: 'text-yellow-500', proficiency: 60 },
    { name: 'React', icon: '⚛️', color: 'text-blue-400', proficiency: 70 },
    { name: 'Figma', icon: '🎯', color: 'text-purple-500', proficiency: 80 },
    { name: 'Canva', icon: '✨', color: 'text-green-500', proficiency: 80 },
    { name: 'Communication', icon: '🗣️', color: 'text-red-500', proficiency: 75 },
    { name: 'IoT', icon: '🤖', color: 'text-black-500', proficiency: 75 },
  ];


  const handleViewResume = () => {

    const resumePath = '/KAVIN C.pdf';
    window.open(resumePath, '_blank');
  };


  const handleDownload = () => {
    const resumePath = '/KAVIN C.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Kavin_C_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const ThemeToggle = () => (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={() => setTheme('light')}
        className={`p-3 rounded-full ${theme === 'light' ? currentTheme.accent : currentTheme.card} ${currentTheme.border} border-2 transition-all duration-300 shadow-lg ${theme === 'light' ? 'animate-pulse' : 'hover:animate-pulse'}`}
      >
        <Sun className={`w-5 h-5 ${theme === 'light' ? 'text-white animate-spin' : currentTheme.text} transition-all duration-300`} />
      </button>
      <button
        onClick={() => setTheme('mid')}
        className={`p-3 rounded-full ${theme === 'mid' ? currentTheme.accent : currentTheme.card} ${currentTheme.border} border-2 transition-all duration-300 shadow-lg ${theme === 'mid' ? 'animate-bounce' : 'hover:animate-bounce'}`}
      >
        <Palette className={`w-5 h-5 ${theme === 'mid' ? 'text-white animate-pulse' : currentTheme.text} transition-all duration-300`} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-3 rounded-full ${theme === 'dark' ? currentTheme.accent : currentTheme.card} ${currentTheme.border} border-2 transition-all duration-300 shadow-lg ${theme === 'dark' ? 'animate-pulse' : 'hover:animate-pulse'}`}
      >
        <Moon className={`w-5 h-5 ${theme === 'dark' ? 'text-white animate-bounce' : currentTheme.text} transition-all duration-300`} />
      </button>
    </div>
  );

  const Navigation = () => (
    <nav className={`fixed bottom-0 left-0 right-0 ${currentTheme.card} ${currentTheme.border} border-t backdrop-blur-sm bg-opacity-90 p-4 z-40 shadow-2xl`}>
      <div className="flex justify-center space-x-8">
        {[
          { id: 'about', label: 'About', icon: User },
          { id: 'skills', label: 'Skills', icon: Code },
          { id: 'projects', label: 'Projects', icon: Eye },
          { id: 'contact', label: 'Contact', icon: Mail }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => {
              setCurrentSection(id);
              setSelectedProject(null);
            }}
            className={`flex flex-col items-center space-y-1 transition-all duration-300 ${
              currentSection === id ? currentTheme.accent : ''
            } ${currentSection === id ? 'text-white' : currentTheme.secondary} px-4 py-2 rounded-lg hover:scale-105`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-sm font-medium text-center">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );

  const AboutSection = () => (
    <div className="space-y-12">
      <div className="text-center space-y-6">

        <div className="relative group">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl border-2 border-white bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl">

            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
              <span className="text-4xl font-bold text-white">K</span>
            </div>


            <img
              src="/photo.png"
              alt="Kavin C"
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>



        </div>
        <div className="space-y-4">
          <h1 className={`text-4xl md:text-5xl font-bold ${currentTheme.text} tracking-tight leading-tight`}>KAVIN C</h1>
          <p className={`text-xl md:text-2xl ${currentTheme.secondary} font-medium tracking-wide`}>UI/UX Designer | Front-End Developer | Public Speaker</p>
        </div>
        <p className={`${currentTheme.secondary} text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center`}>
          Passionate UI/UX designer with a keen eye for creating intuitive and visually appealing digital experiences.
          I specialize in transforming complex problems into simple, elegant solutions that users love.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className={`${currentTheme.card} rounded-xl p-6 ${currentTheme.border} border-2 shadow-md`}>
          <div className="flex items-center mb-4">
            <GraduationCap className={`w-8 h-8 ${currentTheme.accent.replace('bg-', 'text-')} mr-2`} />
            <h3 className={`text-2xl font-semibold ${currentTheme.text} tracking-tight`}>Education</h3>
          </div>
          <div className="space-y-4">
            <div className="text-left">
              <h4 className={`font-semibold text-lg ${currentTheme.text} mb-1 leading-snug`}>Bachelor of Technology</h4>
              <p className={`${currentTheme.secondary} mb-1 text-base font-medium`}>Saranathan College of Engineering • 2022-2026</p>
              <p className={`${currentTheme.secondary} text-sm`}>Major : Information Technology</p>
              <p className={`${currentTheme.secondary} text-sm`}>Holding CGPA of 8.100</p>
            </div>
            <div className="text-left">
              <h4 className={`font-semibold text-lg ${currentTheme.text} mb-1 leading-snug`}>High School</h4>
              <p className={`${currentTheme.secondary} mb-1 text-base font-medium`}>Alpha Wisdom Vidhyasharam (CBSE) • 2021-2022</p>
              <p className={`${currentTheme.secondary} text-sm`}>Group-II : Computer Science & Mathematics</p>
              <p className={`${currentTheme.secondary} text-sm`}>Passed with 67.80 %</p>
            </div>
            <div className="text-left">
              <h4 className={`font-semibold text-lg ${currentTheme.text} mb-1 leading-snug`}>Senior Secondary School</h4>
              <p className={`${currentTheme.secondary} mb-1 text-base font-medium`}>Alpha Wisdom Vidhyasharam (CBSE) • 2019-2020</p>
              <p className={`${currentTheme.secondary} text-sm`}>Passed with 74.80 %</p>
            </div>
          </div>
        </div>

        <div className={`${currentTheme.card} rounded-xl p-6 ${currentTheme.border} border-2 shadow-md`}>
          <div className="flex items-center mb-4">
            <User className={`w-8 h-8 ${currentTheme.accent.replace('bg-', 'text-')} mr-2`} />
            <h3 className={`text-2xl font-semibold ${currentTheme.text} tracking-tight`}>About Me</h3>
          </div>
          <div className="space-y-4 text-left">
            <p className={`${currentTheme.secondary} text-base leading-relaxed`}>
              <strong className={`${currentTheme.text} font-semibold`}>Location:</strong> Tiruchirappalli, Tamil Nadu
            </p>
            <p className={`${currentTheme.secondary} text-base leading-relaxed`}>
              <strong className={`${currentTheme.text} font-semibold`}>Experience:</strong> Fresher
            </p>
            <p className={`${currentTheme.secondary} text-base leading-relaxed`}>
              <strong className={`${currentTheme.text} font-semibold`}>Specialization:</strong> Web & Mobile UI/UX
            </p>
            <p className={`${currentTheme.secondary} text-base leading-relaxed`}>
              <strong className={`${currentTheme.text} font-semibold`}>Languages:</strong> English, Tamil
            </p>
          </div>
        </div>
      </div>



      <div className="text-center mt-12 flex justify-center space-x-4">
        <button
          onClick={handleViewResume}
          className={`inline-flex items-center justify-center px-8 py-4 ${currentTheme.accent} text-white rounded-lg text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md tracking-wide`}
        >
          <FileText className="w-6 h-6 mr-3" />
          View Resume
        </button>
        <button
          onClick={handleDownload}
          className={`inline-flex items-center justify-center px-8 py-4 ${currentTheme.accent} text-white rounded-lg text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md tracking-wide`}
        >
          <Download className="w-6 h-6 mr-3" />
          Download Resume
        </button>
      </div>
    </div>
  );

  const SkillsSection = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className={`text-4xl md:text-5xl font-bold ${currentTheme.text} tracking-tight leading-tight`}>Skills & Expertise</h2>
        <p className={`${currentTheme.secondary} text-base md:text-lg max-w-2xl mx-auto text-center leading-relaxed`}>Technologies and tools I work with</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${currentTheme.card} rounded-xl p-8 ${currentTheme.border} border-2 shadow-md text-center ${currentTheme.hover} ${currentTheme.cardHover} transition-all duration-300 transform hover:scale-105 ${
              theme === 'light' ? 'hover:animate-pulse' :
              theme === 'dark' ? 'hover:animate-bounce' :
              'hover:animate-ping'
            }`}
          >
            <div className={`text-6xl mb-6 flex justify-center ${
              theme === 'light' ? 'hover:animate-bounce' :
              theme === 'dark' ? 'hover:animate-spin' :
              'hover:animate-pulse'
            } transition-all duration-300`}>{skill.icon}</div>
            <h3 className={`text-xl md:text-2xl font-semibold ${currentTheme.text} mb-4 tracking-tight`}>{skill.name}</h3>
            <div className={`w-full bg-gray-200 rounded-full h-3 overflow-hidden`}>
              <div
                className={`${currentTheme.accent} h-3 rounded-full transition-all duration-1000 ${
                  theme === 'light' ? 'animate-pulse' :
                  theme === 'dark' ? 'animate-bounce' :
                  'animate-ping'
                }`}
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className={`${currentTheme.card} rounded-xl p-8 ${currentTheme.border} border-2 shadow-md ${currentTheme.cardHover} transition-all duration-300`}>
        <h3 className={`text-2xl font-semibold ${currentTheme.text} mb-6 tracking-tight text-center md:text-left`}>Design Philosophy</h3>
        <p className={`${currentTheme.secondary} text-lg md:text-xl leading-relaxed text-center md:text-left`}>
        "Programming builds the engine, design gives it a soul."
        </p>
      </div>
    </div>
  );

  const ProjectsSection = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className={`text-4xl md:text-5xl font-bold ${currentTheme.text} tracking-tight leading-tight`}>Project Highlights</h2>
        <p className={`${currentTheme.secondary} text-base md:text-lg max-w-2xl mx-auto text-center leading-relaxed`}>Highlighting my design journey and the projects I’ve worked on.</p>
      </div>


      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {['All', 'Internships', 'Workshops', 'Course Completion', 'Hackathons', 'Project Expo', 'MSME', 'Design Projects'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? `${currentTheme.accent} text-white`
                : `${currentTheme.card} ${currentTheme.secondary} ${currentTheme.border} border`
            } hover:scale-105`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projectsToDisplay.map((project, index) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`${currentTheme.card} rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 ${currentTheme.cardHover} ${currentTheme.border} border-2 ${
              theme === 'light' ? 'hover:animate-pulse' :
              theme === 'dark' ? 'hover:animate-bounce' :
              'hover:animate-ping'
            }`}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="relative overflow-hidden">

              <img
                src={project.cover}
                alt={project.title}
                className={`w-full h-64 object-cover transition-all duration-300 ${
                  theme === 'light' ? 'hover:scale-110' :
                  theme === 'dark' ? 'hover:rotate-2 hover:scale-105' :
                  'hover:scale-105 hover:brightness-110'
                }`}
              />
              <div className={`absolute inset-0 ${
                theme === 'light' ? 'bg-blue-500' :
                theme === 'dark' ? 'bg-purple-500' :
                'bg-green-500'
              } bg-opacity-0 hover:bg-opacity-20 transition-all duration-300`}></div>
            </div>
            <div className="p-6 text-center">
              <h3 className={`text-xl md:text-2xl font-semibold ${currentTheme.text} mb-4 tracking-tight leading-snug`}>{project.title}</h3>
              <p className={`${currentTheme.secondary} leading-relaxed mb-6 text-base`}>{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className={`px-4 py-2 ${currentTheme.accent} text-white text-xs rounded-full font-medium transition-all duration-300 ${
                      theme === 'light' ? 'hover:animate-pulse' :
                      theme === 'dark' ? 'hover:animate-bounce' :
                      'hover:animate-ping'
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectDetail = ({ project }) => (
    <div className="space-y-10">
      <button
        onClick={() => setSelectedProject(null)}
        className={`flex items-center ${currentTheme.secondary} hover:${currentTheme.text} transition-colors duration-200 text-base font-medium`}
      >
        <ArrowLeft className="w-6 h-6 mr-2" />
        Back to Projects
      </button>

      <div className="space-y-6 text-center md:text-left">
        <h1 className={`text-4xl md:text-5xl font-bold ${currentTheme.text} tracking-tight leading-tight`}>{project.title}</h1>
        <p className={`${currentTheme.secondary} text-lg md:text-xl leading-relaxed max-w-4xl mx-auto md:mx-0`}>{project.details}</p>
      </div>

      <div className="grid gap-8">
        {project.display.map((media, index) => (
          <div key={index} className={`${currentTheme.card} rounded-xl overflow-hidden shadow-md ${currentTheme.border} border-2`}>
            {media.endsWith('.mp4') ? (
              <video
                src={media}
                alt={`Video of the ${project.title} project`}
                className="w-full h-96 object-contain"
                controls
              />
            ) : (
              <img
                src={media}
                alt={`Display of the ${project.title} project`}
                className="w-full h-96 object-contain"
              />
            )}
          </div>
        ))}
      </div>

      <div className={`${currentTheme.card} rounded-xl p-8 ${currentTheme.border} border-2 shadow-md`}>
        <h3 className={`text-2xl font-semibold ${currentTheme.text} mb-6 tracking-tight text-center md:text-left`}>Tools Used</h3>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {project.tools.map((tool, index) => (
            <span
              key={index}
              className={`px-6 py-3 ${currentTheme.accent} text-white rounded-lg font-medium text-base md:text-lg`}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactSection = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className={`text-4xl md:text-5xl font-bold ${currentTheme.text} tracking-tight leading-tight`}>Let's Connect</h2>
        <p className={`${currentTheme.secondary} text-base md:text-lg max-w-2xl mx-auto text-center leading-relaxed`}>Ready to bring your ideas to life? Reach out to me!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            icon: Mail,
            label: 'Email',
            value: 'kavinanimation0405@gmail.com',
            action: () => window.open('https://mail.google.com/mail/?view=cm&to=kavinanimation0405@gmail.com'),
            color: 'text-red-500'
          },
          {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/kavin040405',
            action: () => window.open('https://linkedin.com/in/kavin040405'),
            color: 'text-blue-600'
          },
          {
            icon: Github,
            label: 'GitHub',
            value: 'github.com/kavin040405',
            action: () => window.open('https://github.com/kavin-04'),
            color: 'text-gray-800'
          },
          {
            icon: Instagram,
            label: 'Instagram',
            value: '@kabot_0405',
            action: () => window.open('https://instagram.com/kabot_0405'),
            color: 'text-pink-500'
          },
          {
            icon: MessageCircle,
            label: 'WhatsApp',
            value: '9159040656',
            action: () => window.open('https://wa.me/9159040656'),
            color: 'text-green-500'
          }
        ].map((contact, index) => (
          <div
            key={index}
            onClick={contact.action}
            className={`${currentTheme.card} rounded-xl p-6 ${currentTheme.border} border-2 shadow-md cursor-pointer ${currentTheme.hover} transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
          >
            <div className="flex items-center space-x-6">
              <contact.icon className={`w-10 h-10 ${contact.color} flex-shrink-0`} />
              <div className="flex-1 text-left min-w-0">
                <h3 className={`text-xl font-semibold ${currentTheme.text} mb-1 tracking-tight`}>{contact.label}</h3>
                <p className={`${currentTheme.secondary} text-base break-words`}>{contact.value}</p>
              </div>
              <ExternalLink className={`w-6 h-6 ${currentTheme.secondary} flex-shrink-0`} />
            </div>
          </div>
        ))}
      </div>

      <div className={`${currentTheme.card} rounded-xl p-8 ${currentTheme.border} border-2 shadow-md text-center`}>
        <h3 className={`text-2xl md:text-3xl font-bold ${currentTheme.text} mb-6 tracking-tight leading-tight`}>Ready to Collaborate?</h3>
        <p className={`${currentTheme.secondary} mb-8 text-base md:text-lg leading-relaxed max-w-2xl mx-auto`}>
          I'm always excited to work on new projects and challenges. Whether you need a complete
          design overhaul or just want to improve your user experience, let's discuss how we can
          bring your vision to life.
        </p>
        <button
          onClick={() => window.open('https://mail.google.com/mail/?view=cm&to=kavinanimation0405@gmail.com')}
          className={`${currentTheme.accent} text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md tracking-wide`}
        >
          Start a Project
        </button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${currentTheme.bg} transition-all duration-500 relative overflow-hidden`}>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

        {theme === 'light' && (
          <>
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="paint-splash"
                style={{
                  top: `${Math.random() * 100}vh`,
                  left: `${Math.random() * 100}vw`,
                  width: `${Math.random() * 20 + 10}vh`, // Random size 10-30vh
                  height: `${Math.random() * 20 + 10}vh`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 8 + 10}s`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              ></div>
            ))}
          </>
        )}


        {theme === 'mid' && (
          <>

            <div className="absolute top-10 left-10 opacity-20 desktop-float-1">
              <div className="w-64 h-40 bg-gray-700 rounded-lg shadow-xl border-2 border-green-500 relative p-2">
                <div className="w-full h-4 bg-gray-600 rounded"></div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="w-full h-24 bg-gray-600 rounded-lg loading-bar"></div>
                  <div className="w-full h-24 bg-gray-600 rounded-lg loading-bar"></div>
                </div>
              </div>
            </div>


            <div className="absolute bottom-20 right-16 opacity-25 mobile-float-2">
              <div className="w-24 h-44 bg-gray-800 rounded-xl shadow-lg border-2 border-green-400 relative p-2">
                <div className="w-16 h-2 bg-gray-600 rounded-full mx-auto"></div>
                <div className="flex justify-around mt-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-gray-600 rounded-full icon-pulse" style={{ animationDelay: `${i * 0.3}s` }}></div>
                  ))}
                </div>
                <div className="w-full h-24 bg-gray-600 rounded-lg mt-4 wireframe-expand"></div>
              </div>
            </div>


            <div className="absolute top-1/3 right-1/4 opacity-15 desktop-float-2">
              <div className="w-80 h-48 bg-gray-700 rounded-lg shadow-xl border-2 border-green-500 relative p-3">
                <div className="w-full h-6 bg-gray-600 rounded"></div>
                <div className="w-full h-32 bg-gray-600 rounded-lg mt-3 wireframe-expand"></div>
              </div>
            </div>


            <div className="absolute top-1/2 left-16 opacity-30 mobile-float-1">
              <div className="w-20 h-36 bg-gray-800 rounded-xl shadow-lg border-2 border-green-400 relative p-2">
                <div className="w-12 h-2 bg-gray-600 rounded-full mx-auto"></div>
                <div className="w-full h-20 bg-gray-600 rounded-lg mt-3 loading-bar"></div>
              </div>
            </div>
          </>
        )}


        {theme === 'dark' && (
          <div className="animated-gradient"></div>
        )}
      </div>

      <ThemeToggle />

      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-8 pb-28 max-w-6xl relative z-10">
        {selectedProject ? (
          <ProjectDetail project={selectedProject} />
        ) : (
          <>
            {currentSection === 'about' && <AboutSection />}
            {currentSection === 'skills' && <SkillsSection />}
            {currentSection === 'projects' && <ProjectsSection />}
            {currentSection === 'contact' && <ContactSection />}
          </>
        )}
      </main>

      <Navigation />


      <style jsx>{`
        /* Standard Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Light theme animations - Paint Splashes */
        @keyframes paint-splash-in {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1) rotate(10deg); opacity: 0.5; }
          100% { transform: scale(0.8) rotate(5deg); opacity: 0.3; }
        }

        .paint-splash {
          position: absolute;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(20px);
          animation: paint-splash-in 10s ease-in-out infinite alternate;
        }

        /* Mid theme animations - App frames */
        @keyframes desktop-float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 15px) rotate(2deg); }
        }
        @keyframes desktop-float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, -15px) rotate(-3deg); }
        }
        @keyframes mobile-float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(15px, 20px) rotate(4deg); }
        }
        @keyframes mobile-float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-15px, -20px) rotate(-5deg); }
        }
        @keyframes icon-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes loading-bar {
          0%, 100% { transform: scaleX(0.5); }
          50% { transform: scaleX(1); }
        }
        @keyframes wireframe-expand {
          0%, 100% { transform: scaleY(0.8); }
          50% { transform: scaleY(1); }
        }

        .desktop-float-1 { animation: desktop-float-1 16s ease-in-out infinite alternate; }
        .desktop-float-2 { animation: desktop-float-2 18s ease-in-out infinite alternate; }
        .mobile-float-1 { animation: mobile-float-1 14s ease-in-out infinite alternate; }
        .mobile-float-2 { animation: mobile-float-2 12s ease-in-out infinite alternate; }
        .icon-pulse { animation: icon-pulse 1s ease-in-out infinite alternate; }
        .loading-bar { animation: loading-bar 2s ease-in-out infinite alternate; }
        .wireframe-expand { animation: wireframe-expand 1.5s ease-in-out infinite alternate; }

        /* Dark theme animations - Gradient */
        @keyframes gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(270deg, #8A2BE2, #4B0082, #00BFFF, #1E90FF);
          background-size: 400% 400%;
          animation: gradient-animation 15s ease infinite;
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
