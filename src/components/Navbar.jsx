import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { navLinks } from '../../constants/index.js';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
      },
    });

    navTween.fromTo(
      'nav',
      { backgroundColor: 'transparent' },
      {
        backgroundColor: '#00000050',
        backdropFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut',
      }
    );
  }, []);

  return (
    <nav className="fixed z-50 w-full backdrop-blur transition-all duration-500">
      <div className="container mx-auto flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="h-10" />
          <p className="font-modern-negra text-3xl -mb-2">Velvet Pour</p>
        </a>

        {/* Hamburger button for mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-3xl text-white"
        >
          ☰
        </button>

        {/* Nav Links */}
        <ul
          className={`${
            isMobileMenuOpen
              ? 'flex flex-col absolute top-full right-5 bg-black/80 backdrop-blur p-5 rounded-md space-y-3'
              : 'hidden'
          } md:flex md:items-center md:gap-12 gap-7 list-none`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="cursor-pointer whitespace-nowrap md:text-base text-sm text-white font-medium hover:text-yellow transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
