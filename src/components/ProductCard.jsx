// ProductCard.jsx
// Componente reutilizable que recibe datos mediante props
// Guía 14 - React: Props y reutilización de componentes

function ProductCard({ nombre, precio, descripcion, categoria, disponible, imagen }) {
  return (
    <div className="card">
      {imagen && (
        <div className="card-img-container">
          <img src={imagen} alt={nombre} className="card-img" />
        </div>
      )}
      <div className="card-body">
        <span className={`badge badge-${categoria.toLowerCase().replace(/\s/g, '-')}`}>
          {categoria}
        </span>
        <h3 className="card-title">{nombre}</h3>
        <p className="card-desc">{descripcion}</p>
        <div className="card-footer">
          <strong className="card-precio">${precio.toFixed(2)}</strong>
          <span className={`estado ${disponible ? 'disponible' : 'agotado'}`}>
            {disponible ? '✅ Disponible' : '❌ Agotado'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
