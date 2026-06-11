import React, { useState, useEffect } from "react";
import Masthead from "./components/Masthead";
import PlayoffBracket from "./components/PlayoffBracket";
import TeamHighlights from "./components/TeamHighlights";
import ChampionshipMatchup from "./components/ChampionshipMatchup";
import MvpCandidates from "./components/MvpCandidates";
import WfaProStandings from "./components/WfaProStandings";
import { Mail, Send, Check, Heart, HelpCircle, Newspaper, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import coverPhoto from "./assets/images/cover.jpg";

export default function App() {
  const [activeSection, setActiveSection] = useState("bracket");
  
  // Editorial Feedback State
  const [feedback, setFeedback] = useState("");
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [feedbackName, setFeedbackName] = useState("");
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);

  // Smooth scroll helper
  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for sticky headers if any, or standard visual center
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Track active section during scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["bracket", "journeys", "preview", "mvp", "wfa"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    setIsFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedback("");
      setFeedbackEmail("");
      setFeedbackName("");
      setIsFeedbackSubmitted(false);
    }, 4000);
  };

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = "none";
  };

  return (
    <div className="min-h-screen bg-[#F2F0EA] text-[#1A1A1A] selection:bg-[#8b0000] selection:text-white pb-16 font-sans relative">
      {/* Structural Gallery Border */}
      <div className="hidden lg:block absolute inset-0 border-[12px] border-white pointer-events-none z-40"></div>
      <div className="hidden lg:block fixed inset-0 border-[12px] border-white pointer-events-none z-50"></div>

      {/* Sticky Top Masthead & Title */}
      <Masthead 
        onNavigate={handleScrollToSection} 
        activeSection={activeSection} 
      />

      {/* Two-Column Artistic Grid Layout */}
      <div className="max-w-6xl mx-auto flex">
        
        {/* Curated Sidebar Rail */}
        <aside className="hidden lg:flex w-[80px] border-r border-black/10 flex-col items-center justify-between py-12 sticky top-[160px] h-[calc(100vh-200px)] shrink-0 select-none">
          <div className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-[#1A1A1A]/40">HOLD THE W</div>
          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          <div className="[writing-mode:vertical-lr] text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-[#1A1A1A]/40">EST. 2024</div>
        </aside>

        {/* Primary Content Stream */}
        <main className="flex-1 px-4 lg:px-12 py-8 overflow-hidden">
          
          {/* EDITORIAL COVER STORY BLOCK */}
          <section className="bg-white border border-black/10 rounded-none overflow-hidden mb-12 grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Article Poster Image inside */}
            <div className="lg:col-span-7 bg-[#1A1A1A] relative group overflow-hidden flex items-center justify-center min-h-[250px] sm:min-h-[440px]">
              <img 
                src={coverPhoto} 
                alt="WNFC Championship Matchup: Rebellion vs. Spartans" 
                className="w-full h-full object-cover max-h-[500px]"
                referrerPolicy="no-referrer"
                onError={handleLogoError}
              />
              {/* Cover Story Badge at Top-Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="font-mono text-[9px] text-[#F2F0EA] font-bold bg-[#8b0000] px-3 py-1 inline-block rounded-none uppercase tracking-widest shadow">
                  COVER STORY
                </span>
              </div>
              {/* Subtle visual gradient fade at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Quick Lead editorial column */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold text-[#8b0000] uppercase mb-4 tracking-wider">
                  <Newspaper className="w-3.5 h-3.5" />
                  <span>Issue 28 Cover Analysis</span>
                </div>
                <h3 className="font-display text-[#1A1A1A] text-xl sm:text-2xl italic font-black pb-3 mb-4 border-b border-black/10 uppercase tracking-tight leading-tight">
                  THE ROAD TO GLORY: SAN DIEGO AND TEXAS FACE OFF FOR THE IX CUP
                </h3>
                <p className="font-serif text-[#1A1A1A] text-sm leading-relaxed text-justify">
                  "This year's postseason has demonstrated the relentless maturation of the tactical game in women's tackle football. We are no longer watching simple offenses; we are observing masterfully orchestrated defenses. San Diego enters the arena with 120 minutes of postseason play without giving away a single point. 
                  <br /><br />
                  Yet, the Texas Elite Spartans have maintained an absolute 8-0 perfection all season, and they play with the experience of holding 5 previous championship banners. It's the ultimate immovable shield vs the most cohesive squad in the country."
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/10 flex justify-between items-center text-[10px] font-mono uppercase text-gray-500">
                <span>Hold The W Editorial Board</span>
                <span className="font-black underline text-[#8b0000] cursor-pointer hover:line-through" onClick={() => handleScrollToSection("preview")}>
                  PREDICTION POLL →
                </span>
              </div>
            </div>
          </section>

          {/* BRACKET WRAPPER */}
          <div id="bracket" className="mb-12 scroll-mt-24">
            <PlayoffBracket />
          </div>

          {/* TEAM HIGH-VALUE TIMELINES */}
          <div id="journeys" className="mb-12 scroll-mt-24">
            <TeamHighlights />
          </div>

          {/* COUNTDOWN & POLL SHOWDOWN */}
          <div id="preview" className="mb-12 scroll-mt-24">
            <ChampionshipMatchup />
          </div>

          {/* SEASON MVP SELECTIONS */}
          <div id="mvp" className="mb-12 scroll-mt-24">
            <MvpCandidates />
          </div>

          {/* WFA PRO SECTIONS */}
          <div id="wfa" className="mb-12 scroll-mt-24">
            <WfaProStandings />
          </div>

          {/* WRITE TO THE EDITOR: EXTRA GUEST ENGAGEMENT */}
          <section className="bg-white border border-black/10 rounded-none p-6 sm:p-10 mb-12">
            <div className="border-b border-black/10 pb-4 mb-6 flex items-center justify-between">
              <h3 className="font-display italic font-black text-[#1A1A1A] text-xl sm:text-3xl tracking-tight flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#8b0000]" />
                <span>Write to the Editorial Desk.</span>
              </h3>
            </div>

            <p className="font-serif text-sm text-gray-600 leading-relaxed mb-8">
              Please submit any questions, comments, corrections, or suggestions using our editorial dispatch form below. Our publishing staff reviews all correspondence.
            </p>

            <form onSubmit={handleFeedbackSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[9px] font-mono uppercase font-bold text-gray-500 mb-1.5 tracking-wider">
                    Your Signature / Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={feedbackName}
                    onChange={(e) => setFeedbackName(e.target.value)}
                    placeholder="e.g. Coach Jackson, Cleveland"
                    className="w-full bg-[#F2F0EA]/40 border border-black/10 rounded-none p-3 text-xs sm:text-sm focus:outline-none focus:border-black focus:bg-white transition-all font-mono uppercase tracking-tight text-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label className="block text-[9px] font-mono uppercase font-bold text-gray-500 mb-1.5 tracking-wider">
                    Telegraph Email (Optional):
                  </label>
                  <input
                    type="email"
                    value={feedbackEmail}
                    onChange={(e) => setFeedbackEmail(e.target.value)}
                    placeholder="e.g. reader@example.com"
                    className="w-full bg-[#F2F0EA]/40 border border-[#A1A1A1]/30 rounded-none p-3 text-xs sm:text-sm focus:outline-none focus:border-black focus:bg-white transition-all font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-mono uppercase font-bold text-gray-500 mb-1.5 tracking-wider">
                  Your Letter / Feedback:
                </label>
                <textarea
                  required
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={4}
                  placeholder="Write your constructive critique, encouragement, or hot take on the IX Cup..."
                  className="w-full bg-[#F2F0EA]/40 border border-black/10 rounded-none p-3 text-xs sm:text-sm focus:outline-none focus:border-black focus:bg-white transition-all font-serif italic text-[#1A1A1A]"
                ></textarea>
              </div>

              <div className="flex justify-end pt-2">
                <AnimatePresence mode="wait">
                  {isFeedbackSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-black text-[#F2F0EA] font-mono text-[10px] uppercase tracking-widest font-bold py-3 px-8 rounded-none flex items-center gap-1.5"
                    >
                      <Check className="w-4 h-4 text-green-400" />
                      <span>TELEGRAPH DELIVERED</span>
                    </motion.div>
                  ) : (
                    <button
                      type="submit"
                      className="bg-black hover:bg-black/90 text-[#F2F0EA] text-[10px] font-mono uppercase tracking-[0.2em] font-bold py-3.5 px-8 rounded-none cursor-pointer transition-all flex items-center gap-2 select-none border border-black"
                    >
                      <Send className="w-3.5 h-3.5 text-[#F2F0EA]/70" />
                      <span>Transmit Letter</span>
                    </button>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </section>

          {/* TECHNICAL FOOTER BAR */}
          <footer className="mt-16 border-t border-black/15 pt-8 text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]/60 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="space-y-1">
              <p className="font-black text-[#1A1A1A]">Hold The W • Your Independent Source for Women's Football • © 2024-2026 • <a href="https://holdthew.com/issue-27.html" target="_blank" rel="noopener noreferrer" className="hover:text-[#8b0000] hover:underline font-bold">Previous Issue</a></p>
            </div>
            <div className="flex items-center gap-4 text-[9px] font-mono tracking-widest">
              <span className="opacity-40 uppercase">Socials:</span>
              <a href="https://instagram.com/holdthew" target="_blank" rel="noopener noreferrer" className="hover:text-[#8b0000] hover:underline uppercase font-bold">Instagram</a>
              <span>•</span>
              <a href="https://facebook.com/holdthew" target="_blank" rel="noopener noreferrer" className="hover:text-[#8b0000] hover:underline uppercase font-bold">Facebook</a>
              <span>•</span>
              <a href="https://www.youtube.com/@holdthew" target="_blank" rel="noopener noreferrer" className="hover:text-[#8b0000] hover:underline uppercase font-bold">YouTube</a>
            </div>
          </footer>

        </main>
      </div>
    </div>
  );
}
