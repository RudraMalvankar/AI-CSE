import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Video from "./pages/video";
import Audio from "./pages/audio";
import Read from "./pages/read";
import Exp from "./pages/exp";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Routes */}
        <div className="container mx-auto p-6">
          <Routes>
            <Route
              path="/"
              element={
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 p-4">
                  {[
                    { name: "VidyaLearn", desc: "Custom search engine for educational videos", link: "video" },
                    { name: "AudioLearn", desc: "Custom search engine for educational audio", link: "Audio" },
                    { name: "PDFSearch", desc: "Custom search engine for learning PDFs", link: "Read" },
                    { name: "Science Exp", desc: "Custom search engine for science experiments", link: "Exp" }
                  ].map((engine, index) => (
                    <div
                      key={index}
                      className="p-10 bg-gray-800 rounded-lg shadow-lg text-center flex flex-col items-center justify-center hover:shadow-xl transition duration-300 w-full h-64 sm:h-80"
                    >
                      <h2 className="text-3xl font-bold text-blue-400">{engine.name}</h2>
                      <p className="mt-4 text-gray-300 text-lg text-center">{engine.desc}</p>
                      <a
                        href={engine.link}
                        className="mt-6 bg-blue-500 text-white px-8 py-3 text-lg rounded-lg hover:bg-blue-600 transition duration-300"
                      >
                        Explore
                      </a>
                    </div>
                  ))}
                </div>
              }
            />
            <Route path="/video" element={<Video />} />
            <Route path="/audio" element={<Audio />} />
            <Route path="/read" element={<Read />} />
            <Route path="/exp" element={<Exp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
