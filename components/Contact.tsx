import React from 'react';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import KaggleIcon from './icons/KaggleIcon';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-4 md:py-6 mt-16 border border-white/10 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
            <div className="flex flex-col items-center">
                <div className="space-y-4 mb-8">
                    <a href="mailto:rausqen@hotmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <span>rausqen@hotmail.com</span>
                    </a>
                </div>
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/rausqen/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><LinkedInIcon className="w-8 h-8"/></a>
                    <a href="https://www.kaggle.com/rausqen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><KaggleIcon className="w-8 h-8"/></a>
                </div>

                <div className="w-full mt-12 border-t border-white/10 pt-6 text-center">
                    <p className="text-gray-500 text-sm">
                        © 2025 Omer Faruk Koc. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;