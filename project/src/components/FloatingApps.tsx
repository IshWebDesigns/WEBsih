import React, { useEffect, useState } from 'react';

export const FloatingApps = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('sobre');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const apps = [
    { name: 'Figma', icon: '🎨', color: 'from-purple-500 to-pink-500', position: 'top-[20%] left-[15%]' },
    { name: 'Lr', icon: 'Lr', color: 'from-blue-600 to-blue-700', position: 'top-[15%] left-[40%]' },
    { name: 'Pr', icon: 'Pr', color: 'from-purple-700 to-purple-800', position: 'top-[10%] right-[25%]' },
    { name: 'FantastiCal', icon: '📅', color: 'from-red-500 to-orange-500', position: 'top-[12%] right-[15%]' },
    { name: 'Xcode', icon: '⚡', color: 'from-blue-500 to-cyan-500', position: 'top-[35%] left-[10%]' },
    { name: 'GitHub', icon: '🐙', color: 'from-gray-700 to-gray-900', position: 'top-[45%] right-[10%]' },
    { name: 'Data Jar', icon: '📊', color: 'from-green-500 to-emerald-500', position: 'top-[25%] right-[35%]' },
    { name: 'NetNewsWire', icon: '📰', color: 'from-orange-500 to-red-500', position: 'top-[55%] left-[25%]' },
    { name: 'Typeface', icon: 'T', color: 'from-red-500 to-pink-500', position: 'top-[60%] left-[5%]' },
    { name: 'Ps', icon: 'Ps', color: 'from-blue-700 to-indigo-700', position: 'bottom-[25%] left-[30%]' },
    { name: 'CleanMyMac', icon: '🧹', color: 'from-blue-400 to-purple-600', position: 'bottom-[20%] right-[20%]' },
    { name: 'X', icon: '✕', color: 'from-black to-gray-800', position: 'top-[30%] right-[45%]' },
  ];

  return (
    <section id="sobre" className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background com efeito de grade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:50px_50px]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:50px_50px]" />

      {/* Ícones de apps flutuantes com efeitos 3D */}
      <div className="absolute inset-0 pointer-events-none">
        {apps.map((app, index) => (
          <div
            key={app.name}
            className={`absolute w-16 h-16 ${app.position} transform transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0 rotate-0' 
                : 'opacity-0 translate-y-10 rotate-45'
            }`}
            style={{ 
              transitionDelay: `${index * 100}ms`,
              animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
              animationDelay: `${index * 0.2}s`
            }}
          >
            <div className={`w-full h-full bg-gradient-to-br ${app.color} rounded-2xl shadow-2xl flex items-center justify-center text-white font-bold text-lg transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer group relative overflow-hidden`}>
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              {/* Conteúdo do ícone */}
              <span className="relative z-10 drop-shadow-lg">
                {app.icon}
              </span>
              
              {/* Reflexo */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-2xl" />
            </div>
            
            {/* Sombra projetada */}
            <div className={`absolute top-2 left-2 w-full h-full bg-gradient-to-br ${app.color} rounded-2xl blur-xl opacity-30 -z-10`} />
          </div>
        ))}
      </div>
      
      {/* Texto central com efeitos de animação */}
      <div className={`text-center z-10 px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8 relative">
          <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-text-shimmer bg-300%">
            JUNTOS
          </span>
          <span className="block bg-gradient-to-r from-purple-100 via-pink-100 to-white bg-clip-text text-transparent animate-text-shimmer bg-300%">
            MELHORAMOS O
          </span>
          <span className="block bg-gradient-to-r from-blue-100 via-white to-cyan-100 bg-clip-text text-transparent animate-text-shimmer bg-300%">
            SEU NEGÓCIO
          </span>
          
          {/* Efeito de brilho atrás do texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10 animate-pulse" />
        </h2>
        
        {/* Botão Nossos Projetos com efeitos avançados */}
        <div className="mt-16">
          <button 
            onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative border-2 border-gray-600 rounded-full px-10 py-4 text-gray-400 hover:text-white hover:border-white transition-all duration-500 flex items-center space-x-4 mx-auto overflow-hidden"
          >
            {/* Background animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-pink-600/20 transition-all duration-500" />
            
            <span className="relative z-10 font-medium">Nossos Projetos</span>
            
            {/* Seta animada */}
            <div className="relative z-10 w-6 h-6 overflow-hidden">
              <div className="w-4 h-4 border-r-2 border-t-2 border-current transform rotate-45 transition-all duration-300 group-hover:translate-x-1" />
            </div>
            
            {/* Efeito de ondas */}
            <div className="absolute inset-0 rounded-full bg-white/5 transform scale-0 group-hover:scale-100 transition-transform duration-500" />
          </button>
        </div>
      </div>

      {/* Partículas de código flutuantes */}
      <div className="absolute inset-0 pointer-events-none">
        {['<>', '{}', '[]', '/>', '&&', '||'].map((symbol, i) => (
          <div
            key={symbol}
            className="absolute text-blue-500/20 font-mono text-2xl animate-float-code"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 3)}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>
    </section>
  );
};