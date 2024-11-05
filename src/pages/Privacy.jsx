import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Privacy() {
  return (
    <div className="bg-secondary min-h-screen flex flex-col text-accent">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-12 space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
          Privacy Policy
        </h2>
        
        {/* Privacy Content */}
        <section className="text-lg md:text-xl text-text space-y-6 max-w-3xl mx-auto leading-relaxed">
          <p>
            Your privacy is important to us. This policy outlines the data we collect, how it is used, and your rights regarding your data.
          </p>
          <p>
            <strong>Data Collection:</strong> Data collected is limited to information uploaded through CSV files. No additional personal data is accessed.
          </p>
          <p>
            <strong>Security:</strong> All uploaded data is stored securely and is used exclusively for dashboard visualizations.
          </p>
          <p>
            <strong>Your Rights:</strong> Users can request data removal at any time. Please reach out to our support team for assistance.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Privacy;
