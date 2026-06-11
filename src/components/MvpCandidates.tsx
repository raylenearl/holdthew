import React, { useState } from "react";
import { MVP_CANDIDATES } from "../data";
import { MvpCandidate } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Search, Award, Heart } from "lucide-react";

export default function MvpCandidates() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<"All" | "Offense" | "Defense">("All");
  
  const [mvpVotes, setMvpVotes] = useState<{ [id: string]: number }>(() => {
    try {
      const storedVal = localStorage.getItem("fan_mvp_votes_counts_v2");
      if (storedVal) return JSON.parse(storedVal);
    } catch (_) {}
    return {
      "mvp-1": 0, // Leilani Caamal
      "mvp-2": 0, // Michelle Angel
      "mvp-3": 0, // Maria Fautali
      "mvp-4": 0, // Kendra Gabriel
      "mvp-5": 0, // Whitney Palmer
      "mvp-6": 0, // Kassidy Snowden
    };
  });

  const [hasVotedForMvp, setHasVotedForMvp] = useState<string | null>(() => {
    try {
      return localStorage.getItem("user_typed_mvp_voted_id");
    } catch {
      return null;
    }
  });

  const castMvpVote = (id: string) => {
    if (hasVotedForMvp) return;

    const nextVotes = { ...mvpVotes, [id]: mvpVotes[id] + 1 };
    setMvpVotes(nextVotes);
    setHasVotedForMvp(id);

    try {
      localStorage.setItem("fan_mvp_votes_counts_v2", JSON.stringify(nextVotes));
      localStorage.setItem("user_typed_mvp_voted_id", id);
    } catch (_) {}
  };

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = "none";
  };

  const filteredCandidates = MVP_CANDIDATES.filter((candidate) => {
    const matchesSearch = 
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.position.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      categoryFilter === "All" || candidate.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="mvp" className="bg-[#F2F0EA]/70 border border-black/15 p-6 sm:p-10 mb-12 rounded-none">
      
      {/* Header */}
      <div className="border-b border-black/10 pb-6 mb-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl italic font-black text-[#1A1A1A] mt-2 leading-tight">
          Season MVP Contenders
        </h2>
        <p className="font-mono text-[10px] uppercase tracking-wider text-gray-400 mt-2">
          THE SUPERSTARS WHO REDEFINED THE STANDARD OF CAMPAIGN PLAY THROUGH 2026
        </p>
      </div>

      {/* FILTER & SEARCH CONTROL BLOCK */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-8 bg-white border border-black/10 p-4 rounded-none">
        
        {/* Category Toggles */}
        <div className="flex border border-black/10 p-1 rounded-none bg-[#F2F0EA]/40 grow max-w-lg">
          {["All", "Offense", "Defense"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat as any)}
              className={`flex-1 py-1.5 text-[9px] font-mono uppercase tracking-widest rounded-none cursor-pointer transition-all ${
                categoryFilter === cat
                  ? "bg-black text-white font-bold"
                  : "text-gray-500 hover:text-black hover:bg-black/5"
              }`}
            >
              {cat === "All" ? "ALL STARS" : cat === "Offense" ? "OFFENSE" : "DEFENSE"}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search candidates, positions, team names..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F2F0EA]/30 border border-black/10 rounded-none pl-10 pr-4 py-2.5 text-[10px] font-mono focus:outline-none focus:border-black focus:bg-white uppercase tracking-wider"
          />
        </div>
      </div>

      {/* MVP CANDIDATE CARDS GRID */}
      {filteredCandidates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCandidates.map((candidate) => {
            const hasVotedThis = hasVotedForMvp === candidate.id;
            const canVote = !hasVotedForMvp;
            const currentVotes = mvpVotes[candidate.id] || 0;

            return (
              <motion.div
                layout
                key={candidate.id}
                className="bg-white border border-black/10 rounded-none flex flex-col justify-between overflow-hidden hover:border-black/30 transition-all relative"
              >
                {/* Visual Category ribbon */}
                <div className="absolute top-4 right-4 text-[8px] font-mono font-black tracking-widest uppercase bg-black text-[#F2F0EA] px-2 py-0.5 rounded-none">
                  {candidate.position}
                </div>

                <div className="p-6">
                  {/* Card Header with image details */}
                  <div className="flex items-center gap-3.5 mb-5 border-b border-black/5 pb-4">
                    <img
                      src={candidate.logoUrl}
                      alt=""
                      className="w-12 h-12 object-contain bg-[#F2F0EA]/40 p-2 border border-black/10 rounded-none filter grayscale"
                      onError={handleLogoError}
                    />
                    <div>
                      <h3 className="font-display italic text-lg sm:text-xl font-black text-[#1A1A1A] leading-tight">
                        {candidate.name}
                      </h3>
                      <p className="font-mono text-[9px] text-[#8b0000] font-bold uppercase tracking-wider mt-0.5">
                        {candidate.team}
                      </p>
                    </div>
                  </div>

                  {/* Visual Statistical Scale instead of strings */}
                  <div className="space-y-3.5 bg-[#F2F0EA]/30 p-4 border border-black/10 rounded-none mb-5 font-mono text-[9px]">
                    <div className="font-mono font-black text-[#8b0000] uppercase tracking-[0.15em] border-b border-black/5 pb-1.5 mb-2.5">
                      METRIC ASSESSMENT SCALES
                    </div>
                    {candidate.keyStats.map((stat) => (
                      <div key={stat.label}>
                        <div className="flex justify-between uppercase tracking-wider text-gray-600 font-semibold mb-1">
                          <span>{stat.label}</span>
                          <span className="font-bold text-[#1A1A1A]">{stat.value}</span>
                        </div>
                        <div className="w-full bg-[#D9D7D0] h-1.5 rounded-none overflow-hidden">
                          <div 
                            className={`h-full ${candidate.category === "Offense" ? "bg-amber-600" : "bg-black"}`}
                            style={{ width: `${stat.percentOfMax}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Narrative Bio paragraph */}
                  <p className="font-serif text-sm text-gray-700 leading-relaxed max-h-32 overflow-y-auto pr-1 text-justify">
                    {candidate.narrative}
                  </p>
                </div>

                {/* Voter interactive submission footer */}
                <div className="bg-[#F2F0EA]/40 border-t border-black/10 p-4 flex items-center justify-between">
                  <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                    <span>👥 <strong>{currentVotes}</strong> BALLOTS CAST</span>
                  </div>

                  <button
                    disabled={!canVote}
                    onClick={() => castMvpVote(candidate.id)}
                    className={`py-1.5 px-4 font-mono font-black text-[9px] tracking-widest uppercase transition-all rounded-none ${
                      hasVotedThis
                        ? "bg-[#8b0000] text-white"
                        : canVote
                        ? "bg-black hover:bg-black/90 text-[#F2F0EA] cursor-pointer"
                        : "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
                    }`}
                  >
                    <span>{hasVotedThis ? "VOTED ✓" : "CAST VOTE"}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="text-center bg-white border border-black/15 rounded-none p-12">
          <p className="font-serif italic text-gray-500 text-sm">
            No MVP Candidates found matching "{searchQuery}" under "{categoryFilter}" category.
          </p>
          <button 
            onClick={() => {
              setSearchQuery("");
              setCategoryFilter("All");
            }}
            className="mt-4 py-2 px-5 font-mono text-[9px] font-bold bg-black text-[#F2F0EA] tracking-widest rounded-none hover:bg-black/80 transition-colors uppercase"
          >
            Clear Active Filters
          </button>
        </div>
      )}

      {/* MVP rules callout */}
      <div className="mt-8 p-4 bg-white border border-black/10 rounded-none text-[10px] font-mono text-gray-600 leading-relaxed uppercase tracking-wider flex items-start gap-3">
        <Award className="w-4 h-4 text-[#8b0000] shrink-0 mt-0.5" />
        <div>
          <strong>Fan Ballot Predictor:</strong> Postseason MVP fan predictions / votes are just for fun and have no bearing on the official league awards.
        </div>
      </div>
    </section>
  );
}

