import React, { useState } from "react";
import { PLAYOFF_GAMES } from "../data";
import { PlayoffGame } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Award, ChevronRight, Share2, Heart } from "lucide-react";

export default function PlayoffBracket() {
  const [activeConference, setActiveConference] = useState<"Eastern" | "Western">("Eastern");
  const [selectedGame, setSelectedGame] = useState<PlayoffGame | null>(null);
  const [copiedGameId, setCopiedGameId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem("favorite_teams");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const conferenceGames = PLAYOFF_GAMES.filter(g => g.conference === activeConference);
  
  const semifinals = conferenceGames.filter(g => g.round === "Semifinal");
  const championship = conferenceGames.find(g => g.round === "Championship");

  const toggleFavorite = (teamName: string) => {
    let next;
    if (favorites.includes(teamName)) {
      next = favorites.filter(t => t !== teamName);
    } else {
      next = [...favorites, teamName];
    }
    setFavorites(next);
    localStorage.setItem("favorite_teams", JSON.stringify(next));
  };

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = "none";
  };

  return (
    <section id="bracket" className="bg-white border border-black/10 p-6 sm:p-10 mb-12 rounded-none">
      
      {/* Title & Section Header */}
      <div className="border-b border-black/10 pb-6 mb-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl italic font-black text-[#1A1A1A] mt-2 leading-tight">
          Interactive Playoff Bracket
        </h2>
        <p className="font-mono text-[10px] uppercase tracking-wider text-gray-400 mt-2">
          WNFC 2026 SEMIFINAL & CONFERENCE TITLE REPORTAGE • SELECT GAMES TO READ COVERAGE
        </p>
      </div>

      {/* Conference Toggles - Architectural layout */}
      <div className="flex border border-black/15 p-1 mb-8 max-w-md mx-auto bg-[#F2F0EA]/50">
        <button
          onClick={() => setActiveConference("Eastern")}
          className={`flex-1 py-2.5 text-[10px] font-mono uppercase tracking-[0.2em] transition-all cursor-pointer rounded-none ${
            activeConference === "Eastern"
              ? "bg-[#1A1A1A] text-white font-bold"
              : "text-gray-600 hover:text-[#1A1A1A] hover:bg-black/5"
          }`}
        >
          Eastern Conference
        </button>
        <button
          onClick={() => setActiveConference("Western")}
          className={`flex-1 py-2.5 text-[10px] font-mono uppercase tracking-[0.2em] transition-all cursor-pointer rounded-none ${
            activeConference === "Western"
              ? "bg-[#1A1A1A] text-white font-bold"
              : "text-gray-600 hover:text-[#1A1A1A] hover:bg-black/5"
          }`}
        >
          Western Conference
        </button>
      </div>

      {/* Responsive Visual Diagram block */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch bg-[#F2F0EA]/30 p-6 border border-black/10">
        
        {/* SEMIFINALS COLUMN */}
        <div className="flex flex-col justify-between">
          <div className="text-left font-mono text-[9px] font-black tracking-[0.2em] text-[#8b0000] uppercase mb-6 border-b border-black/10 pb-2">
            CONFERENCE SEMIFINALS
          </div>
          <div className="flex flex-col gap-8 flex-1 justify-center">
            {semifinals.map((game) => (
              <motion.div
                key={game.id}
                whileHover={{ y: -2 }}
                onClick={() => setSelectedGame(game)}
                className="bg-white p-5 border border-black/10 rounded-none hover:border-black cursor-pointer transition-all relative"
              >
                <div className="absolute top-4 right-4 text-[9px] font-mono tracking-wider text-gray-400 font-bold">
                  {game.date}
                </div>
                <div className="text-[9px] font-mono text-[#8b0000] uppercase tracking-widest font-black mb-3">
                  SEMIFINAL CLASH
                </div>
                <div className="flex flex-col gap-3">
                  {[game.team1, game.team2].map((team, idx) => {
                    const isWinner = game.winner === team.name;
                    const score = idx === 0 ? game.score1 : game.score2;
                    const isFav = favorites.includes(team.name);
                    return (
                      <div key={team.name} className="flex justify-between items-center text-xs">
                        <div className="flex items-center gap-2 flex-1">
                          <img
                            src={team.logoUrl}
                            alt=""
                            className="w-5 h-5 object-contain filter grayscale"
                            onError={handleLogoError}
                          />
                          <span className={`font-sans tracking-wide uppercase text-[11px] ${isWinner ? "font-black text-[#1A1A1A]" : "text-gray-400"}`}>
                            {team.name}
                          </span>
                          {isFav && <span className="text-[#8b0000] text-[9px]">❤️</span>}
                        </div>
                        <span className={`font-mono text-xs font-black ${isWinner ? "text-[#1A1A1A]" : "text-gray-400"}`}>
                          {score}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 pt-3 border-t border-dashed border-black/10 flex justify-between items-center text-[9px] text-gray-400 font-mono uppercase tracking-wider">
                  <span>Match Report</span>
                  <span className="text-black font-bold flex items-center hover:line-through">
                    READ REPORT <ChevronRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CONFERENCE CHAMPIONSHIP GAME COLUMN */}
        <div className="flex flex-col">
          <div className="text-left font-mono text-[9px] font-black tracking-[0.2em] text-[#8b0000] uppercase mb-6 border-b border-black/10 pb-2">
            CONFERENCE FINALS
          </div>
          {championship && (
            <motion.div
              whileHover={{ y: -2 }}
              onClick={() => setSelectedGame(championship)}
              className="bg-white p-6 border border-black/15 shadow-none rounded-none cursor-pointer transition-all relative flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[9px] font-mono text-black font-black uppercase tracking-[0.2em] flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-[#8b0000]" />
                    <span>CHAMPIONSHIP MATCH</span>
                  </div>
                  <span className="text-[9px] font-mono tracking-wider text-gray-400 font-bold">{championship.date}</span>
                </div>
                
                <div className="flex flex-col gap-4 my-6">
                  {[championship.team1, championship.team2].map((team, idx) => {
                    const isWinner = championship.winner === team.name;
                    const score = idx === 0 ? championship.score1 : championship.score2;
                    const isFav = favorites.includes(team.name);
                    return (
                      <div key={team.name} className="flex justify-between items-center">
                        <div className="flex items-center gap-2.5 flex-1">
                          <img
                            src={team.logoUrl}
                            alt=""
                            className="w-5 h-5 object-contain filter grayscale"
                            onError={handleLogoError}
                          />
                          <span className={`font-sans tracking-wide uppercase text-xs ${isWinner ? "font-black text-[#1A1A1A]" : "text-gray-400"}`}>
                            {team.name}
                          </span>
                          {isFav && <span className="text-[#8b0000] text-[9px]">❤️</span>}
                        </div>
                        <span className={`font-mono font-black ${isWinner ? "text-[#1A1A1A] text-base" : "text-gray-400 text-sm"}`}>
                          {score}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-black/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[9px] text-gray-500 font-mono uppercase tracking-widest">
                <div className="font-bold text-black">
                  {activeConference === "Eastern"
                    ? `🏆 2026 WNFC EASTERN CONFERENCE CHAMPIONS: ${championship.winner}`
                    : `🏆 2026 WNFC WESTERN CONFERENCE CHAMPIONS: ${championship.winner}`}
                </div>
                <button className="text-black font-black hover:line-through flex items-center">
                  COVERAGE <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* GAME RECAP modal overlay */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            onClick={() => setSelectedGame(null)}
          >
            <motion.div 
              initial={{ scale: 0.97, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F2F0EA] border border-black/25 rounded-none max-w-2xl w-full p-6 sm:p-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Header inside modal */}
              <div className="flex justify-between items-start border-b border-black/10 pb-4 mb-6">
                <div>
                  <span className="font-mono text-[9px] uppercase text-[#8b0000] font-black tracking-widest">
                    {selectedGame.conference} Conference • {selectedGame.round} Playoff Match
                  </span>
                  <h3 className="font-display italic text-2xl sm:text-3xl font-black text-[#1A1A1A] leading-tight mt-1">
                    {selectedGame.recapTitle || `${selectedGame.team1.name} vs ${selectedGame.team2.name}`}
                  </h3>
                  <p className="font-serif italic text-sm text-gray-500 mt-2">
                    {selectedGame.recapSubtitle}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedGame(null)}
                  className="px-3 py-1 text-[9px] font-mono border border-black hover:bg-black hover:text-[#F2F0EA] transition-all rounded-none font-bold"
                >
                  ESC
                </button>
              </div>

              {/* Score breakdown bar */}
              <div className="grid grid-cols-3 gap-2 bg-[#1A1A1A] text-[#F2F0EA] p-6 rounded-none text-center items-center mb-6">
                <div>
                  <img src={selectedGame.team1.logoUrl} onError={handleLogoError} className="w-10 h-10 mx-auto object-contain bg-white/10 p-1 mb-2 filter grayscale" />
                  <div className="font-sans font-bold text-xs uppercase tracking-wider">{selectedGame.team1.name}</div>
                  <button 
                    onClick={() => toggleFavorite(selectedGame.team1.name)} 
                    className="mt-2.5 flex items-center justify-center gap-1 text-[8px] text-gray-400 hover:text-white mx-auto font-mono uppercase bg-white/5 px-2 py-0.5 rounded-none"
                  >
                    <Heart className={`w-3 h-3 ${favorites.includes(selectedGame.team1.name) ? "text-[#8b0000] fill-[#8b0000]" : ""}`} />
                    <span>{favorites.includes(selectedGame.team1.name) ? "Faved" : "Fav"}</span>
                  </button>
                </div>
                <div>
                  <span className="text-[8px] font-mono text-gray-400 uppercase tracking-[0.2em]">FINAL SCORE</span>
                  <div className="text-2xl sm:text-4xl font-mono font-black py-1">
                    {selectedGame.score1} : {selectedGame.score2}
                  </div>
                  <div className="text-[9px] font-mono text-[#8b0000] font-black">{selectedGame.date}</div>
                </div>
                <div>
                  <img src={selectedGame.team2.logoUrl} onError={handleLogoError} className="w-10 h-10 mx-auto object-contain bg-white/10 p-1 mb-2 filter grayscale" />
                  <div className="font-sans font-bold text-xs uppercase tracking-wider">{selectedGame.team2.name}</div>
                  <button 
                    onClick={() => toggleFavorite(selectedGame.team2.name)} 
                    className="mt-2.5 flex items-center justify-center gap-1 text-[8px] text-gray-400 hover:text-white mx-auto font-mono uppercase bg-white/5 px-2 py-0.5 rounded-none"
                  >
                    <Heart className={`w-3 h-3 ${favorites.includes(selectedGame.team2.name) ? "text-[#8b0000] fill-[#8b0000]" : ""}`} />
                    <span>{favorites.includes(selectedGame.team2.name) ? "Faved" : "Fav"}</span>
                  </button>
                </div>
              </div>

              {/* Recap Narrative Text */}
              <div className="font-serif text-sm sm:text-base leading-relaxed text-gray-800 space-y-4 max-h-[35vh] overflow-y-auto pr-3 border-l border-black/10 pl-6 text-justify">
                <p>{selectedGame.recapText || "A comprehensive defensive battle characterized by high physical intensity."}</p>
              </div>

              {/* Modal controls and bookmarks */}
              <div className="mt-8 pt-4 border-t border-black/10 flex flex-wrap justify-between items-center gap-4">
                <div className="text-[9px] font-mono uppercase text-gray-400 tracking-wider">
                  ✒️ Coverage by: Hold The W Press Desk
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(`WNFC Issue #28 Recap: ${selectedGame.recapTitle}`);
                      setCopiedGameId(selectedGame.id);
                      setTimeout(() => setCopiedGameId(null), 2000);
                    }}
                    className="py-1.5 px-3 border border-black/20 text-[#1A1A1A] hover:bg-black/5 flex items-center gap-1.5 text-[9px] font-mono rounded-none cursor-pointer uppercase transition-all"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{copiedGameId === selectedGame.id ? "Copied ✓" : "Copy Link"}</span>
                  </button>
                  <button 
                    onClick={() => setSelectedGame(null)}
                    className="py-1.5 px-5 bg-black hover:bg-black/90 text-[#F2F0EA] text-[9px] font-mono uppercase px-5 rounded-none cursor-pointer transition-all font-bold"
                  >
                    Close Report
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

