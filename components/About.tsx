import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#111]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              Yapay Zekâ ile Geleceği Şekillendirmek
            </h2>
            <p className="text-gray-400 leading-relaxed mb-12">
              Modern AI teknolojileri ile karmaşık problemlere çözümler üretiyorum. Makine öğrenmesi, derin öğrenme ve veri bilimi alanlarında uzmanlaşarak inovasyonun öncüsü olmaya devam ediyorum.
            </p>
            <div className="flex flex-wrap gap-x-12 gap-y-8">
              <div>
                <p className="text-4xl font-bold text-white">15+</p>
                <p className="text-sm text-gray-500 tracking-widest uppercase mt-2">Projeler</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">3+</p>
                <p className="text-sm text-gray-500 tracking-widest uppercase mt-2">Yıl Deneyim</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">AI</p>
                <p className="text-sm text-gray-500 tracking-widest uppercase mt-2">Uzmanı</p>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=2070&auto=format&fit=crop" 
              alt="AI Engineer working on multiple screens" 
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;