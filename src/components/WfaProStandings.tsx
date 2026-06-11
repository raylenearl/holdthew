import React, { useState } from "react";
import { WFA_TEAMS } from "../data";
import { WfaTeam } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpDown, ChevronRight, RefreshCw, Layers, Sparkles, TrendingUp } from "lucide-react";

export default function WfaProStandings() {
  const [teams, setTeams] = useState<WfaTeam[]>(WFA_TEAMS);
  const [sortBy, setSortBy] = useState<"rank" | "pointsFor" | "pointsAgainst" | "pointDiff">("rank");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [expandedTeamRank, setExpandedTeamRank] = useState<number | null>(null);
  const [showMatchups, setShowMatchups] = useState(false);

  const handleSort = (field: "rank" | "pointsFor" | "pointsAgainst" | "pointDiff") => {
    const isAsc = sortBy === field && sortOrder === "asc";
    const nextOrder = isAsc ? "desc" : "asc";
    
    setSortBy(field);
    setSortOrder(nextOrder);

    const sorted = [...teams].sort((a, b) => {
      let valA = a[field];
      let valB = b[field];

      if (valA < valB) return nextOrder === "asc" ? -1 : 1;
      if (valA > valB) return nextOrder === "asc" ? 1 : -1;
      return 0;
    });

    setTeams(sorted);
  };

  const toggleTeamExpansion = (rank: number) => {
    setExpandedTeamRank(prev => (prev === rank ? null : rank));
  };

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = "none";
  };

  return (
    <section id="wfa" className="bg-white border border-black/10 p-6 sm:p-10 mb-12 rounded-none">
      
      {/* Title */}
      <div className="border-b border-black/10 pb-6 mb-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl italic font-black text-[#1A1A1A] mt-2 leading-tight">
          WFA PRO: Power Rankings
        </h2>
      </div>

      <div className="mb-8 flex flex-wrap justify-between items-center gap-4 border-b border-dashed border-black/10 pb-5">
        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => handleSort("rank")}
            className={`py-2 px-4 border text-[9px] font-mono uppercase tracking-wider rounded-none cursor-pointer transition-all flex items-center gap-1.5 ${
              sortBy === "rank"
                ? "bg-black text-[#F2F0EA] border-black font-bold"
                : "border-black/10 hover:bg-black/5 text-[#1A1A1A]/80"
            }`}
          >
            Rank {sortBy === "rank" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
          </button>

          <button
            onClick={() => handleSort("pointsFor")}
            className={`py-2 px-4 border text-[9px] font-mono uppercase tracking-wider rounded-none cursor-pointer transition-all flex items-center gap-1.5 ${
              sortBy === "pointsFor"
                ? "bg-black text-[#F2F0EA] border-black font-bold"
                : "border-black/10 hover:bg-black/5 text-[#1A1A1A]/80"
            }`}
          >
            Points For {sortBy === "pointsFor" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
          </button>
        </div>

        <button
          onClick={() => setShowMatchups(!showMatchups)}
          className={`py-2 px-4 font-mono text-[9px] tracking-widest uppercase rounded-none border border-black cursor-pointer flex items-center gap-1.5 transition-all ${
            showMatchups
              ? "bg-[#8b0000] text-white border-[#8b0000]"
              : "bg-black text-[#F2F0EA] hover:bg-black/90"
          }`}
        >
          {showMatchups ? "[STANDINGS VIEW]" : "[JUNE 13 MATCHUPS]"}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!showMatchups ? (
          <motion.div
            key="standings-table"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="border border-black/10 rounded-none overflow-hidden"
          >
            {/* Headers row */}
            <div className="grid grid-cols-12 bg-[#F2F0EA]/60 text-center font-mono text-[9px] font-black uppercase py-3 border-b border-black/10 text-gray-700 tracking-widest">
              <div className="col-span-2 cursor-pointer select-none py-1 flex items-center justify-center gap-1" onClick={() => handleSort("rank")}>
                RANK <ArrowUpDown className="w-3 h-3 text-gray-400" />
              </div>
              <div className="col-span-4 text-left pl-4 py-1">CONTENDER</div>
              <div className="col-span-2 cursor-pointer select-none py-1" onClick={() => handleSort("pointsFor")}>
                PTS FOR
              </div>
              <div className="col-span-2 cursor-pointer select-none py-1" onClick={() => handleSort("pointsAgainst")}>
                PTS AGST
              </div>
              <div className="col-span-2 cursor-pointer select-none py-1" onClick={() => handleSort("pointDiff")}>
                DIFF
              </div>
            </div>

            {/* Competitor rows */}
            <div className="divide-y divide-black/10 bg-white">
              {teams.map((team) => {
                const isExpanded = expandedTeamRank === team.rank;
                return (
                  <div key={team.name} className="flex flex-col">
                    <div
                      onClick={() => toggleTeamExpansion(team.rank)}
                      className="grid grid-cols-12 text-center text-xs py-4 items-center hover:bg-[#F2F0EA]/10 cursor-pointer transition-all select-none"
                    >
                      <div className="col-span-2 font-mono font-black text-sm text-[#1A1A1A]">
                        #{team.rank}
                      </div>

                      <div className="col-span-4 text-left pl-4 flex items-center gap-3">
                        <img
                          src={team.logoUrl}
                          alt=""
                          className="w-6 h-6 object-contain filter grayscale"
                          onError={handleLogoError}
                        />
                        <div>
                          <div className="font-serif italic font-black text-[#1A1A1A] text-[13px] leading-tight">
                            {team.name}
                          </div>
                          <div className="font-mono text-[8px] text-[#8b0000] font-black uppercase tracking-widest mt-0.5">
                            {team.record}
                          </div>
                        </div>
                      </div>

                      <div className="col-span-2 font-mono text-xs font-black text-[#1A1A1A]">
                        {team.pointsFor}
                      </div>

                      <div className="col-span-2 font-mono text-xs font-bold text-gray-400">
                        {team.pointsAgainst}
                      </div>

                      <div className={`col-span-2 font-mono text-xs font-black ${team.pointDiff > 0 ? "text-green-600" : "text-[#8b0000]"}`}>
                        +{team.pointDiff}
                      </div>
                    </div>

                    {/* EXPANDABLE COLLAPSED DESCRIPTION BLOCK */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="bg-[#F2F0EA]/20 border-t border-black/10 p-6 font-sans text-xs sm:text-sm text-gray-700 border-b border-black/5"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="md:col-span-2">
                              <h4 className="font-mono font-black text-[#1A1A1A] text-[9px] uppercase tracking-widest mb-2 flex items-center gap-1.5 text-[#8b0000]">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>CONTENDER BRIEF SYNOPSIS</span>
                              </h4>
                              <p className="font-serif text-sm italic text-gray-700 leading-relaxed text-justify mb-4">
                                {team.narrative}
                              </p>
                              <div className="bg-white border border-black/10 p-3.5 rounded-none font-mono text-[9px] text-gray-500 uppercase tracking-wider leading-relaxed">
                                <strong>KEY METRICS HIGHLIGHTS:</strong> {team.details}
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded-none border border-black/10 flex flex-col justify-between">
                              <div>
                                <div className="text-[8px] font-mono uppercase bg-[#1A1A1A] text-[#F2F0EA] font-black px-2 py-0.5 inline-block rounded-none tracking-widest mb-3">
                                  TACTICAL ANGLE
                                </div>
                                <p className="font-serif italic text-xs leading-relaxed text-gray-700">
                                  {team.statsSummary}
                                </p>
                              </div>

                              <div className="mt-4 pt-3 border-t border-dashed border-black/15 text-[8px] font-mono uppercase tracking-widest text-gray-400">
                                <span>NEXT MATCH:</span> <br />
                                <span className="text-[#8b0000] font-black block mt-1">{team.nextMatch}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="previews-cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teams
              .filter(t => t.nextMatch !== "Playoffs (TBD)")
              .map((team) => (
                <div key={team.name} className="bg-white border border-black/10 p-5 flex flex-col justify-between rounded-none shadow-none hover:border-black/30 transition-all">
                  <div>
                    <div className="flex justify-between items-center border-b border-black/5 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <img src={team.logoUrl} onError={handleLogoError} className="w-5 h-5 object-contain filter grayscale" />
                        <span className="font-serif italic font-black text-xs uppercase tracking-tight text-[#1A1A1A]">{team.name}</span>
                      </div>
                      <span className="font-mono text-[8px] bg-black text-[#F2F0EA] font-black px-2 py-0.5 tracking-widest rounded-none">
                        RANK #{team.rank}
                      </span>
                    </div>

                    <div className="space-y-3 font-mono text-[9px] uppercase tracking-wider">
                      <div className="text-gray-400">
                        🏆 UPCOMING STAGE:
                      </div>
                      <div className="font-black text-[10px] text-[#8b0000] bg-[#F2F0EA]/60 p-3 rounded-none border border-black/5">
                        {team.nextMatch}
                      </div>
                      <p className="font-serif text-xs normal-case text-gray-600 mt-2.5 italic leading-relaxed text-justify">
                        "{team.statsSummary}"
                      </p>
                    </div>
                  </div>


                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 pt-4 border-t border-black/10 text-[9px] font-mono text-gray-400 uppercase tracking-widest flex flex-wrap justify-between items-center gap-4">
        <span>* Power Rankings reflect the independent editorial analysis and choices of Hold The W.</span>
      </div>
    </section>
  );
}

