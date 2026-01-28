import React, { ReactNode } from 'react';
import { IconBot } from './Icons';

// 1. Policy Section Card
interface SectionProps {
  number: string;
  title: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ number, title, children }) => (
  <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg shadow-slate-200/50 border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
    <div className="absolute top-0 right-0 rtl:right-0 ltr:left-0 w-20 h-20 md:w-24 md:h-24 bg-slate-50 rounded-bl-full rtl:rounded-bl-full ltr:rounded-br-full -mr-4 -mt-4 ltr:-ml-4 ltr:mr-0 transition-colors group-hover:bg-red-50"></div>
    <div className="relative z-10">
      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
        <span className="text-3xl md:text-4xl font-black text-slate-200 font-orbitron group-hover:text-primary/20 transition-colors">
          {number}
        </span>
        <h3 className="text-lg md:text-xl font-bold text-secondary group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>
      </div>
      {/* Changed border-r to border-s (start) and pr to ps (padding-start) for logical direction */}
      <div className="ps-2 md:ps-4 border-s-2 border-slate-100 group-hover:border-primary/30 transition-colors">
        {children}
      </div>
    </div>
  </div>
);

// 2. Alert Box
interface AlertBoxProps {
  type: 'error' | 'info' | 'warning';
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export const AlertBox: React.FC<AlertBoxProps> = ({ type, title, icon, children }) => {
  const styles = {
    error: 'bg-red-50 border-red-500 text-red-900',
    warning: 'bg-amber-50 border-amber-500 text-amber-900',
    info: 'bg-sky-50 border-sky-500 text-sky-900',
  };

  const iconColors = {
    error: 'text-red-600',
    warning: 'text-amber-600',
    info: 'text-sky-600',
  };

  return (
    // Changed border-r to border-s for logical start border
    <div className={`${styles[type]} border-s-4 md:border-s-8 p-4 md:p-5 rounded-lg shadow-sm flex items-start gap-3 md:gap-4`}>
      <div className={`${iconColors[type]} shrink-0 mt-1`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-base md:text-lg mb-1">{title}</h4>
        <div className="text-xs md:text-sm opacity-90 leading-relaxed text-justify">
          {children}
        </div>
      </div>
    </div>
  );
};

// 3. Bot Policy Card (Special Design)
interface BotPolicyCardProps {
  content: {
    title: string;
    intro: string;
    features: string[];
  }
}

export const BotPolicyCard: React.FC<BotPolicyCardProps> = ({ content }) => (
  <div className="relative bg-[#1a1a2e] text-white p-6 md:p-8 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#00CCFF] shadow-[0_0_20px_rgba(0,204,255,0.3)] group">
    {/* Animated background glow */}
    <div className="absolute -top-20 -left-20 w-40 h-40 md:w-60 md:h-60 bg-[#FF3366] blur-[60px] md:blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
    <div className="absolute -bottom-20 -right-20 w-40 h-40 md:w-60 md:h-60 bg-[#00CCFF] blur-[60px] md:blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>

    <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-start">
      <div className="p-3 md:p-4 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm shrink-0">
        <IconBot className="w-10 h-10 md:w-12 md:h-12 text-[#00CCFF]" />
      </div>
      <div className="flex-1">
        <h2 className="text-xl md:text-2xl font-bold mb-2 font-orbitron text-[#FF3366] drop-shadow-md">
           {content.title}
        </h2>
        <p className="text-slate-300 mb-4 text-xs md:text-sm">
          {content.intro}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 text-xs md:text-sm">
          {content.features.map((feature, idx) => (
             <li key={idx} className="bg-white/5 p-2 rounded border border-white/10 text-[#00CCFF]">
               {feature}
             </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// 4. Permission Tag
export const PermissionTag: React.FC<{ code: string; desc: string }> = ({ code, desc }) => (
  <span className="inline-flex items-center bg-slate-100 border border-slate-200 rounded-md overflow-hidden text-xs shadow-sm hover:shadow-md transition-shadow w-full">
    <span className="px-2 py-1.5 bg-slate-200 text-slate-600 font-mono border-e border-slate-300 whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] md:max-w-none">
      {code}
    </span>
    <span className="px-2 py-1.5 text-primary font-bold flex-1 truncate">
      {desc}
    </span>
  </span>
);

// 5. Social Button
interface SocialBtnProps {
  icon: ReactNode;
  label: string;
  color: string;
  href: string;
}

export const SocialButton: React.FC<SocialBtnProps> = ({ icon, label, color, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`${color} text-white px-4 py-3 md:px-5 rounded-xl flex items-center justify-center md:justify-start gap-2 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full md:w-auto`}
  >
    {icon}
    <span className="text-sm md:text-base">{label}</span>
  </a>
);