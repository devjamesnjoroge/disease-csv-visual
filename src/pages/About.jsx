import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import insightsImage from '../assets/insights.jpg';

function About() {
  return (
    <div className="bg-secondary min-h-screen flex flex-col text-accent">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-12 space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
          About Disease Data Dashboard
        </h2>

        {/* Content */}
        <section className="text-lg md:text-xl text-text space-y-6 max-w-3xl mx-auto leading-relaxed">
          <p>
            The Disease Data Dashboard offers an interactive platform for visualizing disease trends, specifically focusing on Tuberculosis and Flu. Designed to provide actionable insights, the dashboard makes it easy to monitor case distributions over time, enabling data-driven public health responses.
          </p>
          <p>
            Whether you’re a healthcare provider or a policy-maker, our platform equips you with the information needed to respond effectively to disease trends. Upload data, analyze patterns, and stay informed about disease behavior.
          </p>
        </section>

        {/* Image */}
        <section className="flex justify-center">
          <img 
            src={insightsImage} 
            alt="Healthcare Insights" 
            className="rounded-lg shadow-lg w-full lg:w-2/3"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
