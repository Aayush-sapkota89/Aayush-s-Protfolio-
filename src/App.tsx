import { Code2, Brain, Github, Linkedin, Mail, ExternalLink, Terminal } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Aayush Sapkota
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Frontend Developer & ML/AI Engineer
            </p>
            <p className="text-gray-400 max-w-lg">
              Crafting exceptional digital experiences through innovative frontend development
              and cutting-edge artificial intelligence solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Aayush-sapkota89" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/aayush-sapkota-336666365" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:business.aayushsapkota@gmail.com" className="hover:text-purple-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/My Profile.jpg"
              alt="Aayush Sapkota"
              className="w-64 h-64 rounded-2xl object-cover shadow-2xl ring-2 ring-purple-500/20"
            />
          </div>
        </div>
      </header>

      {/* Expertise Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Areas of Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <Code2 className="w-8 h-8 text-purple-400" />
              <h3 className="text-xl font-semibold">Frontend Development</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• React.js & Next.js Applications</li>
              <li>• Modern UI/UX Implementation</li>
              <li>• Responsive Web Design</li>
              <li>• Performance Optimization</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <Brain className="w-8 h-8 text-purple-400" />
              <h3 className="text-xl font-semibold">ML/AI Engineering</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Machine Learning Models</li>
              <li>• Neural Networks</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 - E-commerce */}
          <div className="bg-gray-800/50 rounded-xl overflow-hidden group">
            <div className="h-48 relative overflow-hidden">
              <img 
                src="/Screenshot (3).png" 
                alt="E-commerce Project"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">ELLEY - E-commerce Platform</h3>
              <p className="text-gray-400 mb-4">
                A modern e-commerce platform with advanced features and seamless user experience.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Redux</span>
                </div>
                <a href="https://github.com/Aayush-sapkota89" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 - Hotel Website */}
          <div className="bg-gray-800/50 rounded-xl overflow-hidden group">
            <div className="h-48 relative overflow-hidden">
              <img 
                src="/Screenshot (16).png" 
                alt="Hotel Website"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Luxury Hotel Booking</h3>
              <p className="text-gray-400 mb-4">
                An elegant hotel booking platform with real-time availability and booking system.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Tailwind</span>
                </div>
                <a href="https://github.com/Aayush-sapkota89" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 - Scarlet AI */}
          <div className="bg-gray-800/50 rounded-xl overflow-hidden group">
            <div className="h-48 relative overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
                alt="Scarlet AI Agent"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Scarlet - AI Assistant</h3>
              <p className="text-gray-400 mb-4">
                An advanced AI assistant capable of natural language processing and task automation.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">TensorFlow</span>
                </div>
                <a href="https://github.com/Aayush-sapkota89" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            'React', 'TypeScript', 'TailwindCSS', 'Node.js',
            'Python', 'TensorFlow', 'PyTorch', 'scikit-learn'
          ].map((tech) => (
            <div key={tech} className="bg-gray-800/50 p-4 rounded-lg text-center hover:bg-purple-500/20 transition-colors">
              <Terminal className="w-6 h-6 mx-auto mb-2 text-purple-400" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-400">
        <p>© 2024 Aayush Sapkota. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;