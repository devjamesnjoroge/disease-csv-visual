import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import analysisImage from '../assets/hex-pattern.jpg';

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
      </main>

      <Footer />
    </div>
  );
}

export default Home;
