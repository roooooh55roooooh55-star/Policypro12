import React, { useState, useEffect } from 'react';
import { Mail, Languages } from 'lucide-react'; 
import { content } from './translations';

import { 
  Section, 
  AlertBox, 
  BotPolicyCard, 
  PermissionTag, 
  SocialButton 
} from './components/UIComponents';
import { 
  IconShield, 
  IconWarning, 
  IconLock, 
  IconGhost, 
  IconYoutube, 
  IconFacebook, 
  IconWhatsapp, 
  IconTiktok 
} from './components/Icons';

type Lang = 'ar' | 'en';

const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>('ar');
  const t = content[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang(prev => prev === 'ar' ? 'en' : 'ar');

  return (
    <div className="min-h-screen pb-12 font-cairo overflow-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Decorative Header Background */}
      <div className="h-48 md:h-64 bg-gradient-to-b from-secondary to-slate-900 absolute top-0 w-full -z-10 rounded-b-[2rem] md:rounded-b-[3rem] shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <main className="container mx-auto px-4 pt-6 md:pt-10 max-w-4xl relative z-10">
        
        {/* Header Section */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-6 md:p-8 mb-6 md:mb-8 text-center border-b-4 border-primary transform hover:scale-[1.005] transition-transform duration-300 relative">
          
          {/* Language Toggle Button */}
          <button 
            onClick={toggleLang}
            className="absolute top-4 left-4 rtl:left-4 rtl:right-auto ltr:right-4 ltr:left-auto flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-secondary px-3 py-2 rounded-lg transition-colors shadow-sm text-sm font-bold"
          >
            <Languages className="w-4 h-4" />
            <span>{t.meta.langBtn}</span>
          </button>

          <div className="relative w-28 h-28 md:w-40 md:h-40 mx-auto mb-4 md:mb-6 group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-6 transform transition-transform group-hover:rotate-12"></div>
            <div className="absolute inset-0 bg-secondary/10 rounded-2xl -rotate-6 transform transition-transform group-hover:-rotate-12"></div>
            <img 
              src="https://s5files.mobeasy.com/static/u/1791974/file-1791974-866541.png" 
              alt="Logo" 
              className="relative w-full h-full object-contain rounded-2xl border-4 border-white bg-black shadow-lg"
            />
          </div>
          
          <h1 className="text-2xl md:text-5xl font-bold text-primary font-orbitron mb-2 md:mb-4 drop-shadow-sm leading-tight">
            {t.meta.title}
          </h1>
          <h2 className="text-lg md:text-2xl font-bold text-secondary mb-3 font-orbitron">
            {t.meta.subtitle}
          </h2>
          <p className="inline-block bg-slate-50 text-slate-500 px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold border border-slate-200 shadow-sm" dir="ltr">
            {t.meta.lastUpdated}
          </p>
        </div>

        {/* Alerts & Critical Warnings */}
        <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
          <AlertBox 
            type="error" 
            title={t.alerts.warningTitle}
            icon={<IconWarning className="w-5 h-5 md:w-6 md:h-6" />}
          >
            {t.alerts.warningText}
          </AlertBox>

          <AlertBox 
            type="info" 
            title={t.alerts.scopeTitle}
            icon={<IconShield className="w-5 h-5 md:w-6 md:h-6" />}
          >
            <p className="mb-3 leading-relaxed text-sm md:text-base">
              {t.alerts.scopeIntro}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
               <div className="p-3 bg-yellow-50 rounded-lg border-s-4 border-yellow-400 text-xs md:text-sm text-yellow-800 shadow-sm">
                <strong>🤖 {t.alerts.aiRights}</strong>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border-s-4 border-blue-400 text-xs md:text-sm text-blue-900 shadow-sm">
                <strong>👤 {t.alerts.controller}</strong>
              </div>
            </div>
          </AlertBox>
        </div>

        {/* Main Content Policy Points */}
        <div className="space-y-6 md:space-y-10">
          
          {/* Item 1 */}
          <Section number="01" title={t.sections.s1.title}>
            {t.sections.s1.content}
          </Section>

          {/* Item 2 */}
          <Section number="02" title={t.sections.s2.title}>
            {t.sections.s2.content}
          </Section>

          {/* Item 3 */}
          <Section number="03" title={t.sections.s3.title}>
            <p className="text-slate-700 mb-4 font-bold text-sm md:text-base">{t.sections.s3.intro}</p>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              {t.sections.s3.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <span className="mt-1.5 w-2.5 h-2.5 bg-accent rounded-full shrink-0 shadow-sm shadow-accent/50"></span>
                  <span className="text-slate-700"><strong>{item.title}:</strong> {item.desc}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Item 4 */}
          <Section number="04" title={t.sections.s4.title}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-slate-50 p-4 md:p-5 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-secondary mb-3 pb-2 border-b border-slate-200 flex items-center gap-2 text-sm md:text-base">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  {t.sections.s4.partA.title}
                </h4>
                <ul className="text-xs md:text-sm text-slate-600 space-y-2 list-disc list-inside marker:text-primary">
                  {t.sections.s4.partA.items.map((item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(':', ':</strong>').replace('Info:', 'Info:</strong>').replace('AdMob:', 'AdMob:</strong>').replace('Data:', 'Data:</strong>') }} />
                    // Simple hack to bold the key part if needed, or rely on raw string. 
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 p-4 md:p-5 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-secondary mb-3 pb-2 border-b border-slate-200 flex items-center gap-2 text-sm md:text-base">
                   <span className="w-2 h-2 bg-primary rounded-full"></span>
                   {t.sections.s4.partB.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {t.sections.s4.partB.text}
                </p>
              </div>
            </div>
          </Section>

          {/* Item 5 */}
          <Section number="05" title={t.sections.s5.title}>
            <p className="text-slate-700 mb-4 text-sm md:text-base">{t.sections.s5.text}</p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {t.sections.s5.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-2 bg-slate-100 rounded-lg border border-slate-200 text-slate-700 font-bold text-xs md:text-sm">
                  {tag.label} <span className="font-normal text-slate-500">{tag.sub}</span>
                </span>
              ))}
            </div>
          </Section>

          {/* Item 6 */}
          <Section number="06" title={t.sections.s6.title}>
            <p className="mb-4 md:mb-5 text-slate-700 text-sm md:text-base">{t.sections.s6.intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 dir-ltr">
              {t.sections.s6.perms.map((p, idx) => (
                <PermissionTag key={idx} code={p.code} desc={p.desc} />
              ))}
            </div>
          </Section>

          {/* Item 7 */}
          <Section number="07" title={t.sections.s7.title}>
            <div className="flex items-center gap-3 md:gap-4 bg-green-50 p-4 rounded-xl border border-green-200">
              <div className="p-2 md:p-3 bg-white rounded-full text-green-600 shadow-sm shrink-0">
                <IconShield className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <p className="text-green-900 font-medium text-sm md:text-base">
                {t.sections.s7.text}
              </p>
            </div>
          </Section>

          {/* Item 8 */}
          <Section number="08" title={t.sections.s8.title}>
            <div className="bg-red-50 border-s-4 border-red-500 p-4 md:p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-red-800 text-base md:text-lg mb-3 flex items-center gap-2">
                <IconLock className="w-5 h-5" />
                {t.sections.s8.subtitle}
              </h4>
              <ul className="space-y-3 text-red-900/80 text-sm md:text-base">
                {t.sections.s8.items.map((item, idx) => (
                   <li key={idx} className="flex gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-white/50 rounded text-red-700 font-bold border border-red-100 text-center text-xs md:text-sm">
                {t.sections.s8.warning}
              </div>
            </div>
          </Section>

          {/* Item 9 */}
          <Section number="09" title={t.sections.s9.title}>
            <p className="text-slate-700 text-base md:text-lg">
              {t.sections.s9.text}
            </p>
          </Section>

          {/* Item 10 */}
          <Section number="10" title={t.sections.s10.title}>
             <div className="space-y-4">
              <p className="text-slate-700 text-base md:text-lg">
                {t.sections.s10.intro}
              </p>
              <div className="bg-blue-50 p-4 md:p-5 rounded-xl border border-blue-100 flex flex-col md:flex-row items-start gap-3 md:gap-4">
                <div className="p-2 bg-blue-100 rounded-full text-blue-600 mt-1 shrink-0">
                  <IconGhost className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-blue-800 mb-1 text-sm md:text-base">{t.sections.s10.deleteTitle}</h5>
                  <p className="text-slate-700 leading-relaxed text-xs md:text-sm text-justify">
                    {t.sections.s10.deleteText}
                  </p>
                </div>
              </div>
             </div>
          </Section>

          {/* AI Bot Section */}
          <div className="mt-10 md:mt-16 transform hover:scale-[1.01] transition-transform duration-300">
            <BotPolicyCard content={t.bot} />
          </div>

          {/* Item 11 (Added after Bot Section) */}
          <div className="mt-8">
            <Section number="11" title={t.sections.s11.title}>
              {t.sections.s11.content}
            </Section>
          </div>

        </div>

        {/* Footer Contact */}
        <footer className="mt-12 md:mt-20 text-center border-t-2 border-dashed border-slate-300 pt-8 md:pt-12 pb-8">
          <h3 className="text-xl md:text-3xl font-bold text-secondary mb-6 md:mb-8 font-orbitron">
            {t.footer.title}
          </h3>
          <p className="text-slate-500 mb-6 md:mb-8 text-base md:text-lg">{t.footer.subtitle}</p>
          
          {/* Mobile Grid Layout for Buttons */}
          <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-center md:gap-6 mb-8 md:mb-10 max-w-sm mx-auto md:max-w-none">
            <SocialButton 
              icon={<IconWhatsapp className="w-6 h-6 md:w-7 md:h-7" />} 
              label={t.footer.socials.wa}
              color="bg-[#25D366] hover:bg-[#128C7E]" 
              href="#"
            />
            <SocialButton 
              icon={<IconFacebook className="w-6 h-6 md:w-7 md:h-7" />} 
              label={t.footer.socials.fb}
              color="bg-[#1877F2] hover:bg-[#0C63D4]" 
              href="#"
            />
            <SocialButton 
              icon={<IconYoutube className="w-6 h-6 md:w-7 md:h-7" />} 
              label={t.footer.socials.yt}
              color="bg-[#FF0000] hover:bg-[#CC0000]" 
              href="#"
            />
            <SocialButton 
              icon={<IconTiktok className="w-6 h-6 md:w-7 md:h-7" />} 
              label={t.footer.socials.tt}
              color="bg-[#000000] hover:bg-[#333333]" 
              href="#"
            />
          </div>

          <div className="bg-white inline-block px-6 py-4 md:px-8 rounded-2xl shadow-lg border-2 border-slate-100 mb-8 transform hover:-translate-y-1 transition-transform w-full md:w-auto overflow-hidden">
            <p className="text-slate-400 text-xs md:text-sm mb-1 font-bold">{t.footer.emailLabel}</p>
            <a href="mailto:roooooh55roooooh55@gmail.com" className="flex items-center justify-center gap-2 md:gap-3 text-secondary hover:text-primary transition-colors font-bold dir-ltr group">
              <span className="font-mono text-xs md:text-lg truncate group-hover:underline">roooooh55roooooh55@gmail.com</span>
              <div className="p-2 bg-slate-100 rounded-full group-hover:bg-primary/10 shrink-0">
                <Mail className="w-4 h-4 md:w-5 md:h-5" /> 
              </div>
            </a>
          </div>

          <p className="text-slate-500 font-medium text-xs md:text-base px-4">
            {t.footer.copyright}
          </p>
        </footer>

      </main>
    </div>
  );
};

export default App;