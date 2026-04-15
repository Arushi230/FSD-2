import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Contact from "../src/components/Contact";

function App() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f6f8;
        }

        .app-title {
          text-align: center;
          padding: 20px;
          background: #1f2937;
          color: white;
          margin: 0;
          letter-spacing: 1px;
        }

        .navbar {
          display: flex;
          justify-content: center;
          gap: 30px;
          padding: 15px;
          background: #111827;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .nav-link {
          color: #e5e7eb;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          padding: 8px 18px;
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          background: #6366f1;
          color: white;
          transform: translateY(-2px);
        }

        .content {
          min-height: calc(100vh - 140px);
        }
      `}</style>

      <h1 className="app-title">React Router Practical</h1>

      {/* Styled Navigation Bar */}
      <nav className="navbar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
