import { useState, useEffect } from "react";
import { Menu, X, Calendar, MapPin, Radio } from "lucide-react";

interface MastheadProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Masthead({ onNavigate, activeSection }: MastheadProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headlines = [
    "🔥 REBELLION DOMINANCE: San Diego defense hasn't allowed a single point in the postseason (2 shutouts)!",
    "🏆 THE MATCHUP: Texas Elite Spartans (8-0) vs. San Diego Rebellion (7-1) set for Sunday, June 21, in Frisco, TX",
    "⚡ WNFC FINALS SHUTOUTS: [West Champ] San Diego Rebellion (7-1) 20, Utah Falconz (6-2) 0 | [East Champ] Texas Elite Spartans (8-0) 33, Washington Prodigy (6-2) 6",
    "🏈 WNFC SEMIFINALS: San Diego Rebellion (7-1) 30, LA Legends (4-3) 0 | Utah Falconz (6-2) 22, Kansas City Glory (4-3) 19 | Texas Elite Spartans (8-0) 27, Atlanta Truth (4-3) 6 | Washington Prodigy (6-2) 14, Mississippi Panthers (4-3) 13",
    "🏆 WNFC WEST CONFERENCE MVPS: [Overall MVP] Katie Claxton | [Offensive MVP] Kesz Wesley | [Defensive MVP] Brittani Lusain",
    "⭐ WNFC EAST CONFERENCE MVPS: [Overall MVP] Tara Thomas | [Offensive MVP] Maria Jackson | [Defensive MVP] Crystal Daniels",
    "🏆 WFA PRO WEEK 7 SCORES: Minnesota Vixen (5-1) 55, Tampa Bay Inferno (1-4) 21 | D.C. Divas (4-1) 33, Pittsburgh Passion (4-1) 29 | St. Louis Slam (4-1) 62, Derby City Dynamite (3-2) 20",
    "🏈 WFA PRO NATIONAL STANDINGS: Salt Lake City Wildcats (5-0) | Minnesota Vixen (5-1) | Cali War (4-1) | D.C. Divas (4-1) | Pittsburgh Passion (4-1) | St. Louis Slam (4-1) | Nevada Storm (3-2) | Cincinnati Cougars (2-3) | Houston Energy (2-3) | Mile High Blaze (2-3) | Tampa Bay Inferno (1-4)",
    "🏈 WFA DIV II MIDWEST STANDINGS: Lansing Legacy (5-0) | Derby City Dynamite (3-2) | Michigan Mercenaries (3-2)",
    "🏈 WFA DIV II SOUTHWEST STANDINGS: OKC Force (5-0) | Dallas Elite Mustangs (2-3) | Zydeco Spice (1-4)",
    "🏈 WFA DIV II NORTHEAST STANDINGS: Tri State Warriors (5-0) | Richmond Black Widows (4-2) | Baltimore Nighthawks (3-2) | Maine Mayhem (3-2)",
    "🏈 WFA DIV II SOUTHEAST STANDINGS: West Palm Beach Coyotes (4-1) | Atlanta Rage (3-2) | Jacksonville Dixie Blues (2-3)",
    "📺 BROADCAST ADVISORY: IX Cup championship game will kick off live from and streaming on ESPN2 at 4:30 PM ET",
    "🌟 RECORD BROKEN: Leilani Caamal (Storm LB) sets WNFC single-season record with 86 combined tackles!",
  ];

  const navItems = [
    { id: "bracket", label: "Playoff Bracket" },
    { id: "journeys", label: "Team Journeys" },
    { id: "preview", label: "Championship Preview" },
    { id: "mvp", label: "MVP Candidates" },
    { id: "wfa", label: "WFA Pro Power" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#F2F0EA] border-b border-black/10 pt-8 pb-4 relative z-30">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        
        {/* Top Header Grid */}
        <div className="flex border-b border-black/10 pb-4 justify-between items-center text-[10px] font-mono uppercase tracking-[0.2em] text-[#1A1A1A]/60 flex-wrap gap-x-6 gap-y-2">
          <div>
            <span>Issue #28 (June 2026)</span>
          </div>
          <div className="flex items-center gap-4 text-[9px] font-mono">
            <span className="opacity-40 uppercase tracking-widest">Follow:</span>
            <a href="https://instagram.com/holdthew" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline tracking-widest font-black uppercase">Instagram</a>
            <span>•</span>
            <a href="https://facebook.com/holdthew" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline tracking-widest font-black uppercase">Facebook</a>
            <span>•</span>
            <a href="https://www.youtube.com/@holdthew" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline tracking-widest font-black uppercase">YouTube</a>
          </div>
          <div>
            <span>❖</span>
          </div>
        </div>

        {/* Big Editorial Title (Styled to exactly recreate the official transparent logo) */}
        <div className="text-center py-10 flex flex-col items-center">
          <div 
            onClick={() => handleNavClick("bracket")}
            className="cursor-pointer select-none transition-all hover:opacity-90 flex items-center justify-center flex-wrap gap-x-4 sm:gap-x-6 text-[#1A1A1A]"
          >
            <span 
              className="font-black text-[45px] sm:text-[70px] md:text-[90px] lg:text-[104px] tracking-[0.04em] leading-none text-black select-none uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              HOLD THE
            </span>
            <span 
              className="font-black text-[52px] sm:text-[80px] md:text-[102px] lg:text-[118px] leading-none text-[#FF3B30] select-none uppercase font-serif"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              W
            </span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 mt-6 max-w-lg mx-auto">
            YOUR INDEPENDENT SOURCE FOR WOMEN'S FOOTBALL
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-stretch border-b border-black/10 my-4 text-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex-1 py-4 text-[10px] font-mono font-bold uppercase tracking-wider border-r border-black/10 last:border-r-0 transition-all cursor-pointer relative group ${
                  isActive
                    ? "bg-[#1A1A1A] text-white"
                    : "text-[#1A1A1A]/70 hover:text-black hover:bg-black/5"
                }`}
              >
                <span className={!isActive ? "group-hover:line-through" : ""}>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Mobile Navigation Bar */}
        <div className="md:hidden flex items-center justify-between py-3 border-b border-black/10 mb-2">
          <span className="font-mono text-[10px] tracking-wider uppercase font-bold text-[#1A1A1A]">SELECT ISSUE SECTIONS</span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="py-1 px-3 border border-black text-[10px] font-mono uppercase tracking-wider hover:bg-black hover:text-[#F2F0EA] transition-all"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col border border-black/20 bg-[#F2F0EA] p-2 absolute left-4 right-4 z-50 shadow-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-3 px-4 text-left font-mono text-[11px] font-bold uppercase transition-all flex justify-between items-center ${
                  activeSection === item.id
                    ? "bg-[#1A1A1A] text-[#F2F0EA]"
                    : "hover:bg-black/5 text-[#1A1A1A]"
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <span className="text-[10px]">●</span>}
              </button>
            ))}
          </div>
        )}

        {/* Animated News Ticker */}
        <div className="bg-white border border-black/15 text-[#1A1A1A] py-2 px-4 flex items-center gap-3 mt-3 select-none overflow-hidden relative">
          <style>{`
            @keyframes ticker-scroll {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }
            .animate-ticker-scroll {
              display: inline-flex;
              animation: ticker-scroll 360s linear infinite;
            }
            .animate-ticker-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="flex items-center gap-1.5 font-mono text-[8px] uppercase font-bold px-2 py-0.5 bg-[#8b0000] text-[#F2F0EA] shrink-0 z-10 select-none">
            <Radio className="w-3 h-3 animate-pulse" />
            <span>BULLETIN—TICKER</span>
          </div>
          <div className="flex-1 font-mono text-[10px] font-semibold overflow-hidden relative flex items-center h-5">
            <div className="animate-ticker-scroll whitespace-nowrap uppercase tracking-tight select-none">
              <span className="inline-block pr-12">
                {headlines.join(" ❖ ")} ❖ 
              </span>
              <span className="inline-block pr-12">
                {headlines.join(" ❖ ")} ❖ 
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

