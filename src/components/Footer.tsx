export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--glass-border)",
      padding: "3rem 0",
      marginTop: "5rem",
      background: "rgba(0,0,0,0.2)"
    }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>
          Sparsh Shankhdhar
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
          © {new Date().getFullYear()} All rights reserved. Built with Next.js & Framer Motion.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem" }}>
          <a href="https://www.linkedin.com/in/sparsh-shankhdhar-a294b224b" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)" }}>
            LinkedIn
          </a>
          <a href="mailto:ggsparsh235@gmail.com" style={{ color: "var(--text-muted)" }}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
