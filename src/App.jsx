import { useState, useEffect } from "react";

const FLORAL_LIGHT = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <pattern id="floral" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
        <!-- Central rose-pink flower -->
        <circle cx="90" cy="90" r="5" fill="rgba(210,90,120,0.25)" />
        <ellipse cx="90" cy="72" rx="6" ry="12" fill="rgba(230,110,140,0.18)" />
        <ellipse cx="90" cy="108" rx="6" ry="12" fill="rgba(230,110,140,0.18)" />
        <ellipse cx="72" cy="90" rx="12" ry="6" fill="rgba(230,110,140,0.18)" />
        <ellipse cx="108" cy="90" rx="12" ry="6" fill="rgba(230,110,140,0.18)" />
        <ellipse cx="77" cy="77" rx="6" ry="12" transform="rotate(45 77 77)" fill="rgba(220,100,130,0.12)" />
        <ellipse cx="103" cy="77" rx="6" ry="12" transform="rotate(-45 103 77)" fill="rgba(220,100,130,0.12)" />
        <ellipse cx="77" cy="103" rx="6" ry="12" transform="rotate(-45 77 103)" fill="rgba(220,100,130,0.12)" />
        <ellipse cx="103" cy="103" rx="6" ry="12" transform="rotate(45 103 103)" fill="rgba(220,100,130,0.12)" />

        <!-- Mauve/lavender small flower top-left -->
        <circle cx="22" cy="22" r="4" fill="rgba(160,100,200,0.20)" />
        <ellipse cx="22" cy="11" rx="4" ry="8" fill="rgba(170,120,210,0.16)" />
        <ellipse cx="22" cy="33" rx="4" ry="8" fill="rgba(170,120,210,0.16)" />
        <ellipse cx="11" cy="22" rx="8" ry="4" fill="rgba(170,120,210,0.16)" />
        <ellipse cx="33" cy="22" rx="8" ry="4" fill="rgba(170,120,210,0.16)" />

        <!-- Coral/orange flower bottom-right area -->
        <circle cx="158" cy="158" r="4" fill="rgba(230,120,70,0.20)" />
        <ellipse cx="158" cy="147" rx="4" ry="8" fill="rgba(240,140,80,0.16)" />
        <ellipse cx="158" cy="169" rx="4" ry="8" fill="rgba(240,140,80,0.16)" />
        <ellipse cx="147" cy="158" rx="8" ry="4" fill="rgba(240,140,80,0.16)" />
        <ellipse cx="169" cy="158" rx="8" ry="4" fill="rgba(240,140,80,0.16)" />

        <!-- Teal bud top-right -->
        <circle cx="158" cy="22" r="3" fill="rgba(60,180,160,0.18)" />
        <ellipse cx="158" cy="13" rx="3" ry="7" fill="rgba(70,190,170,0.14)" />
        <ellipse cx="158" cy="31" rx="3" ry="7" fill="rgba(70,190,170,0.14)" />
        <ellipse cx="149" cy="22" rx="7" ry="3" fill="rgba(70,190,170,0.14)" />
        <ellipse cx="167" cy="22" rx="7" ry="3" fill="rgba(70,190,170,0.14)" />

        <!-- Gold bud bottom-left -->
        <circle cx="22" cy="158" r="3" fill="rgba(210,170,40,0.18)" />
        <ellipse cx="22" cy="149" rx="3" ry="7" fill="rgba(220,180,50,0.14)" />
        <ellipse cx="22" cy="167" rx="3" ry="7" fill="rgba(220,180,50,0.14)" />
        <ellipse cx="13" cy="158" rx="7" ry="3" fill="rgba(220,180,50,0.14)" />
        <ellipse cx="31" cy="158" rx="7" ry="3" fill="rgba(220,180,50,0.14)" />

        <!-- Green leaves on vines -->
        <ellipse cx="50" cy="82" rx="5" ry="9" transform="rotate(35 50 82)" fill="rgba(80,160,90,0.16)" />
        <ellipse cx="130" cy="98" rx="5" ry="9" transform="rotate(-35 130 98)" fill="rgba(80,160,90,0.16)" />
        <ellipse cx="82" cy="50" rx="9" ry="5" transform="rotate(55 82 50)" fill="rgba(80,160,90,0.16)" />
        <ellipse cx="98" cy="130" rx="9" ry="5" transform="rotate(-55 98 130)" fill="rgba(80,160,90,0.16)" />
        <ellipse cx="40" cy="140" rx="4" ry="8" transform="rotate(20 40 140)" fill="rgba(100,170,80,0.12)" />
        <ellipse cx="140" cy="40" rx="4" ry="8" transform="rotate(-20 140 40)" fill="rgba(100,170,80,0.12)" />

        <!-- Vine lines in soft green -->
        <path d="M0,90 Q45,75 90,90 Q135,105 180,90" stroke="rgba(100,160,90,0.12)" stroke-width="1.2" fill="none"/>
        <path d="M90,0 Q75,45 90,90 Q105,135 90,180" stroke="rgba(100,160,90,0.12)" stroke-width="1.2" fill="none"/>
        <path d="M0,0 Q45,45 90,90" stroke="rgba(100,160,90,0.08)" stroke-width="1" fill="none"/>
        <path d="M180,0 Q135,45 90,90" stroke="rgba(100,160,90,0.08)" stroke-width="1" fill="none"/>

        <!-- Tiny berry dots -->
        <circle cx="60" cy="45" r="2.5" fill="rgba(190,80,110,0.16)" />
        <circle cx="120" cy="135" r="2.5" fill="rgba(190,80,110,0.16)" />
        <circle cx="45" cy="120" r="2" fill="rgba(160,100,200,0.14)" />
        <circle cx="135" cy="60" r="2" fill="rgba(60,160,180,0.14)" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#floral)" />
  </svg>
`;

const FLORAL_DARK = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <pattern id="floral-dark" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
        <!-- Central deep rose flower -->
        <circle cx="90" cy="90" r="5" fill="rgba(220,80,120,0.18)" />
        <ellipse cx="90" cy="72" rx="6" ry="12" fill="rgba(230,100,140,0.14)" />
        <ellipse cx="90" cy="108" rx="6" ry="12" fill="rgba(230,100,140,0.14)" />
        <ellipse cx="72" cy="90" rx="12" ry="6" fill="rgba(230,100,140,0.14)" />
        <ellipse cx="108" cy="90" rx="12" ry="6" fill="rgba(230,100,140,0.14)" />
        <ellipse cx="77" cy="77" rx="6" ry="12" transform="rotate(45 77 77)" fill="rgba(210,80,120,0.10)" />
        <ellipse cx="103" cy="77" rx="6" ry="12" transform="rotate(-45 103 77)" fill="rgba(210,80,120,0.10)" />
        <ellipse cx="77" cy="103" rx="6" ry="12" transform="rotate(-45 77 103)" fill="rgba(210,80,120,0.10)" />
        <ellipse cx="103" cy="103" rx="6" ry="12" transform="rotate(45 103 103)" fill="rgba(210,80,120,0.10)" />

        <!-- Violet flower top-left -->
        <circle cx="22" cy="22" r="4" fill="rgba(140,80,220,0.18)" />
        <ellipse cx="22" cy="11" rx="4" ry="8" fill="rgba(150,90,230,0.14)" />
        <ellipse cx="22" cy="33" rx="4" ry="8" fill="rgba(150,90,230,0.14)" />
        <ellipse cx="11" cy="22" rx="8" ry="4" fill="rgba(150,90,230,0.14)" />
        <ellipse cx="33" cy="22" rx="8" ry="4" fill="rgba(150,90,230,0.14)" />

        <!-- Amber/gold flower bottom-right -->
        <circle cx="158" cy="158" r="4" fill="rgba(220,150,40,0.18)" />
        <ellipse cx="158" cy="147" rx="4" ry="8" fill="rgba(230,160,50,0.14)" />
        <ellipse cx="158" cy="169" rx="4" ry="8" fill="rgba(230,160,50,0.14)" />
        <ellipse cx="147" cy="158" rx="8" ry="4" fill="rgba(230,160,50,0.14)" />
        <ellipse cx="169" cy="158" rx="8" ry="4" fill="rgba(230,160,50,0.14)" />

        <!-- Teal bud top-right -->
        <circle cx="158" cy="22" r="3" fill="rgba(40,190,170,0.16)" />
        <ellipse cx="158" cy="13" rx="3" ry="7" fill="rgba(50,200,180,0.12)" />
        <ellipse cx="158" cy="31" rx="3" ry="7" fill="rgba(50,200,180,0.12)" />
        <ellipse cx="149" cy="22" rx="7" ry="3" fill="rgba(50,200,180,0.12)" />
        <ellipse cx="167" cy="22" rx="7" ry="3" fill="rgba(50,200,180,0.12)" />

        <!-- Coral bud bottom-left -->
        <circle cx="22" cy="158" r="3" fill="rgba(230,110,70,0.16)" />
        <ellipse cx="22" cy="149" rx="3" ry="7" fill="rgba(240,120,80,0.12)" />
        <ellipse cx="22" cy="167" rx="3" ry="7" fill="rgba(240,120,80,0.12)" />
        <ellipse cx="13" cy="158" rx="7" ry="3" fill="rgba(240,120,80,0.12)" />
        <ellipse cx="31" cy="158" rx="7" ry="3" fill="rgba(240,120,80,0.12)" />

        <!-- Leaves -->
        <ellipse cx="50" cy="82" rx="5" ry="9" transform="rotate(35 50 82)" fill="rgba(60,180,100,0.14)" />
        <ellipse cx="130" cy="98" rx="5" ry="9" transform="rotate(-35 130 98)" fill="rgba(60,180,100,0.14)" />
        <ellipse cx="82" cy="50" rx="9" ry="5" transform="rotate(55 82 50)" fill="rgba(60,180,100,0.14)" />
        <ellipse cx="98" cy="130" rx="9" ry="5" transform="rotate(-55 98 130)" fill="rgba(60,180,100,0.14)" />
        <ellipse cx="40" cy="140" rx="4" ry="8" transform="rotate(20 40 140)" fill="rgba(80,190,90,0.10)" />
        <ellipse cx="140" cy="40" rx="4" ry="8" transform="rotate(-20 140 40)" fill="rgba(80,190,90,0.10)" />

        <!-- Vine lines -->
        <path d="M0,90 Q45,75 90,90 Q135,105 180,90" stroke="rgba(80,180,120,0.10)" stroke-width="1.2" fill="none"/>
        <path d="M90,0 Q75,45 90,90 Q105,135 90,180" stroke="rgba(80,180,120,0.10)" stroke-width="1.2" fill="none"/>
        <path d="M0,0 Q45,45 90,90" stroke="rgba(80,180,120,0.06)" stroke-width="1" fill="none"/>
        <path d="M180,0 Q135,45 90,90" stroke="rgba(80,180,120,0.06)" stroke-width="1" fill="none"/>

        <!-- Tiny berry dots -->
        <circle cx="60" cy="45" r="2.5" fill="rgba(220,80,110,0.16)" />
        <circle cx="120" cy="135" r="2.5" fill="rgba(220,80,110,0.16)" />
        <circle cx="45" cy="120" r="2" fill="rgba(140,80,220,0.14)" />
        <circle cx="135" cy="60" r="2" fill="rgba(40,180,200,0.14)" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#floral-dark)" />
  </svg>
`;

const GithubIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GmailIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.908 1.528-1.147C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const projects = [
  {
    title: "Fact vs. Non-Fact Classifier",
    description: "A machine learning web app that classifies text as Fact or Non-Fact using T5 embeddings and an SVM classifier.",
    url: "https://fact-nonfact-classifier.streamlit.app/",
  },
  {
    title: "Project Two",
    description: "A short description of your second project — what it does, the tech used, and what makes it interesting.",
    url: "#",
  },
  {
    title: "Project Three",
    description: "A short description of your third project — what it does, the tech used, and what makes it interesting.",
    url: "#",
  },
  {
    title: "Project Four",
    description: "A short description of your fourth project — what it does, the tech used, and what makes it interesting.",
    url: "#",
  },
];

const socialLinks = {
  github: "https://github.com/nav1106",
  linkedin: "https://www.linkedin.com/in/navnita-krishnan-109b9a321/",
  gmail: "mailto:navnitak06@gmail.com",
};

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);

  const bg = dark ? "#0a0a0a" : "#f5f0e8";
  const text = dark ? "#e8dfc8" : "#2c1f0e";
  const textMuted = dark ? "#a89880" : "#7a5c3a";
  const accent = dark ? "#c8a87a" : "#8b5e2a";
  const divider = dark ? "rgba(200,168,122,0.18)" : "rgba(139,94,42,0.18)";
  const iconHover = dark ? "#e8dfc8" : "#2c1f0e";
  const floralSvg = dark ? FLORAL_DARK : FLORAL_LIGHT;

  useEffect(() => {
    document.title = "Navnita Krishnan";
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: bg,
      color: text,
      fontFamily: "'Georgia', serif",
      transition: "background-color 0.5s ease, color 0.5s ease",
      position: "relative",
      overflowX: "hidden",
    }}>
      {/* Floral background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          transition: "opacity 0.5s ease",
        }}
        dangerouslySetInnerHTML={{ __html: floralSvg }}
      />

      {/* Mode toggle button */}
      <button
        onClick={() => setDark(!dark)}
        title={dark ? "Switch to light mode" : "Switch to dark mode"}
        style={{
          position: "fixed",
          top: "1.5rem",
          right: "1.75rem",
          zIndex: 100,
          background: "transparent",
          border: `1.5px solid ${accent}`,
          borderRadius: "50%",
          width: 42,
          height: 42,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: accent,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = accent;
          e.currentTarget.style.color = bg;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = accent;
        }}
      >
        {dark ? <SunIcon /> : <MoonIcon />}
      </button>

      {/* Hero section */}
      <section style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}>
        <h1 style={{
          fontFamily: "'Stalemate', cursive",
          fontSize: "clamp(3.5rem, 10vw, 7rem)",
          fontWeight: 400,
          color: text,
          margin: 0,
          lineHeight: 1.1,
          letterSpacing: "0.01em",
          transition: "color 0.5s ease",
        }}>
          Navnita Krishnan
        </h1>

        {/* Decorative divider */}
        <div style={{
          width: 80,
          height: 1.5,
          background: accent,
          margin: "1.8rem auto 1.6rem",
          opacity: 0.5,
          transition: "background 0.5s ease",
        }} />

        {/* Social icons */}
        <div style={{ display: "flex", gap: "1.8rem", alignItems: "center" }}>
          {[
            { href: socialLinks.github, icon: <GithubIcon />, label: "GitHub" },
            { href: socialLinks.linkedin, icon: <LinkedinIcon />, label: "LinkedIn" },
            { href: socialLinks.gmail, icon: <GmailIcon />, label: "Gmail" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Gmail" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              style={{
                color: textMuted,
                transition: "color 0.25s ease, transform 0.25s ease",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = iconHover;
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = textMuted;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Scroll hint */}
        <div style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          color: textMuted,
          opacity: 0.5,
          fontSize: "0.72rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontFamily: "'Georgia', serif",
        }}>
          <span>scroll</span>
          <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
            <path d="M6 0 L6 14 M1 9 L6 14 L11 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* Projects section */}
      <section style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        padding: "6rem 2rem 6rem",
        maxWidth: 760,
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <h2 style={{
          fontFamily: "'Stalemate', cursive",
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          fontWeight: 400,
          color: text,
          margin: "0 0 3rem 0",
          lineHeight: 1,
          transition: "color 0.5s ease",
        }}>
          Projects
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {projects.map((project, i) => (
            <div key={i} style={{ position: "relative" }}>
              <div style={{
                borderTop: `1px solid ${divider}`,
                transition: "border-color 0.5s ease",
              }} />
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "1.6rem 0",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                  <div style={{ flex: 1 }}>
                    <span style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: "clamp(1.1rem, 3vw, 1.35rem)",
                      fontWeight: 400,
                      color: hoveredProject === i ? accent : text,
                      transition: "color 0.25s ease",
                      letterSpacing: "0.01em",
                      lineHeight: 1.3,
                    }}>
                      {project.title}
                    </span>

                    <div style={{
                      maxHeight: hoveredProject === i ? "80px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.35s ease, opacity 0.3s ease",
                      opacity: hoveredProject === i ? 1 : 0,
                    }}>
                      <p style={{
                        margin: "0.6rem 0 0",
                        fontSize: "0.9rem",
                        color: textMuted,
                        lineHeight: 1.65,
                        fontFamily: "'Georgia', serif",
                        transition: "color 0.5s ease",
                      }}>
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <span style={{
                    fontSize: "1.1rem",
                    color: hoveredProject === i ? accent : textMuted,
                    transition: "color 0.25s ease, transform 0.25s ease",
                    transform: hoveredProject === i ? "translateX(4px)" : "translateX(0)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}>
                    →
                  </span>
                </div>
              </a>
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${divider}`, transition: "border-color 0.5s ease" }} />
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        position: "relative",
        zIndex: 1,
        textAlign: "center",
        padding: "2rem",
        color: textMuted,
        fontSize: "0.78rem",
        letterSpacing: "0.08em",
        opacity: 0.6,
        fontFamily: "'Georgia', serif",
      }}>
        © {new Date().getFullYear()} Navnita Krishnan
      </footer>

      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Stalemate&display=swap');`}</style>
    </div>
  );
}
