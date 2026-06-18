// Footer.jsx
// Componente Footer que recibe datos mediante props
// Guía 14 - React: Props y composición de componentes

function Footer({ autor, anio, descripcion }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-desc">{descripcion}</p>
        <p className="footer-copy">
          © {anio} — Desarrollado por <strong>{autor}</strong>
        </p>
      </div>
    </footer>
  )
}

export default Footer
