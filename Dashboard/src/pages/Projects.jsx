import { useState, useEffect } from "react";
import { Plus, Trash2, CheckCircle, Clock, Github } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    github: "",
    progress: 50,
    status: "Ongoing",
  });

  // 🔥 Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(saved);
  }, []);

  // 🔥 Save to localStorage
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const handleAddProject = () => {
    if (!newProject.title.trim()) return;

    const project = {
      ...newProject,
      _id: Date.now().toString(),
    };

    setProjects([...projects, project]);
    setShowModal(false);
    setNewProject({
      title: "",
      description: "",
      github: "",
      progress: 50,
      status: "Ongoing",
    });
  };

  const handleDelete = (id) => {
    setProjects(projects.filter((p) => p._id !== id));
  };

  const toggleStatus = (id) => {
    const updated = projects.map((p) =>
      p._id === id
        ? { ...p, status: p.status === "Completed" ? "Ongoing" : "Completed" }
        : p
    );
    setProjects(updated);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-orange-500">
          Active Projects
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-orange-500 hover:bg-orange-400 text-black px-5 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Project
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold text-white">
                {project.title}
              </h3>
              <button onClick={() => handleDelete(project._id)}>
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>

            <p className="text-sm text-gray-400 mb-3">
              {project.description}
            </p>

            {/* 🔗 GitHub Link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-orange-500 hover:text-orange-400 mb-4"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            )}

            {/* Progress */}
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span className="text-orange-500">
                  {project.progress}%
                </span>
              </div>

              <div className="w-full bg-gray-800 h-2 rounded-full">
                <div
                  className="bg-orange-500 h-2 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {/* Status */}
            <div className="flex justify-between items-center mt-4">
              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  project.status === "Completed"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {project.status}
              </span>

              <button
                onClick={() => toggleStatus(project._id)}
                className="text-sm text-orange-500 hover:text-orange-400 flex items-center gap-1"
              >
                {project.status === "Completed" ? (
                  <>
                    <Clock className="w-4 h-4" /> Mark Ongoing
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4" /> Mark Completed
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#111] border border-gray-800 p-6 rounded-xl w-96">

            <h2 className="text-xl font-bold mb-4 text-orange-500">
              Add New Project
            </h2>

            <input
              placeholder="Project title"
              className="w-full bg-black border border-gray-700 p-2 mb-3 rounded"
              value={newProject.title}
              onChange={(e) =>
                setNewProject({ ...newProject, title: e.target.value })
              }
            />

            <textarea
              placeholder="Project description"
              className="w-full bg-black border border-gray-700 p-2 mb-3 rounded"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
            />

            {/* 🔗 GitHub Input */}
            <input
              placeholder="GitHub Repository Link"
              className="w-full bg-black border border-gray-700 p-2 mb-3 rounded"
              value={newProject.github}
              onChange={(e) =>
                setNewProject({ ...newProject, github: e.target.value })
              }
            />

            <div className="mb-2">Progress: {newProject.progress}%</div>
            <input
              type="range"
              min="0"
              max="100"
              value={newProject.progress}
              onChange={(e) =>
                setNewProject({ ...newProject, progress: +e.target.value })
              }
              className="w-full accent-orange-500 mb-6"
            />

            <div className="flex gap-3">
              <button
                onClick={handleAddProject}
                className="flex-1 bg-orange-500 hover:bg-orange-400 text-black py-2 rounded"
              >
                Add Project
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
