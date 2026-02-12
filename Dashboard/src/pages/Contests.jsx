import { useState, useEffect } from "react";
import { Trophy, ExternalLink, Star } from "lucide-react";

export default function Contests() {
  const [myContests, setMyContests] = useState([]);

  const availableContests = [
    {
      id: 1,
      name: "Weekly Contest 390",
      platform: "LeetCode",
      link: "https://leetcode.com",
    },
    {
      id: 2,
      name: "CodeChef Starters 120",
      platform: "CodeChef",
      link: "https://www.codechef.com",
    },
    {
      id: 3,
      name: "Codeforces Round 950",
      platform: "Codeforces",
      link: "https://codeforces.com",
    },
  ];

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myContests")) || [];
    setMyContests(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("myContests", JSON.stringify(myContests));
  }, [myContests]);

  const handleParticipate = (contest) => {
    const alreadyJoined = myContests.find(
      (c) => c.id === contest.id
    );
    if (alreadyJoined) return;

    setMyContests([
      ...myContests,
      {
        ...contest,
        rating: 1200,
        rank: "",
      },
    ]);
  };

  const updateRating = (id, value) => {
    const updated = myContests.map((c) =>
      c.id === id ? { ...c, rating: value } : c
    );
    setMyContests(updated);
  };

  const updateRank = (id, value) => {
    const updated = myContests.map((c) =>
      c.id === id ? { ...c, rank: value } : c
    );
    setMyContests(updated);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 space-y-10">

      {/* Header */}
      <h1 className="text-3xl font-bold text-orange-500">
        Coding Contests
      </h1>

      {/* Available Contests */}
      <div>
        <h2 className="text-xl font-semibold mb-6 text-gray-300">
          Upcoming Contests
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {availableContests.map((contest) => {
            const joined = myContests.some(
              (c) => c.id === contest.id
            );

            return (
              <div
                key={contest.id}
                className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {contest.name}
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  Platform: {contest.platform}
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href={contest.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-orange-500 hover:text-orange-400 flex items-center gap-2"
                  >
                    Visit
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => handleParticipate(contest)}
                    disabled={joined}
                    className={`px-4 py-2 rounded text-sm ${
                      joined
                        ? "bg-green-500/20 text-green-400"
                        : "bg-orange-500 hover:bg-orange-400 text-black"
                    }`}
                  >
                    {joined ? "Participating" : "Participate"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* My Contests */}
      <div>
        <h2 className="text-xl font-semibold mt-10 mb-6 text-gray-300">
          My Contests
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {myContests.map((contest) => (
            <div
              key={contest.id}
              className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white">
                  {contest.name}
                </h3>
                <Trophy className="text-orange-500 w-5 h-5" />
              </div>

              <p className="text-sm text-gray-400 mb-4">
                Platform: {contest.platform}
              </p>

              {/* Rating */}
              <div className="mb-4">
                <label className="text-sm text-gray-400">
                  Rating: {contest.rating}
                </label>
                <input
                  type="range"
                  min="800"
                  max="2500"
                  value={contest.rating}
                  onChange={(e) =>
                    updateRating(contest.id, +e.target.value)
                  }
                  className="w-full accent-orange-500"
                />
              </div>

              {/* Rank */}
              <div>
                <label className="text-sm text-gray-400">
                  Rank
                </label>
                <input
                  type="number"
                  placeholder="Enter Rank"
                  value={contest.rank}
                  onChange={(e) =>
                    updateRank(contest.id, e.target.value)
                  }
                  className="w-full bg-black border border-gray-700 p-2 mt-2 rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
