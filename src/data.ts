import { PlayoffGame, MvpCandidate, WfaTeam } from "./types";

export const EASTERN_TEAM_SPARTANS = { name: "Texas Elite Spartans", logoUrl: "https://www.hostedlogos.com/football/wnfc/EliteSpartans_logo_large.png", seed: 1, conference: "Eastern" as const };
export const EASTERN_TEAM_ATLANTA = { name: "Atlanta Truth", logoUrl: "https://www.hostedlogos.com/football/wnfc/Truth_logo_large.png", seed: 4, conference: "Eastern" as const };
export const EASTERN_TEAM_WASHINGTON = { name: "Washington Prodigy", logoUrl: "https://www.hostedlogos.com/football/wnfc/Prodigy_logo_large.png", seed: 2, conference: "Eastern" as const };
export const EASTERN_TEAM_MISSISSIPPI = { name: "Mississippi Panthers", logoUrl: "https://www.hostedlogos.com/football/wnfc/Panthers_logo_large.png", seed: 3, conference: "Eastern" as const };

export const WESTERN_TEAM_SAN_DIEGO = { name: "San Diego Rebellion", logoUrl: "https://www.hostedlogos.com/football/wnfc/Rebellion_logo_large.png", seed: 1, conference: "Western" as const };
export const WESTERN_TEAM_LOS_ANGELES = { name: "LA Legends", logoUrl: "https://www.hostedlogos.com/football/wnfc/Legends_logo_large.png", seed: 4, conference: "Western" as const };
export const WESTERN_TEAM_UTAH = { name: "Utah Falconz", logoUrl: "https://www.hostedlogos.com/football/wnfc/Falconz_logo_large.png", seed: 2, conference: "Western" as const };
export const WESTERN_TEAM_KANSAS_CITY = { name: "Kansas City Glory", logoUrl: "https://www.hostedlogos.com/football/wnfc/Glory_logo_large.png", seed: 3, conference: "Western" as const };

export const PLAYOFF_GAMES: PlayoffGame[] = [
  // EASTERN SEMIFINALS
  {
    id: "east-semi-1",
    round: "Semifinal",
    conference: "Eastern",
    team1: EASTERN_TEAM_SPARTANS,
    team2: EASTERN_TEAM_ATLANTA,
    score1: 27,
    score2: 6,
    winner: "Texas Elite Spartans",
    date: "June 4, 2026",
    recapTitle: "Spartans Overwhelm Truth Behind Dominant Defense",
    recapSubtitle: "Texas physical front controls the line of scrimmage",
    recapText: "Proving why they remain the standard of the league, the reigning IX Cup champion Texas Elite Spartans launched their postseason campaign with a definitive 27-6 victory over the Atlanta Truth. Texas grabbed momentum early on a dynamic play from star back Tara \"Turbo\" Thomas, who demonstrated exceptional agility to slice through the Atlanta defense for an opening touchdown.\n\nA key pregame storyline had focused on the anticipated battle between elite pass catchers: Zoe Jackson of Atlanta and Maria Jackson of Texas. However, Zoe Jackson was surprisingly absent from the Truth sidelines, which severely compromised Atlanta quarterback Renee Langlais's efforts to find her typical aerial rhythm.\n\nAlthough both rosters brought highly regarded ground offenses into the contest, Texas established immediate physical superiority. Their athletic offensive line consistently dominated the trenches. At the same time, the Spartans' defense smothered Atlanta's playbook, dictating field position and forcing critical turnovers to forge a 21-0 cushion by halftime. With this triumph, Texas safely advanced to their seventh Eastern Conference Championship appearance, bringing them one step closer to the national finals."
  },
  {
    id: "east-semi-2",
    round: "Semifinal",
    conference: "Eastern",
    team1: EASTERN_TEAM_WASHINGTON,
    team2: EASTERN_TEAM_MISSISSIPPI,
    score1: 14,
    score2: 13,
    winner: "Washington Prodigy",
    date: "June 4, 2026",
    recapTitle: "Prodigy Snaps Forward in One-Point Nailbiter",
    recapSubtitle: "Washington holds off late Panthers touchdown surge",
    recapText: "If the first semifinal was a display of sheer power, the nightcap delivered an unforgettable dose of postseason drama. The Mississippi Panthers gave the powerhouse Washington Prodigy everything they could handle in a heart-stopping 14-13 playoff finish.\n\nWashington asserted control in the opening half, building a 14-0 advantage behind two touchdown drives directed with poise by quarterback Ashley Clark. Their defense also started fast, routinely stopping the Panthers' early threats.\n\nBut Mississippi refused to quiet down. In the second half, they mounted a spectacular comeback. Under the guidance of quarterback Regena Jackson, the offense caught fire as she linked up with receiver Rashida Young for two sensational touchdown passes that stunned the Washington crowd.\n\nWith just seconds remaining on the clock, the Panthers crossed the goal line to cut the deficit to 14-13. The Panthers originally prepared to go for a game-winning two-point conversion, but a pre-snap penalty pushed them back, forcing them to try for a game-tying extra point. The ensuing kick sailed just wide left, enabling Washington to escape with the victory, but both teams earned massive respect for an instant postseason classic."
  },
  // EASTERN CHAMPIONSHIP
  {
    id: "east-champ",
    round: "Championship",
    conference: "Eastern",
    team1: EASTERN_TEAM_SPARTANS,
    team2: EASTERN_TEAM_WASHINGTON,
    score1: 33,
    score2: 6,
    winner: "Texas Elite Spartans",
    date: "June 6, 2026",
    recapTitle: "Spartans Dominate Prodigy in Eastern Title Clash",
    recapSubtitle: "Texas punches 7th straight ticket to IX Cup Final",
    recapText: "With a masterclass performance on both sides of the ball, the undefeated Texas Elite Spartans overpowered the Washington Prodigy 33-6 to earn their seventh consecutive trip to the IX Cup Championship. The formidable Texas defense set the tone early, stifling Washington's attack to allow a mere six points all game. Under center, quarterback Michelle Angel executed the offensive script with poise and precision, maintaining her spectacular playoff momentum. On the other side of the ball, standout defender Whitney Palmer spearheaded a defensive line that relentlessly disrupted the Prodigy's system and generated multiple takeaways. Texas extends their perfect record to 8-0 on the year, entering the national stage with complete confidence."
  },
  // WESTERN SEMIFINALS
  {
    id: "west-semi-1",
    round: "Semifinal",
    conference: "Western",
    team1: WESTERN_TEAM_SAN_DIEGO,
    team2: WESTERN_TEAM_LOS_ANGELES,
    score1: 30,
    score2: 0,
    winner: "San Diego Rebellion",
    date: "June 5, 2026",
    recapTitle: "Rebellion Dominates in Shutout Statement Victory",
    recapSubtitle: "San Diego defense suffocates Legends' offensive gameplan",
    recapText: "The San Diego Rebellion delivered a loud and clear message to the competition by putting on a clinic in a 30-0 shutout of the Los Angeles Legends. From the first snap, the Rebellion's defensive unit gave the Legends zero breathing room. San Diego sparked of their first possession with highlight-reel magic: on a critical third-and-short near the goal line, quarterback Danny Trainor broke free from a collapsing pocket to toss an off-balance flip to Kez Wesley for the opening touchdown. Jocelyn Charette's accurate 36-yard field goal pushed the halftime margin to 10-0. The final two quarters belonged to the San Diego stop-unit, with star playmaker Brittani Lusain fronting a defensive line that completely dominated the trenches. Special teams chimed in with a touchdown of their own as Alicia Zappia-Neeley ran back a brilliant punt return, capping an absolute complete-team victory."
  },
  {
    id: "west-semi-2",
    round: "Semifinal",
    conference: "Western",
    team1: WESTERN_TEAM_UTAH,
    team2: WESTERN_TEAM_KANSAS_CITY,
    score1: 22,
    score2: 19,
    winner: "Utah Falconz",
    date: "June 5, 2026",
    recapTitle: "Falconz Outlast Glory in High-Scoring Drama",
    recapSubtitle: "If Game One was about control, Game Two was pure chaos.",
    recapText: "While the first matchup of the Western Semifinals was a story of methodical control, the showdown between the Utah Falconz and the Kansas City Glory erupted into unvarnished football drama. In a breathtaking 22-19 duel decided in the final minute, Utah survived a legendary performance from Kansas City multi-threat playmaker Kassidy Snowden to secure their spot in the Western Conference Championship.\n\nThroughout the evening, Snowden was virtually unstoppable. Pivoting seamlessly between quarterback and defensive configurations, she carried the Glory on her shoulders, scoring both of Kansas City's touchdowns. Beyond her offensive output, she served as the backbone of the Kansas City defense and verified her reputation as one of the most explosive athletes in women's football.\n\nWith starting quarterback Lydia Morgan sidelined due to injury, veteran general Louise Bean took the reins of Utah's triple-option offense. The Falconz leaned on their classic formula: controlling time of possession and grinding out physical yards with star running back Gina Mondragon.\n\nUtah's defensive front deserves massive credit for neutralizing the league's leading rusher, Maria Fautali. The Falconz consistently swarmed Fautali, keeping her out of the end zone all night.\n\nImpact plays on defense swing the momentum early. Late in the second quarter, Snowden forced and recovered a crucial Falconz fumble to halt a deep Utah drive, translating the momentum into a major red-zone threat that kept the Glory close at halftime.\n\nUltimately, Utah's aggressive choice to seek two-point conversions instead of kicks made the ultimate difference, adding critical points that decided the final margin.\n\nIn the second half, Brenna Morris took under-center detail before Snowden returned to the Wildcat formation to make a late-game statements. Snowden punched in a score in the third quarter, then crossed the goal line again with only 3:32 remaining in the game to pull the Glory ahead 19-14.\n\nFacing elimination, the Falconz engineered a legendary final drive. Marched deep into the red zone with under a minute on the clock, Utah executed a sensational hook-and-lateral trick play that went the distance, driving the McCarthey Stadium crowd into a frenzy. Another successful two-point conversion established Utah's 22-19 lead.\n\nWith one final chance for a Kansas City miracle, freshman defensive back Bergen Meyer stepped up for Utah, snatching her second interception of the night to seal the win and trigger a wild Falconz celebration."
  },
  // WESTERN CHAMPIONSHIP
  {
    id: "west-champ",
    round: "Championship",
    conference: "Western",
    team1: WESTERN_TEAM_SAN_DIEGO,
    team2: WESTERN_TEAM_UTAH,
    score1: 20,
    score2: 0,
    winner: "San Diego Rebellion",
    date: "June 7, 2026",
    recapTitle: "Rebellion Shuts Out Falconz in Physical Battle",
    recapSubtitle: "San Diego secondary forces critical turnovers to block Utah",
    recapText: "In an intense defensive showcase, the San Diego Rebellion completely silenced the Utah Falconz to log a 20-0 shutout victory, securing their spot in the IX Cup. The opening half unfolded as a physical duel of punts and turnovers, with both groups trading heavy blows. The Rebellion broke the stalemate when All-Pro specialist Jocelyn Charette converted a long 43-yard field goal. Shortly before the break, quarterback Danny Trainor sustained a critical drive with his feet, finding the goal line on a clutch keeper to establish a 10-0 lead. The game-defining sequence unfolded in the third quarter when defender Katie Claxton read a Falconz throw, catching an interception and taking it all the way back for a spectacular Pick-9. Backed by defensive lineman Sabrina Kessler and the dominant linebacking partnership of Brittani Lusain and Claxton, San Diego routinely neutralized Utah's triple-option game plan to preserve the clean sheet."
  }
];

export const MVP_CANDIDATES: MvpCandidate[] = [
  {
    id: "mvp-1",
    name: "Leilani Caamal",
    team: "Golden State Storm",
    logoUrl: "https://www.hostedlogos.com/football/wnfc/Storm_logo_large.png",
    position: "Linebacker",
    category: "Defense",
    statsSummary: "86 combined tackles • 27 solo • 59 assists • 4 TFL • NEW WNFC RECORD",
    narrative: "Leilani Caamal put on an historic defensive showcase by amassing 86 combined tackles in just six games, shattering the previous single-season WNFC record of 73. Maintaining an astonishing average of over 14 tackles a game, Caamal was present on virtually every defensive snap for the Golden State Storm. She anchored the defensive unit as its emotional and physical anchor, delivering double-digit tackle marks across several contests and never dropping below eight. Although her team missed out on a postseason berth, her unmatched work rate and history-making season keep her firmly in the MVP spotlight.",
    keyStats: [
      { label: "Combined Tackles", value: 86, percentOfMax: 100 },
      { label: "Solo Tackles", value: 27, percentOfMax: 90 },
      { label: "Assists", value: 59, percentOfMax: 100 },
      { label: "Tackles for Loss (TFL)", value: 4, percentOfMax: 32 }
    ]
  },
  {
    id: "mvp-2",
    name: "Michelle Angel",
    team: "Texas Elite Spartans",
    logoUrl: "https://www.hostedlogos.com/football/wnfc/EliteSpartans_logo_large.png",
    position: "Quarterback",
    category: "Offense",
    statsSummary: "621 passing yards • 13 TDs • 3 INTs • 99.3 rating • 8-0 record",
    narrative: "As the elite general driving the league's remaining undefeated franchise, quarterback Michelle Angel engineered an incredibly clean and dominant regular season campaign. She racked up 13 touchdowns against just three interceptions, confirming her elite vision and decision-making while pacing all signal-callers with an amazing 99.3 passer rating. Under her guidance, the Texas offense outscored league opponents by a massive 216-30 margin. Angel remains exceptionally poised under pressure, establishing herself week in and week out as the centerpiece of a historic championship bid.",
    keyStats: [
      { label: "Passing TDs", value: 13, percentOfMax: 100 },
      { label: "Passing Yards", value: 621, percentOfMax: 85 },
      { label: "Passer Rating", value: 99.3, percentOfMax: 99 },
      { label: "Win Percentage", value: "100%", percentOfMax: 100 }
    ]
  },
  {
    id: "mvp-3",
    name: "Maria Fautali",
    team: "Kansas City Glory",
    logoUrl: "https://www.hostedlogos.com/football/wnfc/Glory_logo_large.png",
    position: "Running Back",
    category: "Offense",
    statsSummary: "666 rushing yards • 11 rushing TDs • 9.7 yards per carry • 74 total points",
    narrative: "Maria Fautali set a new standard for ground attacks in the WNFC, claiming the league's top spot in both rushing touchdowns and total points. Her outstanding average of 9.7 yards per carry is testament to her game-breaking speed, while her 11 rushing scores demonstrate a perfect blend of agility and short-yardage power. Scoring a league-high 74 points and contributing four successful two-point runs, Fautali served as the dynamic engine of the Kansas City Glory offense, capable of turning any handoff into a highlight-reel score.",
    keyStats: [
      { label: "Rushing Yards", value: 666, percentOfMax: 94 },
      { label: "Rushing TDs", value: 11, percentOfMax: 100 },
      { label: "Yards Per Carry", value: 9.7, percentOfMax: 100 },
      { label: "Points Scored", value: 74, percentOfMax: 100 }
    ]
  },
  {
    id: "mvp-4",
    name: "Kendra Gabriel",
    team: "Atlanta Truth",
    logoUrl: "https://www.hostedlogos.com/football/wnfc/Truth_logo_large.png",
    position: "Running Back",
    category: "Offense",
    statsSummary: "578 rushing yards • 9 rushing TDs • 6.6 yards per carry • 56 total points",
    narrative: "Kendra Gabriel served as the offensive focal point who propelled the Atlanta Truth to a playoff seed with a 4-3 record. She secured the league's second-highest rushing total with 578 yards, while her nine touchdowns on the ground tied for second in the WNFC. Generating a strong 6.6 yards per rush, Gabriel's explosive style consistently kept opposing defenses off-balance. Her capacity to control the tempo of the game while retaining big-play potential made Atlanta one of the most complete and formidable rosters in the Eastern Conference.",
    keyStats: [
      { label: "Rushing Yards", value: 578, percentOfMax: 82 },
      { label: "Rushing TDs", value: 9, percentOfMax: 81 },
      { label: "Yards Per Carry", value: 6.6, percentOfMax: 68 },
      { label: "Points Scored", value: 56, percentOfMax: 75 }
    ]
  },
  {
    id: "mvp-5",
    name: "Whitney Palmer",
    team: "Texas Elite Spartans",
    logoUrl: "https://www.hostedlogos.com/football/wnfc/EliteSpartans_logo_large.png",
    position: "Defensive End",
    category: "Defense",
    statsSummary: "7.5 sacks • 12.5 TFL • 7 QB pressures • League sack leader",
    narrative: "Whitney Palmer was a constant force in opponents' backfields, leading the WNFC with 7.5 sacks alongside seven quarterback hurries. As the main playmaker in a Texas defense that limited opponents to a league-best 30 total points all year, her pass-rushing skills consistently forced quarterbacks into costly mistakes. Palmer registered a sack contribution in four out of six regular season appearances, proving crucial to the Spartans' flawless 8-0 run. She continues to demonstrate why she ranks among the most feared edge rushers in women's tackle football.",
    keyStats: [
      { label: "Sacks", value: 7.5, percentOfMax: 100 },
      { label: "Tackles For Loss", value: 12.5, percentOfMax: 100 },
      { label: "QB Pressures", value: 7, percentOfMax: 87 },
      { label: "Team Points Allowed", value: "3.7 / game", percentOfMax: 100 }
    ]
  },
  {
    id: "mvp-6",
    name: "Kassidy Snowden",
    team: "Kansas City Glory",
    logoUrl: "https://www.hostedlogos.com/football/wnfc/Glory_logo_large.png",
    position: "Multi-Position Star",
    category: "Offense", // Classified under offense but plays defense too!
    statsSummary: "2 TDs in playoff game • 1 FF • 1 FR • Dynamic multi-position playmaker",
    narrative: "Kassidy Snowden emerged as the most dynamic and versatile player in the WNFC playoffs, playing quarterback, running back, and defensive back for Kansas City. In their playoff game against the Utah Falconz, she put on an absolute clinic, scoring two touchdowns and pacing the defense with a crucial forced fumble and a recovery. Snowden's ability to impact the game in multiple phases showcases why she's one of the most explosive athletes in women's football. Her willingness to play wherever the team needs her and make game-changing plays on both sides of the ball puts her squarely in the MVP conversation.",
    keyStats: [
      { label: "Playoff Game TDs", value: 2, percentOfMax: 100 },
      { label: "Forced Fumbles (FF)", value: 1, percentOfMax: 100 },
      { label: "Fumble Recoveries (FR)", value: 1, percentOfMax: 100 },
      { label: "Positions Played", value: "3+", percentOfMax: 100 }
    ]
  }
];

export const WFA_TEAMS: WfaTeam[] = [
  {
    rank: 1,
    name: "Salt Lake City Wildcats",
    logoUrl: "https://www.hostedlogos.com/football/wfa/Wildcats_logo_large.png",
    record: "5-0",
    pointsFor: 265,
    pointsAgainst: 32,
    pointDiff: 233,
    nextMatch: "vs Cali War (June 13)",
    details: "Laura Goetz (QB/DB): 119 rating, 14 TD/1 INT at QB; 6 INT (2 TD) on Defense. Sam Gordon (RB): 625 rushing yards, 7 TD. Lexy Ronning (WR): 307 yards, 9 TD.",
    statsSummary: "Allows just 6.4 points per game. Dominant on both sides of the ball.",
    narrative: "Sustaining a flawless 5-0 standing, Salt Lake City stands at the pinnacle of WFA PRO backed by a historic defensive unit that concedes only 6.4 points per game. With a massive +233 scoring variance, the Wildcats have piled on 265 points while giving up a microscopic 32. Multi-position icon Laura Goetz dictates terms globally; as quarterback she sports a stellar 119 rating with 14 touchdowns to just one pick, while simultaneously leading the league with six defensive interceptions. The rushing load is carried by Sam Gordon (625 yards, 7 TDs), complemented by receiver Lexy Ronning's playmaking. SLC enters the late-season bracket as the overwhelming candidate to win the American Conference."
  },
  {
    rank: 2,
    name: "St. Louis Slam",
    logoUrl: "https://www.hostedlogos.com/football/wfa/Slam_logo_large.png",
    record: "4-1",
    pointsFor: 121,
    pointsAgainst: 69,
    pointDiff: 52,
    nextMatch: "vs Indiana Valor (June 13)",
    details: "Jaime Gaal (QB): 485 yards, 5 TD offense. Kinnuady Daniels: 14 QB pressures. Derby City Dynamite blowout margin: 62-20.",
    statsSummary: "Back-to-back defending champions averaging 13.8 points allowed per game.",
    narrative: "The twice-consecutive reigning champions made a powerful statement in Week 7 by dismantling the Derby City Dynamite 62-20, elevating their record to 4-1. Adopting a tough, defensive posture, St. Louis ranks fourth overall by yielding mere 13.8 points a game. Competent commander Jaime Gaal manages the passing attack with 485 yards and five touchdowns, while defensive anchor Kinnuady Daniels applies relentless pressure off the edge with 14 quarterback hurries. Bolstered by title-winning poise and late-season execution, the Slam remain a feared playoff draw."
  },
  {
    rank: 3,
    name: "Minnesota Vixen",
    logoUrl: "https://www.hostedlogos.com/football/wfa/Vixen_logo_large.png",
    record: "5-1",
    pointsFor: 262,
    pointsAgainst: 64,
    pointDiff: 198,
    nextMatch: "Completed Regular Season",
    details: "Erin Kelley (QB): 17 TD, 92.2 rating. Jacqueline Radford (WR): 342 yards, 8 TD. Paige Kuplic (RB): 481 yards, 6 TD. Britt Peterson: 185 punt return yards, 1 TD.",
    statsSummary: "One of the most explosive offenses in WFA history with 43.6 PPG.",
    narrative: "Minnesota showed they are ready for anyone after rolling over Tampa Bay 55-21 in Week 7, concluding their regular season at 5-1. Sporting 262 total points, the Vixen's offense ranks among the elite. Quarterback Erin Kelley has powered the attack with 17 touchdowns and a solid 92.2 rating, benefiting from receiver Jacqueline Radford's breakout season. Tailback Paige Kuplic provides consistent punch on the ground with 481 yards and six scores. Alongside their offensive fire, specialist Britt Peterson generates short fields with her excellent punt return game, making Minnesota a complete-team threat."
  },
  {
    rank: 4,
    name: "D.C. Divas",
    logoUrl: "https://www.hostedlogos.com/football/wfa/Divas_logo_large.png",
    record: "4-1",
    pointsFor: 192,
    pointsAgainst: 106,
    pointDiff: 86,
    nextMatch: "vs Tampa Bay Inferno (June 13)",
    details: "Amanda Congialdi (QB): 1,273 yards, 15 TD, 114.9 rating. Navia Howell (WR): 447 yards, 8 TD (WFA leading receiver). #1 in WFA total offense (2,084 yards).",
    statsSummary: "Three-time WFA Champions with the #1 ranked offense in the league.",
    narrative: "Holding a strong 4-1 record, the D.C. Divas continue to exhibit the composure of their storied championship legacy. Masterful quarterback Amanda Congialdi is orchestrating a legendary campaign with 1,273 yards, 15 touchdowns, and a league-leading 114.9 passer rating. Wideout Navia Howell anchors the passing attack as the league's premier receiver, pushing the team to the top spots in absolute yardage. Able to outpace team defenses in any vertical track, the Divas possess both the scoring firepower and late-postseason experience to mount another serious title run."
  },
  {
    rank: 5,
    name: "Pittsburgh Passion",
    logoUrl: "https://www.hostedlogos.com/football/wfa/Passion_logo_large.png",
    record: "4-1",
    pointsFor: 171,
    pointsAgainst: 87,
    pointDiff: 84,
    nextMatch: "vs Cincinnati Cougars (June 13)",
    details: "Marcelina Chavez (QB): 515 yards, 5 TD. Ellisyn Knapo (RB): 708 yards, 8 TD (WFA leading rusher). Kaitlain Niedermeyer (LB): leader in points allowed (17.4).",
    statsSummary: "Ranked 5th in scoring defense. Took narrow 33-29 loss to D.C.",
    narrative: "Even after a narrow 33-29 setback in Week 7 against D.C., Pittsburgh maintains an exceptional 4-1 footing and is well-positioned for a historic run. The Western Pennsylvania powerhouse balances a lethal ground game with efficient passing: Marcelina Chavez has thrown for 515 yards, while elite running back Ellisyn Knapo sits atop the league charts with 708 rushing yards and eight scores. Defender Kaitlain Niedermeyer anchors a rigid squad that yields just 17.4 points per contest, making the Passion a genuine championship underdog."
  },
  {
    rank: 6,
    name: "Cali War",
    logoUrl: "https://www.hostedlogos.com/football/wfa/War_logo_large.png",
    record: "4-1",
    pointsFor: 187,
    pointsAgainst: 51,
    pointDiff: 136,
    nextMatch: "at Salt Lake City Wildcats (June 13)",
    details: "Tania Yarely Guzman (QB): 377 passing yards, 6 TDs. Sean Caldwell (DE): 3 sacks. Overall #2 ranked scoring defense.",
    statsSummary: "Averages 10.2 points allowed per game with an stellar secondary.",
    narrative: "Entering Week 7 with a 4-1 mark, Cali War has firmly established itself as a elite contender in the Pacific theater. Operating with the second-best scoring defense in WFA PRO, they have allowed a stingy 51 points over five games. Quarterback Tania Yarely Guzman directs a balanced attack, throwing for 377 yards and six touchdowns, while defensive end Sean Caldwell applies pocket-collapsing pressure with three sacks to anchor an aggressive and fast front seven."
  },
  {
    rank: 7,
    name: "Nevada Storm",
    logoUrl: "https://www.hostedlogos.com/football/wfa/Storm_logo_large.png",
    record: "3-2",
    pointsFor: 157,
    pointsAgainst: 97,
    pointDiff: 60,
    nextMatch: "at Mile High Blaze (June 13)",
    details: "Jesse Felker (QB): 251 passing yards, 4 TDs. Jesse Felker: 290 rushing yards, 6 TDs. Active two-way leader.",
    statsSummary: "Averages 31.4 PPG. Strong presence on both rushing and passing fronts.",
    narrative: "Boasting a productive 3-2 showing, the Nevada Storm enter the closing weeks averaging an impressive 31.4 points per game. The offense revolves around individual playmaker Jesse Felker, whose dual-threat capability includes 251 passing yards and four touchdowns along with 290 rushing yards and six additional touchdowns on the ground. When their quick-tempo game is in sync, the Storm can match any high-scoring offense in the country."
  },
  {
    rank: 8,
    name: "Houston Energy",
    logoUrl: "https://www.hostedlogos.com/football/wfa/Energy_logo_large.png",
    record: "2-3",
    pointsFor: 80,
    pointsAgainst: 159,
    pointDiff: -79,
    nextMatch: "at Austin Outlaws (June 13)",
    details: "Christina Jaques (QB): 758 passing yards, 7 TDs. Rocket Parker (RB) statistical anomaly: 43 TDs on league records.",
    statsSummary: "Explosive passing attack with high vertical capability.",
    narrative: "Despite a 2-3 record, Houston Energy remains a dangerous matchup due to their explosive passing concepts. Quarterback Christina Jaques excels in vertical schemes, throwing for 758 yards and seven touchdowns on just 68 passes. In the receiving corps, standout target Rocket Parker has amassed 316 yards and continues to rewrite the record books with 43 historic career touchdowns, keeping Houston's offense highly potent."
  },
  {
    rank: 9,
    name: "Cincinnati Cougars",
    logoUrl: "https://www.hostedlogos.com/football/wfa/CI_Cougars_logo_large.png",
    record: "2-3",
    pointsFor: 106,
    pointsAgainst: 127,
    pointDiff: -21,
    nextMatch: "at Pittsburgh Passion (June 13)",
    details: "Pasha Rivers (LB): 57 combined tackles (29 solo, 28 assists). Jeanean Church (LB): 50 combined tackles (32 solo). Dominant linebacker duo.",
    statsSummary: "Gritty squad anchored by the league's top two tacklers.",
    narrative: "Known for their physical, gritty identity, the 2-3 Cincinnati Cougars keep every contest close behind a stellar defensive backbone. The crew features the most prolific linebanking duo in the WFA, with Pasha Rivers leading the league at 57 total tackles and partner Jeanean Church registering 50. Their highly disciplined front seven excels at shutting down running lanes, keeping opponents in tough, low-scoring duals."
  },
  {
    rank: 10,
    name: "Mile High Blaze",
    logoUrl: "https://www.hostedlogos.com/football/wfa/Blaze_logo_large.png",
    record: "2-3",
    pointsFor: 54,
    pointsAgainst: 179,
    pointDiff: -125,
    nextMatch: "vs Nevada Storm (June 13)",
    details: "NaQua Barnett: 216 kickoff return yards on 12 returns. Tonii Triplett: 133 return yards, 30 tackles, 2 pass deflections.",
    statsSummary: "Developing team with exceptional kickoff-return numbers.",
    narrative: "The 2-3 Mile High Blaze continue to lay down a solid foundation while competing in one of the league's toughest divisions. Even against elite front defenses, the Blaze have sparkled on special teams, featuring NaQua Barnett's 216 kickoff return yards and Tonii Triplett's 133 return yards. Backed by Triplett's 30 tackles, their defensive secondary is maturing rapidly, making them a tough team to overlook."
  },
  {
    rank: 11,
    name: "Tampa Bay Inferno",
    logoUrl: "https://www.hostedlogos.com/football/wfa/Inferno_logo_large.png",
    record: "1-4",
    pointsFor: 102,
    pointsAgainst: 184,
    pointDiff: -82,
    nextMatch: "at D.C. Divas (June 13)",
    details: "Octavia Loll (RB/QB): 291 rushing yards, 2 TDs. Meg Joyce: 188 kickoff return yards on 13 returns. Special teams standout.",
    statsSummary: "Averages 20.4 points per game with explosive special-teams return capabilities.",
    narrative: "Tampa Bay shows exceptional grit through their 1-4 campaign, continuing to challenge opponents with a resilient offense. Multi-talented Octavia Loll anchors the offensive attack with 291 rushing yards, while return specialist Meg Joyce provides crucial field positioning with 188 total return yards. This special teams excellence keeps the Inferno highly competitive even against heavily favored units."
  }
];
