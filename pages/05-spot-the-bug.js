import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import todoStyles from "../styles/Todo.module.css";

const footballPlayers = [
  {
    name: "Cristiano Ronaldo",
    birthYear: 1985,
    country: "Portugal",
    club: false,
    league: false,
    leagueGoalsCurrentSeason: 1,
  },
  {
    name: "Lionel Messi",
    birthYear: 1987,
    country: "Argentina",
    club: "Paris Saint-Germain",
    league: "Ligue 1",
    leagueGoalsCurrentSeason: 7,
  },
  {
    name: "Neymar",
    birthYear: 1992,
    country: "Brazil",
    club: "Paris Saint-Germain",
    league: "Ligue 1",
    leagueGoalsCurrentSeason: 11,
  },
  {
    name: "Zlatan Ibrahimovic",
    birthYear: 1981,
    country: "Sweden",
    club: "AC Milan",
    league: "Serie A",
    leagueGoalsCurrentSeason: 0,
  },
  {
    name: "Robert Lewandowski",
    birthYear: 1988,
    country: "Poland",
    club: "FC Barcelona",
    league: "La Liga",
    leagueGoalsCurrentSeason: 13,
  },
  {
    name: "Erling Haaland",
    birthYear: 2000,
    country: "Norway",
    club: "Manchester City",
    league: "Premier League",
    leagueGoalsCurrentSeason: 18,
  },
  {
    name: "Eden Hazard",
    birthYear: 1991,
    country: "Belgium",
    club: "Real Madrid",
    league: "La Liga",
    leagueGoalsCurrentSeason: 0,
  },
  {
    name: "Paul Pogba",
    birthYear: 1993,
    country: "France",
    club: "Juventus FC",
    league: "Serie A",
    leagueGoalsCurrentSeason: 0,
  },
  {
    name: "Kylian Mbappé",
    birthYear: 1998,
    country: "France",
    club: "Paris Saint-Germain",
    league: "Ligue 1",
    leagueGoalsCurrentSeason: 12,
  },
  {
    name: "Mohamed Salah",
    birthYear: 1992,
    country: "Egypt",
    club: "Liverpool FC",
    league: "Premier League",
    leagueGoalsCurrentSeason: 6,
  },
  {
    name: "Sadio Mane",
    birthYear: 1992,
    country: "Senegal",
    club: "Bayern Munich",
    league: "Bundesliga",
    leagueGoalsCurrentSeason: 6,
  },
  {
    name: "Kevin De Bruyne",
    birthYear: 1991,
    country: "Belgium",
    club: "Manchester City",
    league: "Premier League",
    leagueGoalsCurrentSeason: 3,
  },
  {
    name: "Harry Kane",
    birthYear: 1993,
    country: "England",
    club: "Tottenham Hotspur",
    league: "Premier League",
    leagueGoalsCurrentSeason: 12,
  },
  {
    name: "Sergio Aguero",
    birthYear: 1988,
    country: "Argentina",
    club: false,
    league: false,
    leagueGoalsCurrentSeason: 0,
  },
  {
    name: "David De Gea",
    birthYear: 1990,
    country: "Spain",
    club: "Manchester United",
    league: "Premier League",
    leagueGoalsCurrentSeason: 0,
  },
  {
    name: "Thibaut Courtois",
    birthYear: 1992,
    country: "Belgium",
    club: "Real Madrid",
    league: "La Liga",
    leagueGoalsCurrentSeason: 0,
  },
  {
    name: "Gareth Bale",
    birthYear: 1989,
    country: "Wales",
    club: "Los Angeles FC",
    league: "Major League Soccer",
    leagueGoalsCurrentSeason: 2,
  },
  {
    name: "Antoine Griezmann",
    birthYear: 1991,
    country: "France",
    club: "Atlético de Madrid",
    league: "La Liga",
    leagueGoalsCurrentSeason: 5,
  },
  {
    name: "Romelu Lukaku",
    birthYear: 1993,
    country: "Belgium",
    club: "Inter Milan",
    league: "Serie A",
    leagueGoalsCurrentSeason: 1,
  },
  {
    name: "Luka Modric",
    birthYear: 1985,
    country: "Croatia",
    club: "Real Madrid",
    league: "La Liga",
    leagueGoalsCurrentSeason: 2,
  },
];

export const SpotTheBug = () => {
  const [filteredPlayers, setFilteredPlayers] = React.useState([]);
  const [clubs, setClubs] = React.useState([]);

  const handleFiltersPlayersByClub = (clubName) => {
    if (clubName === "ALL") {
      return setFilteredPlayers(footballPlayers);
    }
    if (clubName === "No club") {
      return setFilteredPlayers(
        footballPlayers.filter((player) => !player.club)
      );
    }
    setFilteredPlayers(
      footballPlayers.filter((player) => player.club === clubName)
    );
  };

  useEffect(() => {
    // Set clubs with unique values from footballPlayers
    setClubs(
      [...new Set(footballPlayers.map((player) => player.club))].map(
        (club) => club || "No club"
      )
    );
    setFilteredPlayers(footballPlayers);
  }, []); //removed filteredPlayers from the dependency list.
  //Every time the state filteredPlayers change, it will trigger the callback function in the useEffect and set filtered players back to all the football players.

  //  ██████╗██╗  ██╗ █████╗ ██╗     ██╗     ███████╗███╗   ██╗ ██████╗ ███████╗
  // ██╔════╝██║  ██║██╔══██╗██║     ██║     ██╔════╝████╗  ██║██╔════╝ ██╔════╝
  // ██║     ███████║███████║██║     ██║     █████╗  ██╔██╗ ██║██║  ███╗█████╗
  // ██║     ██╔══██║██╔══██║██║     ██║     ██╔══╝  ██║╚██╗██║██║   ██║██╔══╝
  // ╚██████╗██║  ██║██║  ██║███████╗███████╗███████╗██║ ╚████║╚██████╔╝███████╗
  //  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝

  // * Why does the filter not work??? 🤔

  return (
    <>
      <p className={styles.challengeDescription}>
        Complete the challenge in the <code>pages/05-spot-the-bug.js</code>{" "}
        file.
        <br />
      </p>

      <div className={styles.challengeWindow}>
        <div className={styles.resultWindow}>
          <h2>Filtered players</h2>

          <pre>{JSON.stringify(filteredPlayers, null, 2)}</pre>
        </div>

        <div className={styles.verticalDivider} />

        <div className={styles.challenges}>
          {/* Select list with all unique clubs in the footballPlayers array */}
          <select onChange={(e) => handleFiltersPlayersByClub(e.target.value)}>
            <option value="ALL">All clubs</option>
            {clubs.map((club) => (
              <option key={club} value={club}>
                {club}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default SpotTheBug;
