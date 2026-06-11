import { useState } from "react";
import { PLAYOFF_GAMES } from "../data";
import { PlayoffGame } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function TeamHighlights() {
  const [activeTab, setActiveTab] = useState<"San Diego Rebellion" | "Texas Elite Spartans">("San Diego Rebellion");
  const [expandedRecapId, setExpandedRecapId] = useState<string | null>(null);

  const teamPlayoffGames = PLAYOFF_GAMES.filter(g => 
    g.team1.name.includes(activeTab.split(" ")[0]) || 
    g.team2.name.includes(activeTab.split(" ")[0])
  );

  const teamMetadata = {
    "San Diego Rebellion": {
      record: "7-1 total season",
      averagePointsFor: "25.0 in playoffs",
      averagePointsAgainst: "0.0 in playoffs",
      streakBadge: "2 Postseason Shutouts",
      playmakers: [
        { name: "Brittani Lusain", pos: "LB", metric: "61 combined tackles • 15.5 Tackles For Loss • Defensive captain with 2 FFs • WNFC Western Conference Defensive MVP" },
        { name: "Kesz Wesley", pos: "RB", metric: "489 Yards • 8 Touchdowns • Premier physical back • WNFC Western Conference Offensive MVP" },
        { name: "Danny Trainor", pos: "QB", metric: "449 Yards • 5 Passing TDs • Championship duel-threat star" },
        { name: "Harmine Christina Leo", pos: "DB", metric: "11 Passes Defended • 3 INTs • Lockdown secondary anchor" },
        { name: "Katie Claxton", pos: "LB", metric: "33 Tackles • 2 INTs (1 Return TD) • 1 Sack & 1 forced fumble • WNFC Western Conference Overall MVP" },
        { name: "Jocelyn Charette", pos: "K", metric: "3/5 FGs (Long of 44 Yards - WNFC record) • 21 PATs • clutch postseason leg" }
      ],
      keyFactText: "The Rebellion enters the championship game with back-to-back postseason shutouts against the LA Legends (30-0) and the Utah Falconz (20-0), outscoring opponents 50-0.",
    },
    "Texas Elite Spartans": {
      record: "8-0 undefeated season",
      averagePointsFor: "30.0 in playoffs",
      averagePointsAgainst: "6.0 in playoffs",
      streakBadge: "7 Straight Title Game Bids",
      playmakers: [
        { name: "Tara Thomas", pos: "RB", metric: "575 Yards • 10 total TDs • Explosive ground scoring leader • WNFC Eastern Conference Overall MVP" },
        { name: "Michelle Angel", pos: "QB", metric: "628 Yards • 13 Passing TDs • 99.6 postseason rating" },
        { name: "Whitney Palmer", pos: "DE", metric: "7.5 Sacks • 12.5 Tackles For Loss • League sack leader" },
        { name: "Maria Jackson", pos: "WR", metric: "189 Yards • 8 receiving TDs • WNFC Eastern Conference Offensive MVP" },
        { name: "Khadijah Ellison", pos: "DB", metric: "3 Interceptions • 1 Blocked Kick • Defensive dynamo" }
      ],
      keyFactText: "The Spartans enter the championship match undefeated at 8-0, boasting a scoring margin of 216-30 this season and securing their 7th consecutive IX Cup title berth.",
    }
  }[activeTab];

  const handleToggleRecap = (id: string) => {
    setExpandedRecapId(prev => (prev === id ? null : id));
  };

  return (
    <section id="journeys" className="bg-[#F2F0EA] border border-black/15 p-6 sm:p-10 mb-12 rounded-none">
      
      {/* Title block */}
      <div className="border-b border-black/10 pb-6 mb-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl italic font-black text-[#1A1A1A] mt-2 leading-tight">
          Finalists' Championship Paths
        </h2>
        <p className="font-mono text-[10px] uppercase tracking-wider text-gray-400 mt-2">
          TRACE THE ROAD TO THE IX CUP • WESTERN SHIELD VS EASTERN OFFENSE
        </p>
      </div>

      {/* Team Buttons Toggle (Minimalist grid tabs) */}
      <div className="flex border border-black/15 p-1 mb-8 max-w-xl mx-auto bg-white">
        <button
          onClick={() => {
            setActiveTab("San Diego Rebellion");
            setExpandedRecapId(null);
          }}
          className={`flex-1 py-3 text-[10px] font-mono uppercase tracking-[0.18em] transition-all cursor-pointer rounded-none font-bold ${
            activeTab === "San Diego Rebellion"
              ? "bg-black text-white"
              : "text-gray-600 hover:text-black hover:bg-black/5"
          }`}
        >
          [WEST] SD Rebellion
        </button>
        <button
          onClick={() => {
            setActiveTab("Texas Elite Spartans");
            setExpandedRecapId(null);
          }}
          className={`flex-1 py-3 text-[10px] font-mono uppercase tracking-[0.18em] transition-all cursor-pointer rounded-none font-bold ${
            activeTab === "Texas Elite Spartans"
              ? "bg-black text-white"
              : "text-gray-600 hover:text-black hover:bg-black/5"
          }`}
        >
          [EAST] TX Spartans
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* TEAM METRIC CARD */}
        <div className="lg:col-span-5 bg-white border border-black/10 rounded-none p-6 sm:p-8">
          <h3 className="font-display italic text-2xl sm:text-3xl font-black text-[#1A1A1A] leading-tight mb-4">
            {activeTab}
          </h3>

          <div className="space-y-4 my-6 font-mono text-[11px] uppercase tracking-wide text-[#1A1A1A]/80">
            <div className="border-b border-black/5 pb-2.5 flex justify-between items-center">
              <span className="font-sans opacity-50 font-bold">RECORD:</span>
              <span className="font-bold text-black">{teamMetadata.record}</span>
            </div>
            <div className="border-b border-black/5 pb-2.5 flex justify-between items-center">
              <span className="font-sans opacity-50 font-bold">PLAYOFF PPG:</span>
              <span className="font-bold text-black">{teamMetadata.averagePointsFor}</span>
            </div>
            <div className="border-b border-black/5 pb-2.5 flex justify-between items-center">
              <span className="font-sans opacity-50 font-bold">PLAYOFF PAPG:</span>
              <span className="font-bold text-[#8b0000]">{teamMetadata.averagePointsAgainst}</span>
            </div>
            <div className="border-b border-black/5 pb-2.5 flex justify-between items-center">
              <span className="font-sans opacity-50 font-bold">CONTENDER VIBE:</span>
              <span className="font-bold text-[#8b0000]">{teamMetadata.streakBadge}</span>
            </div>
          </div>

          <div className="border-t border-black/10 pt-4 mt-6">
            <span className="font-sans opacity-50 font-bold text-[11px] uppercase tracking-wide text-[#1A1A1A]/80 block mb-3.5">
              STANDOUT PLAYMAKERS:
            </span>
            <div className="space-y-4">
              {teamMetadata.playmakers.map((player) => (
                <div key={player.name} className="border-b border-black/5 pb-2.5 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center font-mono text-[10px] uppercase font-bold text-[#1A1A1A]">
                    <span>{player.name}</span>
                    <span className="text-[8px] bg-black/5 border border-black/10 px-1.5 py-0.5 text-gray-600 font-normal">
                      {player.pos}
                    </span>
                  </div>
                  <div className="font-serif italic text-xs text-gray-500 mt-1">
                    {player.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 mt-6 bg-[#F2F0EA]/60 border-l-2 border-[#8b0000] font-sans text-xs text-gray-700 leading-relaxed text-justify">
            <span className="font-mono text-[8px] uppercase tracking-widest text-gray-500 block mb-1.5 font-bold">CHAMPIONSHIP KEY FACT:</span>
            {teamMetadata.keyFactText}
          </div>
        </div>

        {/* TIMELINE PATH FLOW LIST */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="text-[10px] font-mono font-black text-gray-400 uppercase tracking-widest pb-1 mb-2">
            [JOURNEY TIMELINE ENTRIES]
          </div>

          {teamPlayoffGames.map((game, index) => {
            const isExpanded = expandedRecapId === game.id;
            return (
              <div 
                key={game.id} 
                className="bg-white border border-black/10 rounded-none hover:border-black/30 transition-all overflow-hidden"
              >
                <div 
                  onClick={() => handleToggleRecap(game.id)}
                  className="p-5 flex justify-between items-center gap-4 cursor-pointer hover:bg-black/5 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-black text-[#F2F0EA] flex items-center justify-center font-mono text-xs font-bold rounded-none">
                      {index + 1}
                    </div>
                    <div>
                      <span className="text-[8px] font-mono text-[#8b0000] uppercase font-black tracking-widest">
                        {game.round} MATCHUP
                      </span>
                      <h4 className="font-sans text-xs sm:text-sm font-black text-[#1A1A1A] mt-1 uppercase tracking-wide">
                        {game.team1.name} {game.score1} — {game.team2.name} {game.score2}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline font-mono text-[9px] text-[#1A1A1A] bg-[#F2F0EA] px-2.5 py-1 uppercase font-black uppercase text-center border border-black/10">
                      SUCCESS
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-[#1A1A1A]/70" /> : <ChevronDown className="w-4 h-4 text-[#1A1A1A]/70" />}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-black/10 bg-[#F2F0EA]/20"
                    >
                      <div className="p-6 sm:p-8 text-sm">
                        <div className="bg-black text-[#F2F0EA] px-3.5 py-1.5 inline-block text-[9px] font-mono uppercase font-black tracking-widest mb-4">
                          {game.recapSubtitle || "OFFICIAL PRESS COVERAGE"}
                        </div>
                        <p className="font-serif leading-relaxed text-gray-800 text-justify whitespace-pre-wrap text-sm">
                          {game.recapText}
                        </p>
                        
                        <div className="mt-6 pt-4 border-t border-dashed border-black/10 flex justify-end text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                          <span>Round #{index + 1} Archive</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

