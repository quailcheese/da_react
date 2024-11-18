import React, { useState, useEffect } from 'react';

const gamesData = [
  {
    id: 1,
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Boston Celtics',
    homeScore: 100,
    awayScore: 90,
    startTime: '8:00 PM EST',
    started: true,
  },
  {
    id: 2,
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Chicago Bulls',
    homeScore: 0,
    awayScore: 0,
    startTime: '9:00 PM EST',
    started: false,
  },
  {
    id: 3,
    homeTeam: 'New York Knicks',
    awayTeam: 'Los Angeles Clippers',
    homeScore: 80,
    awayScore: 70,
    startTime: '7:00 PM EST',
    started: true,
  },
  {
    id: 4,
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Denver Nuggets',
    homeScore: 0,
    awayScore: 0,
    startTime: '8:30 PM EST',
    started: false,
  },
];

const Game = ({ game }) => {
  return (
    <div className="bg-slate-950 rounded shadow-md p-4 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
      <h2 className="text-slate-400 font-bold mb-2">
        {game.homeTeam} vs {game.awayTeam}
      </h2>
      {game.started ? (
        <p className="text-slate-400 font-bold mb-2">
          {game.homeScore} - {game.awayScore}
        </p>
      ) : (
        <p className="text-slate-400 font-bold mb-2">Starts at {game.startTime}</p>
      )}
    </div>
  );
};

const App = () => {
  const [games, setGames] = useState(gamesData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Simulate a real-time update of the games data
      const updatedGames = games.map((game) => {
        if (game.started) {
          game.homeScore += Math.floor(Math.random() * 10);
          game.awayScore += Math.floor(Math.random() * 10);
        }
        return game;
      });
      setGames(updatedGames);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [games]);

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">NBA Games and Scores</h1>
      <div className="flex flex-wrap justify-center">
        {games.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default App;