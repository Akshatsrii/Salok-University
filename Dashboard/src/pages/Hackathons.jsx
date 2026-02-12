import { useState, useEffect } from "react";
import { Plus, Trash2, Trophy, Calendar, ExternalLink } from "lucide-react";

export default function Hackathons() {
  const [hackathons, setHackathons] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [newHackathon, setNewHackathon] = useState({
    name: "",
    platform: "",
    date: "",
    result: "Participated",
    position: "",
    certificate: "",
  });

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("hackathons")) || [];
    setHackathons(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("hackathons", JSON.stringify(hackathons));
  }, [hackathons]);

  const handleAdd = () => {
    if (!newHackathon.name.trim()) return;

    const hackathon = {
      ...newHackathon,
      _id: Date.now().toString(),
    };

    setHackathons([...hackathons, hackathon]);
    setShowModal(false);

    setNewHackathon({
      name: "",
      platform: "",
      date: "",
      result: "Participated",
      position: "",
      certificate: "",
    });
  };

  const handleDelete = (id) => {
    setHackathons(hackathons.filter((h) => h._id !== id));
  };

  const getResultColor = (result) => {
    if (result === "Winner") return "bg-green-500/20 text-green-400";
    if (result === "Runner-Up") return "bg-blue-500/20 text-blue-400";
    return "bg-yellow-500/20 text-yellow-400";
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-orange-500">
          Hackathons
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-orange-500 hover:bg-orange-400 text-black px-5 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Hackathon
        </button>
      </div>

      {/* Hackathon Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {hackathons.map((hackathon) => (
          <div
            key={hackathon._id}
            className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold text-white">
                {hackathon.name}
              </h3>

              <button onClick={() => handleDelete(hackathon._id)}>
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>

            <p className="text-sm text-gray-400 mb-2">
              Platform: {hackathon.platform}
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
              <Calendar className="w-4 h-4" />
              {hackathon.date}
            </div>

            <span
              className={`text-xs px-3 py-1 rounded-full ${getResultColor(
                hackathon.result
              )}`}
            >
              {hackathon.result}
            </span>

            {hackathon.position && (
              <p className="text-sm text-gray-400 mt-2">
                Position: {hackathon.position}
              </p>
            )}

            {/* Certificate Link */}
            {hackathon.certificate && (
              <a
                href={hackathon.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-orange-500 hover:text-orange-400 mt-4"
              >
                <ExternalLink className="w-4 h-4" />
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#111] border border-gray-800 p-6 rounded-xl w-96">

            <h2 className="text-xl font-bold mb-4 text-orange-500">
              Add Hackathon
            </h2>

            <input
              placeholder="Hackathon Name"
              className="w-full bg-black border border-gray-700 p-2 mb-3 rounded"
              value={newHackathon.name}
              onChange={(e) =>
                setNewHackathon({ ...newHackathon, name: e.target.value })
              }
            />

            <input
              placeholder="Platform (Devfolio, MLH, etc)"
              className="w-full bg-black border border-gray-700 p-2 mb-3 rounded"
              value={newHackathon.platform}
              onChange={(e) =>
                setNewHackathon({ ...newHackathon, platform: e.target.value })
              }
            />

            <input
              type="date"
              className="w-full bg-black border border-gray-700 p-2 mb-3 rounded"
              value={newHackathon.date}
              onChange={(e) =>
                setNewHackathon({ ...newHackathon, date: e.target.value })
              }
            />

            <select
              className="w-full bg-black border border-gray-700 p-2 mb-3 rounded"
              value={newHackathon.result}
              onChange={(e) =>
                setNewHackathon({ ...newHackathon, result: e.target.value })
              }
            >
              <option>Participated</option>
              <option>Runner-Up</option>
              <option>Winner</option>
            </select>

            <input
              placeholder="Position (Optional)"
              className="w-full bg-black border border-gray-700 p-2 mb-3 rounded"
              value={newHackathon.position}
              onChange={(e) =>
                setNewHackathon({ ...newHackathon, position: e.target.value })
              }
            />

            <input
              placeholder="Certificate Link (Optional)"
              className="w-full bg-black border border-gray-700 p-2 mb-4 rounded"
              value={newHackathon.certificate}
              onChange={(e) =>
                setNewHackathon({ ...newHackathon, certificate: e.target.value })
              }
            />

            <div className="flex gap-3">
              <button
                onClick={handleAdd}
                className="flex-1 bg-orange-500 hover:bg-orange-400 text-black py-2 rounded"
              >
                Add Hackathon
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-800 hover:bg-gray-700 py-2 rounded"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
