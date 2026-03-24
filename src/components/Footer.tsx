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
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
