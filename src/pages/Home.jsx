import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import analysisImage from '../assets/hex-pattern.jpg';
import contributor1 from '../assets/contributors2.jpg';
import contributor2 from '../assets/contributors1.jpg';

function Home() {
  return (
    <div className="bg-secondary min-h-screen flex flex-col text-accent">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-12 space-y-12">
        
        {/* Hero Section */}
        <section className="text-center space-y-6 md:space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-8">
            Monitor and Analyze Disease Data
          </h2>
          <p className="text-lg md:text-xl text-text max-w-2xl mx-auto">
            Providing insights into Tuberculosis and Flu trends to support better decision-making in public health.
          </p>
          <Link 
            to="/dashboard/upload" 
            className="inline-block mt-8 bg-primary text-accent px-6 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-80 transition">
            Explore the Dashboard
          </Link>
        </section>

        {/* Image and Description */}
        <section className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-8 lg:space-y-0">
          <img 
            src={analysisImage} 
            alt="Data Analysis" 
            className="w-full lg:w-1/2 rounded-lg shadow-lg mb-4 lg:mb-0" 
          />
          <div className="text-text text-base leading-relaxed space-y-4">
            <p>
              Our platform makes it easy to track and analyze disease cases over time, giving users a clear understanding of trends in Tuberculosis and Flu.
            </p>
            <p>
              With accessible visualizations and downloadable data, this tool is ideal for healthcare professionals, researchers, and public health stakeholders.
            </p>
          </div>
        </section>

        {/* Contributors Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-accent text-center">Meet Our Contributors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img 
                src={contributor1} 
                alt="Amani" 
                className="rounded-t-lg w-full h-64 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Amani</h3>
                <p className="text-gray-600">Hey, this is Amani</p>
                <div className="mt-2 flex space-x-4">
                  <a 
                    href="https://github.com/AmaniWanene" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:underline flex items-center">
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                  <a 
                    href="mailto:amanigichanga@gmail.com" 
                    className="text-blue-500 hover:underline flex items-center">
                    Email
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img 
                src={contributor2} 
                alt="Evans" 
                className="rounded-t-lg w-full h-64 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Evans</h3>
                <p className="text-gray-600">Hey, this is Evans</p>
                <div className="mt-2 flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/evans-mogere-89396911b/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:underline flex items-center">
                    <FaLinkedin className="mr-1" /> LinkedIn
                  </a>
                  <a 
                    href="https://github.com/EvansOyugi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:underline flex items-center">
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
