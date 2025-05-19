import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import NotFound from "./pages/NotFound";

import { ThemeProvider } from "./contexts/ThemeContext";

import { useTranslation } from "react-i18next";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { i18n } = useTranslation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router basename="/resume-portfolio/">
      <ThemeProvider>
        <div className="flex w-screen h-screen overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="flex-1 flex flex-col min-w-0">
            <div className="lg:hidden">
              <button
                onClick={toggleSidebar}
                className={`fixed top-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg ${
                  i18n.language === "fa" ? "right-4" : "left-4"
                }`}
              >
                <i
                  className={`text-gray-600 dark:text-gray-300 ${
                    isSidebarOpen ? "fa fa-times" : "fa fa-bars"
                  }`}
                  style={{ fontSize: "24px" }}
                ></i>
              </button>
            </div>

            <main className="flex-1 w-full overflow-auto bg-gray-100 dark:bg-gray-900 transition-colors">
              <div className="container mx-auto px-6 py-8">
                <Routes>
                  <Route path="/" element={<Home />} />
                  {/* <Route path="/resume" element={<Home />} /> */}
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
