import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import analysisImage from '../assets/hex-pattern.jpg';
import contributor1 from '../assets/contributors2.jpg';
import contributor2 from '../assets/contributors1.jpg';
import contributor3 from '../assets/contributors3.jpg';
import contributor4 from '../assets/contributors4.jpg';

function Home() {
  return (
    <div className="bg-secondary min-h-screen flex flex-col text-accent">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-12 space-y-16">
        
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-accent">
            Monitor and Analyze Disease Data
          </h2>
          <p className="text-lg md:text-xl text-text max-w-2xl mx-auto">
            Providing insights into Tuberculosis and Flu trends to support better decision-making in public health.
          </p>
          <Link 
            to="/dashboard/upload" 
            className="inline-block bg-primary text-accent px-6 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-80 transition">
            Explore the Dashboard
          </Link>
        </section>

        {/* Image and Description */}
        <section className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-8 lg:space-y-0">
          <img 
            src={analysisImage} 
            alt="Data Analysis" 
            className="w-full lg:w-1/2 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full rounded-lg shadow-lg object-scale-down" 
          />
          <div className="text-text text-base leading-relaxed space-y-4 lg:max-w-lg">
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
            {[{img: contributor1, name: "Amani", github: "https://github.com/AmaniWanene", email: "amanigichanga@gmail.com"},
              {img: contributor2, name: "Evans", github: "https://github.com/EvansOyugi", linkedin: "https://www.linkedin.com/in/evans-mogere-89396911b/"},
              {img: contributor3, name: "Faith", github: "https://github.com/faith-watene", linkedin: "https://www.linkedin.com/in/faith-wangui-7a85862b8", email: "wanguufaith@gmail.com"},
              {img: contributor4, name: "Catherine", github: "https://github.com/Katekui2024", linkedin: "https://www.linkedin.com/in/catherine-njang-ara-a202bb122/", email: "jangkatrina@gmail.com"}].map((contributor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                <img 
                  src={contributor.img} 
                  alt={contributor.name} 
                  className="rounded-t-lg w-full h-64 object-scale-down" 
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{contributor.name}</h3>
                  <p className="text-gray-600">Hey, this is {contributor.name}</p>
                  <div className="mt-4 flex justify-center space-x-4">
                    {contributor.github && (
                      <a href={contributor.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                        <FaGithub className="mr-1" /> GitHub
                      </a>
                    )}
                    {contributor.linkedin && (
                      <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                        <FaLinkedin className="mr-1" /> LinkedIn
                      </a>
                    )}
                    {contributor.email && (
                      <a href={`mailto:${contributor.email}`} className="text-blue-500 hover:underline flex items-center">
                        Email
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
