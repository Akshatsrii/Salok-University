import { useState, useEffect } from "react";
import { Users, Star, Shield, Music, Cpu, BookOpen } from "lucide-react";

export default function Activities() {
  const [joinedClubs, setJoinedClubs] = useState([]);

  const clubs = [
    {
      id: 1,
      name: "Robotics Club",
      icon: <Cpu className="w-6 h-6 text-orange-500" />,
      description: "Build robots, participate in tech competitions.",
    },
    {
      id: 2,
      name: "Music Club",
      icon: <Music className="w-6 h-6 text-orange-500" />,
      description: "Showcase musical talent in college events.",
    },
    {
      id: 3,
      name: "Dance Club",
      icon: <Star className="w-6 h-6 text-orange-500" />,
      description: "Perform at fests and cultural programs.",
    },
    {
      id: 4,
      name: "Coding Club",
      icon: <Users className="w-6 h-6 text-orange-500" />,
      description: "Competitive programming & hackathons.",
    },
    {
      id: 5,
      name: "NSS",
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      description: "Community service & social activities.",
    },
    {
      id: 6,
      name: "NCC",
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      description: "Discipline, leadership & defense training.",
    },
    {
      id: 7,
      name: "Wordsworth",
      icon: <BookOpen className="w-6 h-6 text-orange-500" />,
      description: "Literature, poetry & creative writing.",
    },
    {
      id: 8,
      name: "SAC",
      icon: <Users className="w-6 h-6 text-orange-500" />,
      description: "Student Activity Center coordination.",
    },
  ];

  // Load joined clubs
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("joinedClubs")) || [];
    setJoinedClubs(saved);
  }, []);

  // Save joined clubs
  useEffect(() => {
    localStorage.setItem("joinedClubs", JSON.stringify(joinedClubs));
  }, [joinedClubs]);

  const handleJoin = (club) => {
    const alreadyJoined = joinedClubs.find((c) => c.id === club.id);
    if (alreadyJoined) return;

    setJoinedClubs([
      ...joinedClubs,
      {
        ...club,
        role: "Member",
        events: 0,
      },
    ]);
  };

  const handleLeave = (id) => {
    setJoinedClubs(joinedClubs.filter((c) => c.id !== id));
  };

  const updateRole = (id, role) => {
    const updated = joinedClubs.map((c) =>
      c.id === id ? { ...c, role } : c
    );
    setJoinedClubs(updated);
  };

  const updateEvents = (id, value) => {
    const updated = joinedClubs.map((c) =>
      c.id === id ? { ...c, events: value } : c
    );
    setJoinedClubs(updated);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 space-y-10">

      {/* Header */}
      <h1 className="text-3xl font-bold text-orange-500">
        Extra-Curricular Activities
      </h1>

      {/* Available Clubs */}
      <div>
        <h2 className="text-xl font-semibold mb-6 text-gray-300">
          Available Clubs
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {clubs.map((club) => {
            const joined = joinedClubs.some((c) => c.id === club.id);

            return (
              <div
                key={club.id}
                className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  {club.icon}
                  <h3 className="font-bold">{club.name}</h3>
                </div>

                <p className="text-sm text-gray-400 mb-4">
                  {club.description}
                </p>

                <button
                  onClick={() => handleJoin(club)}
                  disabled={joined}
                  className={`w-full py-2 rounded text-sm ${
                    joined
                      ? "bg-green-500/20 text-green-400"
                      : "bg-orange-500 hover:bg-orange-400 text-black"
                  }`}
                >
                  {joined ? "Joined" : "Join Club"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* My Clubs */}
      <div>
        <h2 className="text-xl font-semibold mt-10 mb-6 text-gray-300">
          My Clubs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {joinedClubs.map((club) => (
            <div
              key={club.id}
              className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold">{club.name}</h3>
                <button
                  onClick={() => handleLeave(club.id)}
                  className="text-red-500 text-sm"
                >
                  Leave
                </button>
              </div>

              {/* Role */}
              <div className="mb-4">
                <label className="text-sm text-gray-400">Role</label>
                <select
                  value={club.role}
                  onChange={(e) =>
                    updateRole(club.id, e.target.value)
                  }
                  className="w-full bg-black border border-gray-700 p-2 mt-1 rounded"
                >
                  <option>Member</option>
                  <option>Coordinator</option>
                  <option>Lead</option>
                </select>
              </div>

              {/* Events Participated */}
              <div>
                <label className="text-sm text-gray-400">
                  Events Participated: {club.events}
                </label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={club.events}
                  onChange={(e) =>
                    updateEvents(club.id, +e.target.value)
                  }
                  className="w-full accent-orange-500 mt-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
