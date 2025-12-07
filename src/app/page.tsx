'use client';

import Image from "next/image";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Scroll progress bar
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const progressBar = document.getElementById('progress-bar');
      if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
      }

      // Back to top button visibility
      const backToTop = document.getElementById('back-to-top');
      if (backToTop) {
        if (scrollTop > 300) {
          backToTop.style.opacity = '1';
        } else {
          backToTop.style.opacity = '0';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300">
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300" style={{ width: '0%' }} id="progress-bar"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Mustafa Nasser</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 transform relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 transform relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 transform relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 transform relative group">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              {/* <a href="#education" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 transform relative group">
                Education
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a> */}
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 transform relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Contact Me</span>
              </a>
              <a href="#projects" className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl group relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">View My Work</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
          {/* Animated Background Elements */}
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>

            {/* Animated Blobs */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full filter blur-3xl opacity-60 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
            <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/30 to-blue-500/30 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* Floating Particles */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-80"></div>
            <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce opacity-70"></div>
            <div className="absolute bottom-20 right-20 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-60"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <span className="text-white">Hi, I&apos;m </span><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Mustafa Nasser</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-8 opacity-0 animate-fade-in-left relative" style={{ animationDelay: '0.6s' }}>
                <span className="relative inline-block">
                  AI & Automation Engineer | Web Scraper Expert
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></span>
                </span>
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-right" style={{ animationDelay: '0.8s' }}>
                Passionate about building intelligent systems that automate complex workflows,
                extract insights from data, and solve real-world problems using cutting-edge AI technologies.
              </p>
            </div>

            <div className="flex justify-center space-x-6 mb-12 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '1.0s' }}>
              {/* Scroll Down Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-blue-600 dark:border-blue-400 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
              <a href="https://github.com/xx36Mostafa" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 transform hover:shadow-lg hover:animate-pulse-glow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/36xmustafa/" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 transform hover:shadow-lg hover:animate-pulse-glow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.upwork.com/freelancers/~010efc1be7c8132040" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300 hover:scale-110 transform hover:shadow-lg hover:animate-pulse-glow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                </svg>
              </a>
              <a href="https://pplx.ai/mostafanas68731"
                className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-all duration-300 hover:scale-110 transform hover:shadow-lg hover:animate-pulse-glow">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>

            <div className="flex justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <a href="#about"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 hover:animate-pulse-glow">
                Learn More About Me
              </a>
            </div>
          </div>
        </section>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <a href="#contact" className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12 group">
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-6 left-6 z-40">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 bg-gray-800 dark:bg-gray-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 opacity-0" id="back-to-top">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* About Me Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full animate-float"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400 rounded-full animate-float animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-indigo-400 rounded-full animate-float animation-delay-4000"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  About Me
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6 rounded-full"></div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I&apos;m an AI & Automation Engineer with 3+ years of experience in building intelligent systems that
                  automate complex workflows, automate data extraction, and generate insights from structured and
                  unstructured data using Python, machine learning, and advanced automation frameworks.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Based in Giza, Egypt, I specialize in creating scalable solutions that bridge the gap
                  between complex data sources and actionable business intelligence.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                      What I Do
                    </h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 hover:scale-125 transition-transform duration-300"></div>
                        AI & Machine Learning Solutions
                      </li>
                      <li className="flex items-start hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 hover:scale-125 transition-transform duration-300"></div>
                        Web Scraping & Data Extraction
                      </li>
                      <li className="flex items-start hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 hover:scale-125 transition-transform duration-300"></div>
                        Process Automation
                      </li>
                      <li className="flex items-start hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 hover:scale-125 transition-transform duration-300"></div>
                        API Development & Integration
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                      Key Services
                    </h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 cursor-pointer">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 hover:scale-125 transition-transform duration-300"></div>
                        Custom Automation Tools
                      </li>
                      <li className="flex items-start hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 cursor-pointer">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 hover:scale-125 transition-transform duration-300"></div>
                        Data Analysis & Visualization
                      </li>
                      <li className="flex items-start hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 cursor-pointer">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 hover:scale-125 transition-transform duration-300"></div>
                        Telegram Bot Development
                      </li>
                      <li className="flex items-start hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 cursor-pointer">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 hover:scale-125 transition-transform duration-300"></div>
                        Desktop & Web Automation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:pl-12 opacity-0 animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="text-center mb-6">
                    <div className="w-48 h-48 mx-auto mb-4 relative overflow-hidden rounded-full border-4 border-gradient-to-br from-blue-600 to-indigo-600 shadow-xl">
                      <Image
                        src="/image.jpg"
                        alt="Mustafa Nasser"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Mustafa Nasser Anwar
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      AI & Automation Engineer
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Giza, Egypt</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">3+ Years Experience</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">mostafanasser3786@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 opacity-0 animate-scale-in" style={{ animationDelay: '0.4s' }}></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                Some of my recent work in AI, automation, and data analysis
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift group hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-blue-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                    May 2025 - June 2025
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Intelligent Product Analytics & Sentiment Engine
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Comprehensive e-commerce intelligence platform that automatically scrapes product data from multiple sites,
                  performs advanced sentiment analysis using NLP models, and generates actionable business insights
                  through real-time dashboards built with Streamlit and FastAPI.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    Python
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    NLP
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    Streamlit
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    FastAPI
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift group hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 dark:hover:from-gray-700 dark:hover:to-green-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '1.0s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                  </div>
                  <span className="text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                    Mar 2024 - June 2024
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Smart Home Automation Project
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Designed a smart home system using IoT devices and machine learning for predictive automation based on user behavior patterns.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    IoT
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    Machine Learning
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    Python
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    Automation
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift group hover:bg-gradient-to-br hover:from-purple-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-purple-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '1.2s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                    </svg>
                  </div>
                  <span className="text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
                    Mar 2025 - May 2025
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Trading Bot Strategy-Based Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Designed and implemented an automated trading bot using the Mt5 Executor library with actions based on configurable strategies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    Python
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    Mt5 Executor
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    Trading Algorithms
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    Automation
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift group hover:bg-gradient-to-br hover:from-orange-50 hover:to-amber-50 dark:hover:from-gray-700 dark:hover:to-orange-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '1.4s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                    <svg className="w-6 h-6 text-orange-600 dark:text-orange-400 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <span className="text-sm bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full">
                    Feb 2024 - Aug 2024
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  Apple Account Management Tool
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Designed and built Apple account management automation tool that can run HTTP requests to simulate account creation, password reset, and region changes without browser automation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    Python
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    HTTP Requests
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    Automation
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    API Integration
                  </span>
                </div>
              </div>



              {/* Horse Racing Intelligence Platform - Merged Project */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift group hover:bg-gradient-to-br hover:from-emerald-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-emerald-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '1.6s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-purple-100 dark:from-emerald-900 dark:to-purple-900 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                    <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <span className="text-sm bg-gradient-to-r from-emerald-100 to-purple-100 dark:from-emerald-900 dark:to-purple-900 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full">
                    Jan 2024 - May 2024
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent group-hover:from-emerald-700 group-hover:to-purple-700 transition-all">
                  Horse Racing Intelligence & ML Platform
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Comprehensive end-to-end platform combining advanced web scraping, data processing, and machine learning for horse racing analytics.
                  Features intelligent data extraction from multiple betting platforms, automated data cleaning and validation,
                  ML dataset generation, and predictive modeling with excellent performance results.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors">
                    Python
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors">
                    Web Scraping
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors">
                    Machine Learning
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors">
                    Data Engineering
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors">
                    Predictive Analytics
                  </span>
                </div>
              </div>

              {/* X API Reverse Engineering Project */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift group hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 dark:hover:from-gray-700 dark:hover:to-blue-900 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                    Recent Project
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  X API Reverse Engineering Specialist
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Comprehensive testing suite for X (Twitter) login flow analysis and authorized penetration testing.
                  Developed advanced tools for HAR file analysis, TLS client implementation, and authentication flow replication
                  with proper security measures and legal compliance. Additionally, implemented reverse engineering techniques,
                  encryption protocol analysis, scraper development, and automated tweet publishing tools.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                    Python
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                    Reverse Engineering
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                    API Analysis
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                    TLS Client
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                    Security Testing
                  </span>
                </div>
              </div>


            </div>
          </div>
        </section>


        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-6 gap-8 h-full transform rotate-12">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg animate-pulse hover-lift" style={{ animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">My Skills</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full opacity-0 animate-scale-in" style={{ animationDelay: '0.4s' }}></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                I&apos;ve worked with a variety of technologies in AI, automation, and web development
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {/* AI & Machine Learning */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift group hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-800 dark:hover:to-blue-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    AI & Machine Learning
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Data Preprocessing & Cleaning</li>
                  <li>• Model Training & Evaluation</li>
                  <li>• Scikit-learn, TensorFlow, Deep Learning APIs</li>
                  <li>• OpenCV, Data Augmentation</li>
                </ul>
              </div>

              {/* Web Scraping & API Integration */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift group hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 dark:hover:from-gray-800 dark:hover:to-green-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '1.0s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    Web Scraping & API Integration
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• BeautifulSoup, Selenium, Requests</li>
                  <li>• AJAX & JavaScript-heavy sites</li>
                  <li>• HTTP Requests, FastAPI</li>
                  <li>• Telegram Bots Automation</li>
                </ul>
              </div>

              {/* Desktop & Web Automation */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift group hover:bg-gradient-to-br hover:from-purple-50 hover:to-indigo-50 dark:hover:from-gray-800 dark:hover:to-purple-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '1.2s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Desktop & Web Automation
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• PyAutoGUI, Pywinuto</li>
                  <li>• UIAutomation (Windows)</li>
                  <li>• Selenium & Playwright</li>
                  <li>• Browser Integration</li>
                </ul>
              </div>

              {/* Data Processing & Analysis */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift group hover:bg-gradient-to-br hover:from-orange-50 hover:to-yellow-50 dark:hover:from-gray-800 dark:hover:to-orange-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '1.4s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                    <svg className="w-6 h-6 text-orange-600 dark:text-orange-400 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 12h2v5H7v-5zm4-3h2v8h-2V9zm4-3h2v11h-2V6z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    Data Processing & Analysis
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Pandas, NumPy</li>
                  <li>• Data Cleaning, Boolean Filtering</li>
                  <li>• Grouping, Aggregation</li>
                  <li>• Real-Time Visualization (Streamlit)</li>
                </ul>
              </div>

              {/* Programming & Scripting */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift group hover:bg-gradient-to-br hover:from-red-50 hover:to-pink-50 dark:hover:from-gray-800 dark:hover:to-red-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '1.6s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                    <svg className="w-6 h-6 text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    Programming & Scripting
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Python (Professional)</li>
                  <li>• Java (Professional)</li>
                  <li>• Node.js (Professional)</li>
                  <li>• C++ (Professional)</li>
                </ul>
              </div>

              {/* Tools & Platforms */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift group hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-indigo-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '1.8s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Tools & Platforms
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Git & GitHub</li>
                  <li>• Microsoft Office Suite</li>
                  <li>• Frida (Mobile Reverse Engineering)</li>
                  <li>• Various Development Tools</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Work Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 opacity-0 animate-scale-in" style={{ animationDelay: '0.4s' }}></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                My professional journey in AI and automation engineering
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Current Position */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift group hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 dark:hover:from-gray-700 dark:hover:to-green-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '0.8s' }}>
                <div className="flex flex-col mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      HTML Parser & ML Engineering
                    </h3>
                    <p className="text-lg text-green-600 dark:text-green-400 font-semibold">
                      Remote - UNSEND App
                    </p>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium mt-2">
                    Sep 2024 - Present
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    Developing advanced HTML parsing systems and integrating AI/LLM technologies for automated data processing and extraction. Additionally, training language models (LM) to enhance text analysis.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Processing large-scale HTML documents with custom parsing algorithms
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Integrating LLM and API services for intelligent data processing
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Building scalable automation workflows for data extraction
                    </li>
                  </ul>
                </div>
              </div>

              {/* Freelance Work */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift group hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-blue-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '1.0s' }}>
                <div className="flex flex-col mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      AI & Automation Engineer | Web Scraper Expert
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                      Freelance / Remote - <a href="https://www.upwork.com/freelancers/~01f4c8c8a8a8a8a8" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline">Upwork Profile</a>
                    </p>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium mt-2">
                    Jan 2022 - Present
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    Specialized in building intelligent automation systems and advanced web scraping solutions for international clients through Upwork platform.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Developed advanced web scraping solutions using Python, Selenium, BeautifulSoup
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Built scalable automation pipelines with FastAPI and database integration
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Created intelligent Telegram bots and desktop automation tools
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Delivered 50+ successful projects with 100% client satisfaction
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        {/* <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Education & Certifications
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 opacity-0 animate-scale-in" style={{ animationDelay: '0.4s' }}></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                My academic background and professional certifications
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift group hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-800 dark:hover:to-blue-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Bachelor&apos;s in Artificial Intelligence
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      Helwan International Technological University
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Sep 2022 - Aug 2026 | Cairo, Egypt
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Specializing in Python, AI frameworks, and big data technologies. Gaining hands-on experience in data science, neural networks, and natural language processing.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift group hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 dark:hover:from-gray-800 dark:hover:to-green-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '1.0s' }}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Professional Certifications
                    </h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Backend Using Python
                    </h4>
                    <p className="text-green-600 dark:text-green-400 font-medium">ITI</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Artificial Intelligence
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">NTI</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Digital Egypt Youth Program
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">NTI</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Machine Learning
                    </h4>
                    <p className="text-orange-600 dark:text-orange-400 font-medium">Coursera</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Generative Ai
                    </h4>
                    <p className="text-red-600 dark:text-red-400 font-medium">ITI</p>
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Natural Language Processing Specialization
                    </h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">Coursera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
 */}


        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Let&apos;s Work Together
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 opacity-0 animate-scale-in" style={{ animationDelay: '0.4s' }}></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how we can work together!
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift group hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-800 dark:hover:to-blue-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '0.8s' }}>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  mostafanasser3786@gmail.com
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift group hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 dark:hover:from-gray-800 dark:hover:to-green-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '1.0s' }}>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Giza, Egypt
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift group hover:bg-gradient-to-br hover:from-purple-50 hover:to-indigo-50 dark:hover:from-gray-800 dark:hover:to-purple-900 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '1.2s' }}>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Phone & Whatsapp
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +201098974486
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/xx36Mostafa" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:animate-pulse-glow">
                <svg className="w-6 h-6 text-white hover:text-gray-200 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/36xmustafa/" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:animate-pulse-glow">
                <svg className="w-6 h-6 text-white hover:text-blue-100 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.upwork.com/freelancers/x36mostafa" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:animate-pulse-glow">
                <svg className="w-6 h-6 text-white hover:text-green-100 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169-.225-.44-.225-.607 0l-4.961 6.24-4.961-6.24c-.169-.225-.44-.225-.607 0-.225.169-.225.44 0 .607L12 16.32l5.568-7.553c.225-.167.225-.438 0-.607z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-900 dark:bg-black py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © 2024 Mustafa Nasser Anwar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}





