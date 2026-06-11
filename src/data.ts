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
    recapText: "The defending IX Cup champion Texas Elite Spartans wasted no time reminding the league why they're the team to beat, dominating Atlanta 27-6. The Spartans jumped out to an early lead behind star running back Tara \"Turbo\" Thomas, who sliced through the Atlanta defense on a shifty touchdown run. Texas quickly established that this battle would be won in the trenches, with the physical and athletic offensive line controlling the line of scrimmage from the opening whistle. The Texas defense was relentless, overwhelming Atlanta's offense and forcing turnovers and punts. The Spartans' defense smothered every attempt by the Truth to gain momentum, helping Texas build a commanding 21-0 first-half lead. With the victory, Texas advanced to the Eastern Conference Championship."
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
    recapText: "In a spectacular defensive trade-off, the Washington Prodigy held off a late fourth-quarter rally by the Mississippi Panthers to secure a 14-13 victory. The Prodigy utilized a clock-draining ground attack and timely passing to build a slim lead. Mississippi responded with a dramatic deep driving touchdown with under a minute left, but the crucial extra-point attempt sailed wide, sealing the victory for Washington and booking their spot in the conference title match."
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
    recapText: "In a dominant performance, the Texas Elite Spartans overwhelmed the Washington Prodigy 33-6 to secure their 7th straight berth in the IX Cup Championship Game. The Spartans' defense was relentless from start to finish, holding the Prodigy to a season-low six points. Texas established control early and never relinquished it, with quarterback Michelle Angel continuing her stellar postseason run. The Spartans' defense, led by Whitney Palmer and the defensive line, consistently disrupted Washington's offensive rhythm and forced multiple turnovers. Despite Washington's efforts, the Prodigy simply couldn't match the intensity and execution of the defending champions. With the victory, Texas advanced to the championship game at 8-0, remaining undefeated through the entire season and postseason."
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
    recapText: "San Diego announced itself as the team to beat with a devastating shutout victory over the Los Angeles Legends. The Rebellion's defense was suffocating from the opening whistle, completely shutting down the Legends' offense. On a pivotal third-and-short near the goal line on their first drive, quarterback Danny Trainor escaped a sure sack and improvised one of the most exciting plays of the postseason, flipping the ball to Kez Wesley who powered into the end zone. All-Pro kicker Jocelyn Charette added a 36-yard field goal as San Diego built a 10-0 halftime lead. The second half belonged entirely to the Rebellion defense. San Diego's defensive front, led by star playmaker Brittani Lusain, controlled the line of scrimmage and bottled up the Legends. The Rebellion continued to attack in all phases, including a spectacular punt return touchdown by Alicia Zappia-Neeley. Balanced offense. Dominant defense. Special teams excellence. San Diego checked every box."
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
    recapText: "In a defensive slugfest worthy of a championship game, the San Diego Rebellion suffocated the Utah Falconz offense to win 20-0 and punch their ticket to the IX Cup. The first half was defined by turnovers and forced punts, with both defenses trading blows. San Diego struck first behind All-Pro kicker Jocelyn Charette's 43-yard field goal. Just before halftime, Rebellion quarterback Danny Trainor engineered a critical red-zone drive and capped it with a quarterback keeper to extend the lead to 10-0. The defining moment came early in the second half when Katie Claxton stepped in front of a Falconz pass and returned it for a Pick-9, extending the lead to 20-0. The Rebellion defense, led by defensive lineman Sabrina Kessler and linebacker duo Brittani Lusain and Katie Claxton, consistently disrupted the Falconz's triple option rhythm. Utah repeatedly moved the ball into scoring position only to see drives end with turnovers. San Diego's suffocating defense earned them a championship berth."
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
    narrative: "Leilani Caamal shattered the WNFC single-season tackles record with 86 combined stops through just six games, obliterating the previous mark of 73. Caamal averaged over 14 tackles per game, an almost incomprehensible number that speaks to both her individual dominance and her presence on every single play. She became the heartbeat of Golden State's defense, recording double-digit tackles in multiple games and never finishing below eight. Caamal's record-breaking performance and relentless consistency make her a legitimate MVP candidate despite her team falling short of the playoffs.",
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
    narrative: "The unquestioned leader of the only undefeated team in the WNFC, Michelle Angel orchestrated the most dominant season in recent league history. Angel's 13 touchdown passes against just three interceptions showcase her exceptional decision-making and precision, while her 99.3 passer rating leads all quarterbacks. More importantly, she never lost a game. Texas outscored opponents 216-30 this season, and Angel was the steady hand guiding that historic offense. She enters the championship unshakeable, having proven week after week that she's the most valuable player on the most valuable team.",
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
    narrative: "Maria Fautali didn't just lead the league in rushing touchdowns and total points—she redefined what explosive rushing looks like in the WNFC. Her 9.7 yards per carry average is simply staggering, and her 11 rushing touchdowns showcase a rare combination of big-play ability and goal-line dominance. Fautali's 74 total points led all players, and she added four two-point conversions to her résumé. Kansas City's entire offensive identity revolves around Fautali's ability to break games open with one carry, and she delivered all season long.",
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
    narrative: "Kendra Gabriel was the engine that powered Atlanta to a 4-3 record and the #4 seed in the Eastern Conference playoffs. Her 578 rushing yards ranked second in the league, and her nine rushing touchdowns tied for second-most in the WNFC. Gabriel's 6.6 yards per carry demonstrates her explosive running style and ability to turn every touch into a potential big play. Atlanta's offense ran through Gabriel all season, and her ability to control the clock while also striking quickly made the Truth one of the most balanced teams in football.",
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
    narrative: "Whitney Palmer terrorized opposing quarterbacks all season, finishing with a league-leading 7.5 sacks and seven quarterback pressures. Palmer was the centerpiece of a Texas defense that allowed just 30 points all season—by far the best mark in the WNFC. Her ability to wreck game plans and force opposing offenses into uncomfortable situations was critical to the Spartans' perfect 8-0 record. Palmer recorded at least half a sack in four of six games, showcasing remarkable consistency and relentless motor. She's one of the best pure pass rushers in women's football.",
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
    narrative: "Salt Lake City dominates WFA PRO with a perfect 5-0 record and the league's most dominant defense, allowing just 6.4 points per game. The Wildcats have scored 265 points while holding opponents to just 32, a +233 point differential that's historically impressive. Two-way star Laura Goetz leads on both sides of the ball: at quarterback she has a 119 passer rating with 14 TDs and just 1 INT, while on defense she leads the league with 6 interceptions (104 return yards, 2 TDs). Running back Sam Gordon (625 rushing yards, 7 TDs) anchors the ground game, while receiver Lexy Ronning (307 yards, 9 TDs) provides explosive playmaking. Salt Lake City is the clear favorite to represent the American Conference in the National Championship Game."
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
    narrative: "The back-to-back defending WFA Champions prove they still belong by dominating Derby City Dynamite 62-20 in Week 7, improving to 4-1. St. Louis has a defensive-minded approach that keeps them competitive, ranking 4th in points allowed at 13.8 per game. Quarterback Jaime Gaal leads the offense with 485 passing yards and 5 touchdowns, while linebacker Kinnuady Daniels leads all players with 14 QB pressures. Their championship experience and proven ability to win in high-pressure situations make them perennial contenders who nobody wants to face in January."
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
    narrative: "The Minnesota Vixen proved they can compete with anyone by dominating Tampa Bay 55-21 in Week 7 to improve to 5-1. With 262 points scored through six games, the Vixen have one of the league's most explosive offenses. Quarterback Erin Kelley has thrown 17 touchdowns with a 92.2 passer rating, while receiver Jacqueline Radford (342 yards, 8 TDs) is having a breakout season. Running back Paige Kuplic adds 481 rushing yards and 6 TDs on the ground. The Vixen's defense, led by Britt Peterson's superb punt return game (185 yards, 1 TD), is capable of shutting down any opponent when it matters most."
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
    narrative: "D.C. sits at 4-1, proving their championship pedigree as three-time WFA Champions (2006 NWFA, 2015 WFA, 2016 WFA). Quarterback Amanda Congialdi continues her MVP-caliber season with 1,273 passing yards, 15 touchdowns, and a league-leading 114.9 passer rating. Receiver Navia Howell (447 yards, 8 TDs) is the league's leading receiver, while the Divas rank #1 in offensive yardage at 2,084 total yards. D.C. proved they can beat anyone in a shootout, and their explosive offense combined with championship experience makes them a legitimate threat to add another title to their storied history."
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
    narrative: "Pittsburgh took their first loss of the season in Week 7 to D.C. 33-29, dropping to 4-1 but still poised for a historic first-ever appearance in the WFA National Championship Game. The Passion have built something special in Western Pennsylvania with a balanced offensive attack led by quarterback Marcelina Chavez (515 yards, 5 TDs) and running back Ellisyn Knapo (league-leading 708 rushing yards, 8 TDs). Linebacker Kaitlain Niedermeyer anchors a Passion defense that ranks 5th in points allowed at 17.4 per game. Pittsburgh has proven they belong among the league's top contenders and could surprise everyone by winning the entire championship this year."
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
    narrative: "Cali War has positioned themselves as a premium title contender inside the Pacific region through Week 7. Possessing the WFA PRO #2 ranked scoring defense, they have conceded just 51 points through five matches. On offense, quarterback Tania Yarely Guzman has operated efficiently with 377 passing yards and 6 touchdowns, while defensive end Sean Caldwell (3 sacks) leads a vicious and fast-closing trench group that routinely disrupts opponents' timing routes."
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
    narrative: "Nevada Storm enters the late season with a solid 3-2 record, showing high offensive capability, averaging 31.4 points per game. Offense is heavily centered around two-way threat Jesse Felker, who has thrown for 251 yards and 4 touchdowns while rushing for 290 yards and another 6 scores. Nevada sits as a dark horse that can score with any team in the league when their quick-passing game is synchronized."
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
    narrative: "Houston Energy stands at 2-3 but poses a continuous threat through their dynamic vertical passing attack. Quarterback Christina Jaques is among the league class with 758 passing yards and 7 luxury touchdowns on only 68 attempts. Additionally, receiver Rocket Parker has accumulated 316 receiving yards and is credited with an astonishing 43 touchdowns in cumulative league scoring lists—marking a historical statistical standout."
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
    narrative: "The Cincinnati Cougars are a highly physical, defensive-minded group that stays highly competitive in every matchup. While their 2-3 record shows some narrow defeats, they boast the most prolific tackling tandem in WFA PRO: linebackers Pasha Rivers, who leads the league with 57 combined tackles, and Jeanean Church, with 50. Their defensive front is highly disciplined and excels at stopping the run, making them a tough challenge for any offense."
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
    narrative: "Mile High Blaze is a resilient team building foundation for future WFA PRO campaigns. Despite a 2-3 record and playing some of the toughest defensive fronts, the Blaze have shown outstanding special teams play, boasting NaQua Barnett's 216 kickoff return yards and Tonii Triplett's 133 return yards. Their defensive secondary continues to improve, led by Triplett's 30 combined tackles."
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
    narrative: "Tampa Bay Inferno continues to showcase incredible grit through the 2026 campaign. Possessing a 1-4 record, the Inferno are offense-driven, powered by Octavia Loll's 291 rushing yards and multi-threat playmaking. Special teams ace Meg Joyce has provided fantastic field position with 188 return yards, helping Inferno keep up with heavily favored opponents."
  }
];
