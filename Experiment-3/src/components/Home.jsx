import React from "react";

function Home() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .home-container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          text-align: center;
          color: white;
        }

        .home-title {
          font-size: 2.5rem;
          margin-bottom: 10px;
          letter-spacing: 1px;
        }

        .home-subtitle {
          font-size: 1.1rem;
          max-width: 500px;
          margin-bottom: 25px;
          color: #e6e6e6;
        }

        .home-btn {
          padding: 12px 30px;
          font-size: 1rem;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          background-color: #ffffff;
          color: #764ba2;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .home-btn:hover {
          background-color: #f2f2f2;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .developer {
          position: absolute;
          bottom: 20px;
          font-size: 0.9rem;
          color: #dddddd;
          letter-spacing: 0.5px;
        }
      `}</style>

      <div className="home-container">
        <h2 className="home-title">Welcome to Home Page</h2>
        <p className="home-subtitle">
          This is the main landing page of the application built using React.
        </p>
        <button className="home-btn">Get Started</button>

        <div className="developer">Developed by Arushi</div>
      </div>
    </>
  );
}

export default Home;
