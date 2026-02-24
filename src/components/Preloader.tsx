import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const planeWrapperRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const leftLineRef = useRef<HTMLDivElement>(null);
  const rightLineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Phase 1: Globe appearance (0.5s)
      tl.fromTo(
        globeRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.4)' }
      );

      // Phase 2: Airplane 3D orbital animation (2.5s for 2 full orbits)
      // The airplane moves in a tilted elliptical path around the globe
      const orbitDuration = 2.5;
      const orbits = 2;
      
      // Animate the wrapper rotation to create orbit effect
      tl.to(
        planeWrapperRef.current,
        {
          rotationY: 360 * orbits,
          duration: orbitDuration,
          ease: 'power1.inOut',
        },
        '+=0.1'
      );

      // Simultaneously animate plane scale/opacity for depth illusion
      tl.to(
        planeRef.current,
        {
          keyframes: [
            { scale: 1, opacity: 1, duration: orbitDuration * 0.125 },
            { scale: 0.7, opacity: 0.4, filter: 'blur(1px)', duration: orbitDuration * 0.125 },
            { scale: 0.7, opacity: 0.3, filter: 'blur(2px)', duration: orbitDuration * 0.125 },
            { scale: 0.7, opacity: 0.4, filter: 'blur(1px)', duration: orbitDuration * 0.125 },
            { scale: 1, opacity: 1, filter: 'blur(0px)', duration: orbitDuration * 0.125 },
            { scale: 0.7, opacity: 0.4, filter: 'blur(1px)', duration: orbitDuration * 0.125 },
            { scale: 0.7, opacity: 0.3, filter: 'blur(2px)', duration: orbitDuration * 0.125 },
            { scale: 0.7, opacity: 0.4, filter: 'blur(1px)', duration: orbitDuration * 0.125 },
          ],
          ease: 'none',
        },
        '<'
      );

      // Phase 3: Brand reveal (0.7s)
      tl.to(brandRef.current, { opacity: 1, duration: 0.1 }, '+=0.3');
      
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 20, letterSpacing: '0px' },
        { opacity: 1, y: 0, letterSpacing: '3px', duration: 0.4, ease: 'power2.out' }
      );

      tl.fromTo(
        taglineRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' },
        '-=0.1'
      );

      tl.fromTo(
        [leftLineRef.current, rightLineRef.current],
        { width: 0, opacity: 0 },
        { width: 60, opacity: 0.7, duration: 0.4, ease: 'power2.out' },
        '-=0.2'
      );

      // Phase 4: Exit transition
      tl.to(
        globeRef.current,
        { scale: 1.05, duration: 0.3, ease: 'power2.inOut' },
        '+=0.5'
      );

      tl.to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: () => {
            setIsVisible(false);
            onComplete();
          },
        },
        '-=0.1'
      );
    });

    return () => ctx.revert();
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #1a2a4a 50%, #0d1a30 100%)',
        perspective: '1000px',
      }}
    >
      {/* Subtle star particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.3 + 0.1,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's',
            }}
          />
        ))}
      </div>

      {/* Globe Container */}
      <div className="relative mb-16" style={{ perspective: '1000px' }}>
        {/* Ambient glow */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(0, 138, 204, 0.3) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* 3D Globe */}
        <div
          ref={globeRef}
          className="relative rounded-full will-change-transform"
          style={{
            width: '200px',
            height: '200px',
            background: `
              radial-gradient(circle at 25% 25%, rgba(100, 160, 220, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(20, 40, 80, 0.9) 0%, transparent 50%),
              linear-gradient(135deg, #008acc 0%, #1e4a8a 50%, #2d3d7c 100%)
            `,
            boxShadow: `
              0 0 60px rgba(0, 138, 204, 0.4),
              0 0 120px rgba(0, 138, 204, 0.2),
              inset -30px -30px 60px rgba(0, 0, 0, 0.4),
              inset 20px 20px 40px rgba(100, 180, 255, 0.2)
            `,
            transform: 'rotateX(10deg)',
            opacity: 0,
          }}
        >
          {/* Globe highlight */}
          <div
            className="absolute rounded-full"
            style={{
              width: '80px',
              height: '80px',
              top: '15%',
              left: '15%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
              filter: 'blur(10px)',
            }}
          />

          {/* Subtle map texture overlay */}
          <div
            className="absolute inset-0 rounded-full opacity-[0.06]"
            style={{
              background: `
                repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(255,255,255,0.3) 8px, rgba(255,255,255,0.3) 9px),
                repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,0.3) 8px, rgba(255,255,255,0.3) 9px)
              `,
            }}
          />

          {/* Globe equator line */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
            style={{ width: '190px', height: '190px' }}
          />
        </div>

        {/* 3D Orbital Plane Wrapper */}
        <div
          ref={planeWrapperRef}
          className="absolute top-1/2 left-1/2 will-change-transform"
          style={{
            width: '280px',
            height: '280px',
            marginLeft: '-140px',
            marginTop: '-140px',
            transformStyle: 'preserve-3d',
            transform: 'rotateX(75deg) rotateZ(-15deg)',
          }}
        >
          {/* Subtle orbital trail */}
          <div
            className="absolute inset-0 rounded-full border border-white/10"
            style={{
              boxShadow: '0 0 20px rgba(0, 138, 204, 0.2)',
            }}
          />

          {/* Airplane */}
          <div
            ref={planeRef}
            className="absolute will-change-transform"
            style={{
              top: '0',
              left: '50%',
              marginLeft: '-24px',
              marginTop: '-24px',
              transformStyle: 'preserve-3d',
              transform: 'rotateX(-75deg) rotateZ(15deg)',
            }}
          >
            {/* Plane shadow */}
            <div
              className="absolute rounded-full bg-black/20 blur-md"
              style={{
                width: '40px',
                height: '10px',
                top: '40px',
                left: '4px',
              }}
            />
            {/* Airplane SVG */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="white"
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))',
              }}
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Brand Reveal */}
      <div
        ref={brandRef}
        className="flex flex-col items-center gap-3"
        style={{ opacity: 0 }}
      >
        {/* Roamzyy text */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold tracking-wide"
          style={{
            color: '#3564af',
            textShadow: '0 2px 20px rgba(53, 100, 175, 0.3)',
            opacity: 0,
          }}
        >
          Roamzyy
        </h1>

        {/* Tagline with lines */}
        <div
          ref={taglineRef}
          className="flex items-center gap-4"
          style={{ opacity: 0 }}
        >
          {/* Left line */}
          <div
            ref={leftLineRef}
            className="h-[1px]"
            style={{
              backgroundColor: '#3564af',
              width: 0,
              opacity: 0,
            }}
          />

          {/* Tagline text */}
          <p
            className="text-lg md:text-xl font-light tracking-wider"
            style={{ color: '#5a8fd4' }}
          >
            Journeys made easy
          </p>

          {/* Right line */}
          <div
            ref={rightLineRef}
            className="h-[1px]"
            style={{
              backgroundColor: '#3564af',
              width: 0,
              opacity: 0,
            }}
          />
        </div>
      </div>

      {/* CSS for star twinkle animation */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
