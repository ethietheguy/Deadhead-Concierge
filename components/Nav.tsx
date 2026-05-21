"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { StealYourFace } from "./StealYourFace";

export function Nav() {
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === "/") {
      window.dispatchEvent(new CustomEvent("concierge:reset"));
    }
  };

  return (
    <header className="border-b border-cream-dark bg-cream/80 backdrop-blur-sm sticky top-0 z-10">
      <nav className="max-w-page mx-auto px-4 sm:px-6 h-14 flex items-center">
        <Link
          href="/"
          onClick={handleClick}
          className="flex items-center gap-2 text-navy font-semibold tracking-tight hover:text-terracotta transition-colors"
        >
          <StealYourFace size={22} className="text-terracotta" />
          <span className="text-lg">Deadhead</span>
        </Link>
      </nav>
    </header>
  );
}
