import React from "react";

function About() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .about-container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #ff9a9e, #fad0c4);
          text-align: center;
          color: #2d2d2d;
          padding: 20px;
        }

        .about-title {
          font-size: 2.5rem;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }

        .about-text {
          font-size: 1.1rem;
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .about-card {
          background: rgba(255, 255, 255, 0.6);
          padding: 25px 30px;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .developer {
          position: absolute;
          bottom: 20px;
          font-size: 0.9rem;
          color: #444;
          letter-spacing: 0.5px;
        }
      `}</style>

      <div className="about-container">
        <h2 className="about-title">About Us</h2>

        <div className="about-card">
          <p className="about-text">
            This is the About page of our React application. It provides
            information about the purpose of the website and the technologies
            used to build it.
          </p>
        </div>

        <div className="developer">Developed by Arushi</div>
      </div>
    </>
  );
}

export default About;
