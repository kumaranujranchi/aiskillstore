'use client';

import { useEffect, useRef } from 'react';

class Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  density: number;
  color: string;
  speedX: number;
  speedY: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.baseX = this.x;
    this.baseY = this.y;
    // Much smaller particles for "dust/star" look
    this.size = Math.random() * 1.5 + 0.5; 
    this.density = Math.random() * 30 + 1;
    
    // Slow, random drift
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    
    // Skill Store Theme Colors (blue, purple, teal) + White for depth
    const colors = ['#3B82F6', '#60A5FA', '#8B5CF6', '#A78BFA', '#2DD4BF', '#ffffff', '#ffffff'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(ctx: CanvasRenderingContext2D, mouse: { x: number, y: number }, magneticRadius: number, canvasWidth: number, canvasHeight: number) {
    // 1. Automatic Movement
    this.x += this.speedX;
    this.y += this.speedY;
    this.baseX += this.speedX;
    this.baseY += this.speedY;

    // 2. Wrap around edges
    if (this.x > canvasWidth) {
        this.x = 0;
        this.baseX = this.x;
    } else if (this.x < 0) {
        this.x = canvasWidth;
        this.baseX = this.x;
    }
    
    if (this.y > canvasHeight) {
        this.y = 0;
        this.baseY = this.y;
    } else if (this.y < 0) {
        this.y = canvasHeight;
        this.baseY = this.y;
    }

    // 3. Mouse Interaction (Strong Magnetic Repulsion)
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Physics Constants
    const forceMultiplier = 10; // Strength of push
    const returnSpeed = 20; // Friction/Return speed (Higher = Slower)

    if (distance < magneticRadius) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        
        // Calculate force (stronger when closer)
        const force = (magneticRadius - distance) / magneticRadius;
        
        // Repulsion Vector
        // Move AWAY from mouse
        const directionX = forceDirectionX * force * this.density * forceMultiplier;
        const directionY = forceDirectionY * force * this.density * forceMultiplier;

        this.x -= directionX;
        this.y -= directionY;
    } else {
        // 4. Return to Base Position (Elasticity / Memory)
        // Only return if not too far (to allow drift)
        if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / returnSpeed; 
        }
        if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / returnSpeed;
        }
    }

    this.draw(ctx);
  }
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Config for "Antigravity" feel
    // Medium density as requested (400-500 range)
    const particleCount = 450; 
    const particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };
    const magneticRadius = 150; 

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(); 
    };

    // Initialize Particles
    const init = () => {
        particles.length = 0;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(canvas.width, canvas.height));
        }
    };
    
    setSize(); // Initial set
    window.addEventListener('resize', setSize);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update(ctx, mouse, magneticRadius, canvas.width, canvas.height);
        }
        animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Event Listeners
    const handleMouseMove = (e: MouseEvent) => {
        // Use clientX/Y to track mouse relative to viewport (fixed canvas)
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    // Cleanup
    return () => {
        window.removeEventListener('resize', setSize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseout', handleMouseLeave);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className="fixed inset-0 pointer-events-none z-0 opacity-50 mix-blend-screen"
        style={{ background: 'transparent' }}
    />
  );
}
