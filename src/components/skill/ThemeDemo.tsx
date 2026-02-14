'use client';

import { Skill } from '@/types';
import { MouseEvent, useState } from 'react';
import { Monitor, Smartphone, Tablet } from 'lucide-react';

interface ThemeDemoProps {
  skill: Skill;
}

export function ThemeDemo({ skill }: ThemeDemoProps) {
  const [activeView, setActiveView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!skill.preview) {
    return null;
  }

  // Theme-specific configuration helpers
  const getThemeConfig = () => {
    const isIndustrial = skill.slug.includes('nictorys');
    const isMinimal = skill.slug.includes('minimal');
    const isWindsor = skill.slug.includes('windsor');
    const isUcam = skill.slug.includes('ucam');

    // Default fallback
    return {
      isIndustrial, isMinimal, isWindsor, isUcam,
      primaryColor: skill.preview.colors[0],
      bgColor: skill.preview.colors[1] || '#ffffff',
      headingFont: skill.preview.typography.headings,
      bodyFont: skill.preview.typography.body,
      borderRadius: isIndustrial ? '60px' : isMinimal ? '6px' : isWindsor ? '2px' : '0px',
    };
  };

  const config = getThemeConfig();

  // Helper to determine text color (dark/light) based on background
  const getTextColor = (bgColor: string) => {
    // Simple heuristic: if likely white/light, use dark text.
    // In a real app, we'd parse hex to RGB to calculate luminance.
    const lower = bgColor.toLowerCase();
    const isLight = lower === '#ffffff' || lower === '#f9f9f9' || lower.includes('f');
    return isLight ? '#111827' : '#FFFFFF';
  };

  const textColor = getTextColor(config.bgColor);
  const secondaryTextColor = config.isIndustrial ? '#777777' : textColor === '#FFFFFF' ? 'rgba(255,255,255,0.6)' : '#6B7280';

  const viewWidth = {
    desktop: 'w-full',
    tablet: 'w-[768px]',
    mobile: 'w-[375px]'
  };

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Live Website Preview</h2>
        <div className="flex bg-zinc-900 border border-white/10 rounded-lg p-1 gap-1">
          <button
            onClick={() => setActiveView('desktop')}
            className={`p-2 rounded-md transition-colors ${activeView === 'desktop' ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-white'}`}
          >
            <Monitor size={18} />
          </button>
          <button
            onClick={() => setActiveView('tablet')}
            className={`p-2 rounded-md transition-colors ${activeView === 'tablet' ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-white'}`}
          >
            <Tablet size={18} />
          </button>
          <button
            onClick={() => setActiveView('mobile')}
            className={`p-2 rounded-md transition-colors ${activeView === 'mobile' ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-white'}`}
          >
            <Smartphone size={18} />
          </button>
        </div>
      </div>

      <div className="w-full bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm flex justify-center py-8">
        {skill.demoUrl ? (
          <div className={`${viewWidth[activeView]} transition-all duration-500 shadow-2xl overflow-hidden bg-white h-[800px]`}>
            <iframe
              src={skill.demoUrl}
              className="w-full h-full border-0"
              title={`${skill.title} Demo`}
            />
          </div>
        ) : (
          <div
            className={`${viewWidth[activeView]} transition-all duration-500 shadow-2xl overflow-hidden bg-white relative`}
            style={{
              fontFamily: config.bodyFont,
              backgroundColor: config.bgColor,
              color: textColor
            }}
          >
            {/* --- NAVIGATION BAR --- */}
            <nav className="flex items-center justify-between px-8 py-6 border-b"
              style={{
                borderColor: config.isIndustrial ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)',
                backgroundColor: config.bgColor
              }}>
              <div className="font-bold text-2xl tracking-tighter" style={{ fontFamily: config.headingFont }}>
                {config.isIndustrial && <span style={{ color: config.primaryColor }}>/// </span>}
                {skill.title.split(' ')[0].toUpperCase()}
              </div>
              <div className="hidden md:flex gap-8 text-sm font-medium opacity-80">
                <span>Services</span>
                <span>Projects</span>
                <span>About</span>
                <span>Contact</span>
              </div>
              <button
                className="px-6 py-2 text-sm font-bold transition-transform hover:scale-105"
                style={{
                  backgroundColor: config.isWindsor ? 'transparent' : config.primaryColor,
                  color: config.isWindsor ? textColor : '#fff',
                  border: config.isWindsor ? `1px solid ${textColor}` : 'none',
                  borderRadius: config.borderRadius,
                  textTransform: config.isIndustrial ? 'uppercase' : 'none'
                }}
              >
                Get Quote
              </button>
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="px-8 py-20 md:py-32 flex flex-col items-center text-center relative overflow-hidden">
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none"
                style={{ backgroundColor: config.primaryColor, borderRadius: '50%', filter: 'blur(80px)' }}
              />

              <span
                className="mb-6 font-bold tracking-widest text-sm uppercase"
                style={{ color: config.primaryColor }}
              >
                {config.isWindsor ? 'Established 2024' : 'Future of Design'}
              </span>

              <h1
                className="text-5xl md:text-7xl font-bold mb-8 leading-tight max-w-3xl"
                style={{
                  fontFamily: config.headingFont,
                  textTransform: (config.isIndustrial || config.isUcam) ? 'uppercase' : 'none'
                }}
              >
                Build {config.isWindsor ? 'elegance' : 'faster'} with {skill.title}
              </h1>

              <p
                className="text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
                style={{ color: secondaryTextColor }}
              >
                {skill.description} This theme provides a comprehensive suite of design tokens, components, and templates to launch your next big project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  style={{
                    backgroundColor: config.primaryColor,
                    color: '#fff',
                    borderRadius: config.borderRadius,
                    textTransform: config.isIndustrial ? 'uppercase' : 'none'
                  }}
                >
                  Start Building
                </button>
                <button
                  className="px-8 py-4 text-lg font-bold border transition-colors hover:bg-opacity-5"
                  style={{
                    borderColor: config.primaryColor,
                    color: config.isIndustrial ? config.primaryColor : textColor,
                    borderRadius: config.borderRadius,
                    textTransform: config.isIndustrial ? 'uppercase' : 'none',
                    backgroundColor: 'transparent'
                  }}
                >
                  Learn More
                </button>
              </div>
            </section>

            {/* --- FEATURES GRID --- */}
            <section className="px-8 py-20" style={{ backgroundColor: config.isMinimal ? '#f9fafb' : 'rgba(0,0,0,0.02)' }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="p-8 transition-transform hover:-translate-y-2 duration-300"
                    style={{
                      backgroundColor: config.isMinimal ? '#ffffff' : 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      borderRadius: config.isIndustrial ? '0px' : '12px',
                      boxShadow: config.isMinimal ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
                    }}
                  >
                    <div className="w-12 h-12 mb-6 flex items-center justify-center font-bold text-xl"
                      style={{
                        backgroundColor: config.isIndustrial ? 'transparent' : `${config.primaryColor}20`,
                        color: config.primaryColor,
                        borderRadius: config.isIndustrial ? '0' : '50%',
                        border: config.isIndustrial ? `2px solid ${config.primaryColor}` : 'none'
                      }}
                    >
                      {item}
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ fontFamily: config.headingFont }}>
                      Feature Component {item}
                    </h3>
                    <p style={{ color: secondaryTextColor }}>
                      High-quality components designed to match the {skill.title} aesthetic perfectly.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-24 px-8 text-center" style={{ backgroundColor: '#111', color: '#fff' }}>
              <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: config.headingFont }}>
                Ready to launch?
              </h2>
              <p className="mb-8 opacity-70 max-w-xl mx-auto">
                Get access to the complete design system and start building premium interfaces today.
              </p>
              <button
                className="px-10 py-4 text-lg font-bold transition-transform hover:scale-105"
                style={{
                  backgroundColor: config.primaryColor,
                  color: '#fff',
                  borderRadius: config.borderRadius,
                  textTransform: config.isIndustrial ? 'uppercase' : 'none'
                }}
              >
                Get Access Now
              </button>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-12 px-8 border-t text-sm"
              style={{
                backgroundColor: config.bgColor,
                borderColor: 'rgba(0,0,0,0.1)',
                opacity: 0.6
              }}>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="font-bold" style={{ fontFamily: config.headingFont }}>{skill.title} Inc.</span>
                <div className="flex gap-6">
                  <span>Privacy</span>
                  <span>Terms</span>
                  <span>Twitter</span>
                </div>
                <span>© 2024 All rights reserved.</span>
              </div>
            </footer>
          </div>
        )}
      </div>

      <p className="text-center text-zinc-500 text-sm mt-4">
        * This is a live preview simulation. All elements are rendered using the theme&apos;s actual design tokens.
      </p>
    </div>
  );
}
