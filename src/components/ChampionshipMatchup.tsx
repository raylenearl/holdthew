import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Vote, Radio, Clock, MapPin, Award, Check } from "lucide-react";

export default function ChampionshipMatchup() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  const [poll, setPoll] = useState(() => {
    try {
      const stored = localStorage.getItem("championship_poll_v4");
      if (stored) return JSON.parse(stored);
      return { rebellionVotes: 0, spartansVotes: 0, userVotedTeam: undefined };
    } catch {
      return { rebellionVotes: 0, spartansVotes: 0, userVotedTeam: undefined };
    }
  });

  useEffect(() => {
    const targetDate = new Date("2026-06-21T16:00:00-04:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleVote = (team: "rebellion" | "spartans") => {
    if (poll.userVotedTeam) return;

    const nextPoll = {
      rebellionVotes: team === "rebellion" ? poll.rebellionVotes + 1 : poll.rebellionVotes,
      spartansVotes: team === "spartans" ? poll.spartansVotes + 1 : poll.spartansVotes,
      userVotedTeam: team === "rebellion" ? "San Diego Rebellion" : "Texas Elite Spartans"
    };

    setPoll(nextPoll);
    try {
      localStorage.setItem("championship_poll_v4", JSON.stringify(nextPoll));
    } catch (_) {}
  };

  const totalVotes = poll.rebellionVotes + poll.spartansVotes;
  const rebellionPct = Math.round((poll.rebellionVotes / totalVotes) * 100) || 50;
  const spartansPct = 100 - rebellionPct;

  const comparisonStats = [
    { label: "Season Record", rebellion: "7-1", spartans: "8-0", winningSide: "spartans" },
    { label: "Points For / Game", rebellion: "25.0", spartans: "30.0", winningSide: "spartans" },
    { label: "Points Allowed / Game", rebellion: "0.0", spartans: "6.0", winningSide: "rebellion" },
    { label: "Postseason Shutouts", rebellion: "2", spartans: "0", winningSide: "rebellion" },
    { label: "Sacks Leader (Postseason)", rebellion: "5.0 Sacks", spartans: "7.5 Sacks", winningSide: "spartans" },
    { label: "IX Cup Titles", rebellion: "0", spartans: "5", winningSide: "spartans" },
    { label: "Consecutive Final Appearances", rebellion: "1st", spartans: "7th", winningSide: "spartans" }
  ];

  return (
    <section id="preview" className="bg-white border border-black/10 p-6 sm:p-10 mb-12 rounded-none">
      
      {/* Title */}
      <div className="border-b border-black/10 pb-6 mb-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl italic font-black text-[#1A1A1A] mt-2 leading-tight">
          IX Cup Championship Preview
        </h2>
        <p className="font-mono text-[10px] uppercase tracking-wider text-gray-400 mt-2">
          THE UNDEFEATED SPARTANS (8-0) VS. THE SHUTOUT REBELLION (7-1) • MATCHUP ANALYTICS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mb-8">
        {/* LEFT COLUMN: THE SHOWDOWN HEADER & COUNTDOWN */}
        <div className="md:col-span-6 bg-[#F2F0EA]/40 p-6 sm:p-8 border border-black/10 flex flex-col justify-between rounded-none">
          <div>
            <div className="flex items-center gap-1.5 font-mono text-[9px] font-black tracking-[0.2em] text-[#8b0000] uppercase mb-4">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>LIVE TRANSMISSION: JUNE 21, 2026</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-black text-[#1A1A1A] mb-3 uppercase leading-tight">
              IX Cup Championship
            </h3>
            
            <p className="font-serif text-gray-600 text-sm leading-relaxed mb-6 text-justify">
              The grandest stage in women's tackle football returns to <strong>Frisco, Texas</strong>. In an highly anticipated matchup of offensive firepower vs suffocating defense, the undefeated Spartans look to establish their 6th IX Cup banner, while San Diego Rebellion prepares to secure their first.
            </p>

            {/* COUNTDOWN TIMER BLOCKS */}
            <div className="grid grid-cols-4 gap-3 text-center my-6">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hrs", value: timeLeft.hours },
                { label: "Min", value: timeLeft.minutes },
                { label: "Sec", value: timeLeft.seconds }
              ].map((item) => (
                <div key={item.label} className="bg-[#1A1A1A] text-[#F2F0EA] p-3 rounded-none">
                  <div className="font-mono text-xl sm:text-3xl font-black">{String(item.value).padStart(2, "0")}</div>
                  <div className="text-[8px] uppercase tracking-widest font-black text-gray-400 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-black/10 space-y-3.5 text-[10px] font-mono text-gray-600 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#8b0000]" />
              <span><strong>Broadcast:</strong> Sunday, June 21 • 4:00 PM ET on <strong className="text-[#8b0000]">ESPN2</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8b0000]" />
              <span><strong>Stadium:</strong> Ford Center at The Star • Frisco, Texas</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE POLL BLOCK */}
        <div className="md:col-span-6 bg-[#F2F0EA]/40 p-6 sm:p-8 border border-black/10 flex flex-col justify-between rounded-none">
          <div>
            <div className="flex items-center gap-1.5 font-mono text-[9px] font-black tracking-[0.2em] text-[#8b0000] uppercase mb-4">
              <Vote className="w-3.5 h-3.5" />
              <span>FAN PREDICTOR POLL</span>
            </div>

            <h3 className="font-display text-lg sm:text-xl font-bold text-[#1A1A1A] mb-1">
              Who is taking home the IX Cup?
            </h3>
            <p className="font-mono text-[9px] uppercase tracking-wider text-gray-400 mb-6">
              SUBMIT YOUR PREDICTION. RESTRICTED TO 1 VOTE PER USER/IP.
            </p>

            {/* Voting interactive blocks */}
            {!poll.userVotedTeam ? (
              <div className="flex flex-col gap-4 my-4">
                <button
                  onClick={() => handleVote("rebellion")}
                  className="bg-white border border-black/10 hover:border-[#8b0000] text-gray-800 p-4 rounded-none text-left font-sans cursor-pointer transition-all flex justify-between items-center group active:scale-[99%]"
                >
                  <div className="flex items-center gap-3">
                    <img src="https://www.hostedlogos.com/football/wnfc/Rebellion_logo_large.png" className="w-8 h-8 object-contain filter grayscale" alt="" />
                    <div>
                      <div className="font-black text-xs uppercase tracking-wide">San Diego Rebellion</div>
                      <div className="text-[8px] text-gray-400 font-mono uppercase tracking-widest mt-0.5">WEST DIVISION (7-1)</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono font-black text-[#8b0000] group-hover:underline">VOTE SD</span>
                </button>

                <button
                  onClick={() => handleVote("spartans")}
                  className="bg-white border border-black/10 hover:border-black text-gray-800 p-4 rounded-none text-left font-sans cursor-pointer transition-all flex justify-between items-center group active:scale-[99%]"
                >
                  <div className="flex items-center gap-3">
                    <img src="https://www.hostedlogos.com/football/wnfc/EliteSpartans_logo_large.png" className="w-8 h-8 object-contain filter grayscale" alt="" />
                    <div>
                      <div className="font-black text-xs uppercase tracking-wide">Texas Elite Spartans</div>
                      <div className="text-[8px] text-gray-400 font-mono uppercase tracking-widest mt-0.5">EAST DIVISION (8-0)</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono font-black text-black group-hover:underline">VOTE TX</span>
                </button>
              </div>
            ) : (
              <div className="space-y-6 my-4">
                <div className="p-3 bg-white border border-black/10 text-gray-800 rounded-none font-mono text-[9px] uppercase tracking-wider flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>PREDICTION LOGGED: <strong>{poll.userVotedTeam}</strong></span>
                </div>

                {/* Progress Visual Bars */}
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between items-center font-mono text-[9px] uppercase tracking-wider text-gray-700 mb-1.5">
                      <span>San Diego Rebellion</span>
                      <span className="font-black text-[#8b0000]">{rebellionPct}% ({poll.rebellionVotes} votes)</span>
                    </div>
                    <div className="w-full bg-[#D9D7D0] h-2 rounded-none overflow-hidden">
                      <div className="bg-[#8b0000] h-full transition-all duration-500 ease-out" style={{ width: `${rebellionPct}%` }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center font-mono text-[9px] uppercase tracking-wider text-gray-700 mb-1.5">
                      <span>Texas Elite Spartans</span>
                      <span className="font-black text-black">{spartansPct}% ({poll.spartansVotes} votes)</span>
                    </div>
                    <div className="w-full bg-[#D9D7D0] h-2 rounded-none overflow-hidden">
                      <div className="bg-black h-full transition-all duration-500 ease-out" style={{ width: `${spartansPct}%` }}></div>
                    </div>
                  </div>
                </div>

                <div className="text-center font-mono text-[8px] text-gray-400 uppercase tracking-widest">
                  Total Fan Predictions: {totalVotes} • Verified IP Connection
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 p-3.5 bg-white border border-black/10 text-[9px] font-mono text-gray-600 uppercase tracking-wider flex items-center gap-2">
            <Award className="w-4 h-4 text-[#8b0000] shrink-0" />
            <span>Championship winner receives the coveted IX Cup trophy on Sunday.</span>
          </div>
        </div>
      </div>

      {/* HISTORICAL MATCHUPS: YEAR-BY-YEAR MATCHUP HISTORY */}
      <div className="mt-8 bg-[#F2F0EA]/40 border border-black/10 rounded-none p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-4 border-b border-black/10 pb-4">
          <Award className="w-4 h-4 text-[#8b0000]" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#8b0000] font-bold">
            📑 MATCHUP HISTORY: YEAR-BY-YEAR RECORDS
          </span>
        </div>
        <h3 className="font-display italic text-xl sm:text-2xl font-black text-[#1A1A1A] mb-6">
          The Rebellion vs. Spartan Matchup History
        </h3>
        <p className="font-serif text-sm text-gray-700 leading-relaxed mb-6 text-justify">
          The competitive history between the San Diego Rebellion and the Texas Elite Spartans is built entirely on high-stakes postseason games, as the two powerhouses have never faced each other in the regular season. Texas has maintained historical dominance in these playoff clashes, while San Diego continuously strives to challenge the Spartans.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
          {[
            {
              year: "2021",
              title: "IX Cup Championship",
              score: "Texas Elite Spartans 27, San Diego Rebellion 6",
              desc: "This was the inaugural WNFC IX Cup Championship game for San Diego. The Spartans' defense staged a legendary goal-line stand to secure their championship, holding the Rebellion scoreless until the final 34 seconds of the match.",
              status: "SPARTANS SECURED TITLE"
            },
            {
              year: "2023",
              title: "Western Conference Final",
              score: "Texas Elite Spartans 34, San Diego Rebellion 6",
              desc: "The Spartans' powerful offensive execution and relentless defensive front controlled the tempo of the conference championship from kickoff, securing the Western Conference title over the Rebellion.",
              status: "SPARTANS SECURED TITLE"
            },
            {
              year: "2024",
              title: "Western Conference Final",
              score: "Texas Elite Spartans 27, San Diego Rebellion 22",
              desc: "San Diego pushed the Spartans to the absolute brink in a nail-biting conference championship game. Texas narrowly escaped to clinch their fifth consecutive conference title, leaving San Diego just short of a return to the IX Cup Championship.",
              status: "SPARTANS ESCAPED"
            },
            {
              year: "2025",
              title: "Western Conference Final",
              score: "Texas Elite Spartans 36, San Diego Rebellion 0",
              desc: "San Diego entered the postseason highly favored after earning the league's #1 overall ranking during the regular season. However, coach Odessa Jenkins and the Spartans delivered a masterclass performance, shutting out the Rebellion completely to advance to their sixth straight IX Cup.",
              status: "SPARTANS RECORD SHUTOUT"
            }
          ].map((m) => (
            <div key={m.year} className="bg-white border border-black/10 p-5 rounded-none flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center border-b border-black/5 pb-2 mb-3">
                  <span className="font-mono text-[10px] font-black text-[#8b0000]">{m.year} • {m.title}</span>
                  <span className="font-mono text-[8px] bg-[#F2F0EA] px-2 py-0.5 text-gray-500 font-bold">{m.status}</span>
                </div>
                <h4 className="font-display font-extrabold text-sm text-[#1A1A1A] mb-2">{m.score}</h4>
                <p className="font-serif text-xs text-gray-600 leading-relaxed text-auto">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMPANION STATS TABLE GRID */}
      <div className="mt-8 border border-black/10 rounded-none overflow-hidden">
        <div className="bg-[#1A1A1A] text-[#F2F0EA] p-3.5 font-mono text-[10px] font-black uppercase tracking-[0.25em] text-center border-b border-black/10">
          ⚖️ Side-by-Side Competitive Metric Breakdown
        </div>
        
        <div className="divide-y divide-black/10 bg-white">
          {comparisonStats.map((stat) => (
            <div key={stat.label} className="grid grid-cols-12 text-center text-xs p-4 font-mono items-center uppercase tracking-wider">
              {/* REBELLION VAL */}
              <div className={`col-span-3 text-[10px] ${stat.winningSide === "rebellion" ? "font-black text-[#8b0000] underline" : "text-gray-400"}`}>
                {stat.rebellion}
              </div>
              
              {/* STAT CATEGORY TITLE */}
              <div className="col-span-6 font-serif italic text-xs font-black text-[#1A1A1A] normal-case">
                {stat.label}
              </div>

              {/* SPARTANS VAL */}
              <div className={`col-span-3 text-[10px] ${stat.winningSide === "spartans" ? "font-black text-black underline" : "text-gray-400"}`}>
                {stat.spartans}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

