import React from "react";

function Contact() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .contact-container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #43cea2, #185a9d);
          text-align: center;
          color: white;
          padding: 20px;
        }

        .contact-title {
          font-size: 2.5rem;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }

        .contact-text {
          font-size: 1.1rem;
          max-width: 500px;
          margin-bottom: 30px;
          color: #e8f6f3;
        }

        .contact-box {
          background: rgba(255, 255, 255, 0.15);
          padding: 20px 30px;
          border-radius: 12px;
          backdrop-filter: blur(6px);
        }

        .contact-box p {
          margin: 8px 0;
          font-size: 1rem;
        }

        .developer {
          position: absolute;
          bottom: 20px;
          font-size: 0.9rem;
          color: #e0e0e0;
          letter-spacing: 0.5px;
        }
      `}</style>

      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-text">
          Feel free to reach out to us for any queries, support, or feedback.
        </p>

        <div className="contact-box">
          <p><strong>Email:</strong> contact@example.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> India</p>
        </div>

        <div className="developer">Developed by Arushi</div>
      </div>
    </>
  );
}

export default Contact;
