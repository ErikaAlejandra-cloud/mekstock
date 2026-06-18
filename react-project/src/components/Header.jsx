// Header.jsx
// Componente Header que recibe datos mediante props
// Guía 14 - React: Props y composición de componentes

function Header({ titulo, subtitulo, totalProductos }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-brand">
          <span className="header-logo">🛍️</span>
          <div>
            <h1 className="header-titulo">{titulo}</h1>
            <p className="header-subtitulo">{subtitulo}</p>
          </div>
        </div>
        <div className="header-badge">
          <span className="badge badge-ropa">{totalProductos} productos</span>
        </div>
      </div>
    </header>
  )
}

export default Header
