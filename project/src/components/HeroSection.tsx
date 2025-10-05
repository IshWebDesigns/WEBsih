import React, { useEffect, useState } from 'react';

export const HeroSection = (): JSX.Element => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center justify-center">
      {/* Gradient animado de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient-shift" />
      
      {/* Partículas flutuantes */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      

      {/* Logo principal com efeitos incríveis */}
      <div className={`text-center mb-16 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center justify-center space-x-6 mb-16 group">
          {/* Barras de áudio esquerda com efeito 3D */}
          <div className="flex items-end space-x-2 transform group-hover:scale-110 transition-transform duration-300">
            {[8, 12, 6, 10, 4].map((height, i) => (
              <div
                key={i}
                className="w-2 bg-gradient-to-t from-blue-500 to-cyan-300 rounded-full shadow-lg shadow-blue-500/50 animate-pulse"
                style={{ 
                  height: `${height * 4}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${1 + Math.random()}s`
                }}
              />
            ))}
          </div>
          
          {/* Logo ISH com efeitos de texto */}
          <div className="relative">
            <h1 className="text-8xl md:text-9xl font-bold tracking-wider bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-text-shimmer bg-300% group-hover:scale-105 transition-transform duration-500">
              ish
            </h1>
            {/* Sombra brilhante */}
            <div className="absolute inset-0 text-8xl md:text-9xl font-bold tracking-wider text-blue-500/20 blur-2xl animate-pulse -z-10">
              ish
            </div>
            {/* Reflexo */}
            <div className="absolute top-full left-0 right-0 h-20 bg-gradient-to-b from-white/10 to-transparent opacity-30 transform scale-y-[-1] blur-sm">
              <h1 className="text-8xl md:text-9xl font-bold tracking-wider text-white/20">
                ish
              </h1>
            </div>
          </div>
          
          {/* Barras de áudio direita */}
          <div className="flex items-end space-x-2 transform group-hover:scale-110 transition-transform duration-300">
            {[6, 10, 4, 12, 8].map((height, i) => (
              <div
                key={i}
                className="w-2 bg-gradient-to-t from-purple-500 to-pink-300 rounded-full shadow-lg shadow-purple-500/50 animate-pulse"
                style={{ 
                  height: `${height * 4}px`,
                  animationDelay: `${i * 0.1 + 0.5}s`,
                  animationDuration: `${1 + Math.random()}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Tagline com efeito de digitação */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl text-gray-300 leading-relaxed font-light animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              Criamos websites modernos e
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">
              profissionais para o seu negócio
            </span>
          </h2>
        </div>

        {/* Botão CTA com efeitos */}
        <div className="mt-12">
          <button 
            onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="relative z-10">Ver Nosso Trabalho</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};