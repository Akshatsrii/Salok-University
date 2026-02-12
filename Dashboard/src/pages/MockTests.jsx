import { useState, useEffect } from "react";
import { PlayCircle, Clock, CheckCircle } from "lucide-react";

export default function MockTests() {
  const [activeTest, setActiveTest] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const tests = [
    {
      id: 1,
      title: "Data Structures Mock",
      duration: 60,
      questions: [
        {
          question: "What is time complexity of binary search?",
          options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
          answer: 1,
        },
        {
          question: "Which data structure uses FIFO?",
          options: ["Stack", "Queue", "Tree", "Graph"],
          answer: 1,
        },
      ],
    },
    {
      id: 2,
      title: "Web Development Mock",
      duration: 60,
      questions: [
        {
          question: "Which hook is used for state in React?",
          options: ["useEffect", "useState", "useRef", "useMemo"],
          answer: 1,
        },
        {
          question: "CSS stands for?",
          options: [
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheet",
            "Computer Style Syntax",
          ],
          answer: 0,
        },
      ],
    },
  ];

  // Load history
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("mockHistory")) || [];
    setHistory(saved);
  }, []);

  useEffect(() => {
    if (!activeTest) return;

    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, activeTest]);

  const startTest = (test) => {
    setActiveTest(test);
    setCurrentQ(0);
    setAnswers({});
    setTimeLeft(test.duration);
    setResult(null);
  };

  const selectOption = (index) => {
    setAnswers({ ...answers, [currentQ]: index });
  };

  const handleSubmit = () => {
    let score = 0;
    activeTest.questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        score++;
      }
    });

    const finalResult = {
      title: activeTest.title,
      score,
      total: activeTest.questions.length,
      date: new Date().toLocaleDateString(),
    };

    const updatedHistory = [...history, finalResult];
    setHistory(updatedHistory);
    localStorage.setItem("mockHistory", JSON.stringify(updatedHistory));

    setResult(finalResult);
    setActiveTest(null);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 space-y-10">

      {/* Header */}
      <h1 className="text-3xl font-bold text-orange-500">
        Mock Tests
      </h1>

      {/* Active Test */}
      {activeTest && (
        <div className="bg-[#111] border border-gray-800 rounded-xl p-6">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">
              {activeTest.title}
            </h2>

            <div className="flex items-center gap-2 text-orange-500">
              <Clock className="w-4 h-4" />
              {timeLeft}s
            </div>
          </div>

          <p className="mb-4">
            {activeTest.questions[currentQ].question}
          </p>

          <div className="space-y-3">
            {activeTest.questions[currentQ].options.map(
              (option, index) => (
                <button
                  key={index}
                  onClick={() => selectOption(index)}
                  className={`w-full text-left p-3 rounded border transition ${
                    answers[currentQ] === index
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-gray-700 hover:border-orange-400"
                  }`}
                >
                  {option}
                </button>
              )
            )}
          </div>

          <div className="flex justify-between mt-6">
            <button
              disabled={currentQ === 0}
              onClick={() => setCurrentQ(currentQ - 1)}
              className="px-4 py-2 bg-gray-800 rounded"
            >
              Previous
            </button>

            {currentQ === activeTest.questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-orange-500 text-black rounded"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => setCurrentQ(currentQ + 1)}
                className="px-4 py-2 bg-orange-500 text-black rounded"
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="bg-[#111] border border-green-500 rounded-xl p-6">
          <h2 className="text-xl font-bold text-green-400 mb-2">
            Test Completed
          </h2>
          <p>
            Score: {result.score} / {result.total}
          </p>
        </div>
      )}

      {/* Available Tests */}
      {!activeTest && !result && (
        <div className="grid md:grid-cols-2 gap-6">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition"
            >
              <h3 className="text-lg font-bold mb-3">
                {test.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Duration: {test.duration} seconds
              </p>

              <button
                onClick={() => startTest(test)}
                className="bg-orange-500 hover:bg-orange-400 text-black px-4 py-2 rounded flex items-center gap-2"
              >
                <PlayCircle className="w-4 h-4" />
                Start Test
              </button>
            </div>
          ))}
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-10 mb-4 text-gray-300">
            Attempt History
          </h2>

          <div className="space-y-4">
            {history.map((h, index) => (
              <div
                key={index}
                className="bg-[#111] border border-gray-800 rounded-lg p-4 flex justify-between"
              >
                <div>
                  <p className="font-semibold">{h.title}</p>
                  <p className="text-sm text-gray-400">
                    {h.date}
                  </p>
                </div>

                <div className="text-orange-500 font-bold">
                  {h.score}/{h.total}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
