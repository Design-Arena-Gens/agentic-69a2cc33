import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function WeddingInvitation() {
  const [particles, setParticles] = useState([]);

  const createParticle = (x, y) => {
    const id = Date.now() + Math.random();
    const type = Math.random() > 0.5 ? 'rose' : 'heart';
    const particle = {
      id,
      type,
      x,
      y: -50,
      rotation: Math.random() * 360,
      drift: (Math.random() - 0.5) * 100,
    };

    setParticles(prev => [...prev, particle]);

    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, 3000);
  };

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;

    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        createParticle(x + (Math.random() - 0.5) * 50, 0);
      }, i * 100);
    }
  };

  return (
    <>
      <Head>
        <title>Harini & Vishnu - Wedding Invitation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="container" onClick={handleClick}>
        <div className="content">
          <div className="header">
            <h1 className="title">You're Invited</h1>
            <div className="subtitle">To the wedding celebration of</div>
          </div>

          <div className="couple-image">
            <img
              src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=600&fit=crop"
              alt="Harini & Vishnu"
            />
          </div>

          <div className="names">
            <h2 className="bride-name">Harini B</h2>
            <div className="ampersand">&</div>
            <h2 className="groom-name">Vishnu Sithan</h2>
          </div>

          <div className="events">
            <div className="event-card">
              <div className="event-title">Reception</div>
              <div className="event-date">22nd November 2025</div>
              <div className="event-time">6:00 PM onwards</div>
            </div>

            <div className="event-card highlight">
              <div className="event-title">Wedding Ceremony</div>
              <div className="event-date">23rd November 2025</div>
              <div className="event-time">Muhurtham: 8:00 AM - 9:30 AM</div>
            </div>
          </div>

          <div className="location">
            <div className="location-icon">📍</div>
            <h3 className="venue-name">Vidyhya Bharathi Kalyana Mandapam</h3>
            <div className="address">
              No.55, Bheema Sena Garden Street,<br />
              Mylapore, Chennai - 600005
            </div>
          </div>

          <div className="footer">
            <div className="decoration">❦</div>
            <p className="blessing">Looking forward to celebrating with you</p>
            <div className="decoration">❦</div>
          </div>
        </div>

        {particles.map(particle => (
          <div
            key={particle.id}
            className={`particle ${particle.type}`}
            style={{
              left: `${particle.x}px`,
              '--drift': `${particle.drift}px`,
              '--rotation': `${particle.rotation}deg`,
            }}
          >
            {particle.type === 'rose' ? '🌹' : '❤️'}
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #ffd6e7 0%, #ffe6f0 25%, #fff0f5 50%, #ffe6f0 75%, #ffd6e7 100%);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          padding: 20px;
          cursor: pointer;
          overflow: hidden;
          position: relative;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .content {
          max-width: 900px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 30px;
          padding: 60px 40px;
          box-shadow: 0 20px 60px rgba(255, 105, 180, 0.3);
          position: relative;
          z-index: 1;
          border: 2px solid rgba(255, 182, 193, 0.5);
        }

        .header {
          text-align: center;
          margin-bottom: 40px;
        }

        .title {
          font-family: 'Great Vibes', cursive;
          font-size: 4.5rem;
          color: #dc143c;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(220, 20, 60, 0.2);
          animation: fadeInDown 1s ease;
        }

        .subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          color: #d81b60;
          margin-top: 10px;
          font-weight: 300;
          letter-spacing: 2px;
        }

        .couple-image {
          width: 300px;
          height: 300px;
          margin: 40px auto;
          border-radius: 50%;
          overflow: hidden;
          border: 8px solid #ff69b4;
          box-shadow: 0 15px 35px rgba(255, 105, 180, 0.4);
          animation: float 3s ease-in-out infinite;
          position: relative;
          transform-style: preserve-3d;
        }

        .couple-image::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: rotate(45deg);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .couple-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-20px) rotateY(5deg); }
        }

        .names {
          text-align: center;
          margin: 50px 0;
        }

        .bride-name, .groom-name {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          color: #c41e3a;
          margin: 20px 0;
          font-weight: 700;
          text-shadow: 3px 3px 6px rgba(196, 30, 58, 0.2);
          animation: fadeIn 1.5s ease;
        }

        .ampersand {
          font-family: 'Great Vibes', cursive;
          font-size: 4rem;
          color: #ff1493;
          margin: 20px 0;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .events {
          margin: 60px 0;
          display: grid;
          gap: 30px;
        }

        .event-card {
          background: linear-gradient(135deg, #fff0f5 0%, #ffe6f0 100%);
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          border: 3px solid #ffb6c1;
          box-shadow: 0 10px 30px rgba(255, 105, 180, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .event-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 40px rgba(255, 105, 180, 0.3);
        }

        .event-card.highlight {
          background: linear-gradient(135deg, #ffe6f0 0%, #ffd6e7 100%);
          border: 3px solid #ff69b4;
        }

        .event-title {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: #c41e3a;
          font-weight: 600;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .event-date {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          color: #d81b60;
          margin: 10px 0;
          font-weight: 600;
        }

        .event-time {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          color: #e91e63;
          font-weight: 400;
        }

        .location {
          text-align: center;
          margin: 60px 0;
          padding: 40px;
          background: linear-gradient(135deg, #fff5f7 0%, #ffe6f0 100%);
          border-radius: 20px;
          border: 2px solid #ffb6c1;
        }

        .location-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .venue-name {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: #c41e3a;
          margin: 20px 0;
          font-weight: 600;
        }

        .address {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          color: #d81b60;
          line-height: 1.8;
          font-weight: 400;
        }

        .footer {
          text-align: center;
          margin-top: 60px;
          padding-top: 40px;
          border-top: 2px solid #ffb6c1;
        }

        .decoration {
          font-size: 2rem;
          color: #ff69b4;
          margin: 10px 0;
        }

        .blessing {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          color: #d81b60;
          font-style: italic;
          margin: 20px 0;
        }

        .particle {
          position: fixed;
          font-size: 2rem;
          pointer-events: none;
          z-index: 1000;
          animation: fall 3s linear forwards;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }

        @keyframes fall {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(var(--drift)) rotate(var(--rotation));
            opacity: 0;
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .content {
            padding: 40px 20px;
          }

          .title {
            font-size: 3rem;
          }

          .bride-name, .groom-name {
            font-size: 2.5rem;
          }

          .ampersand {
            font-size: 3rem;
          }

          .couple-image {
            width: 250px;
            height: 250px;
          }

          .event-title {
            font-size: 1.5rem;
          }

          .event-date {
            font-size: 1.4rem;
          }

          .venue-name {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
