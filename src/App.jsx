// App.jsx
// Componente principal - Guía 14: Props, composición, reutilización y map()
// Katherine Jeanmillette Rodriguez Menendez - Soft12-a

import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ProductCard from './components/ProductCard.jsx'

// =====================================================
// ARREGLO DE PRODUCTOS (Captura 16)
// Los datos viven aquí en el componente padre
// y se pasan a cada ProductCard mediante props
// =====================================================
const productos = [
  {
    id: 1,
    nombre: 'Camiseta Oversize Negra',
    precio: 18.99,
    descripcion: 'Camiseta de algodón 100%, corte holgado, perfecta para el día a día.',
    categoria: 'Ropa',
    disponible: true,
    imagen: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=200&fit=crop',
  },
  {
    id: 2,
    nombre: 'Zapatos Urbanos Blancos',
    precio: 64.99,
    descripcion: 'Tenis casuales con suela antideslizante, ideales para uso urbano.',
    categoria: 'Calzado',
    disponible: true,
    imagen: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop',
  },
  {
    id: 3,
    nombre: 'Mochila Ejecutiva Negra',
    precio: 39.99,
    descripcion: 'Mochila con compartimento para laptop hasta 15", resistente al agua.',
    categoria: 'Accesorios',
    disponible: true,
    imagen: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop',
  },
  {
    id: 4,
    nombre: 'Gorra Snapback Azul',
    precio: 12.50,
    descripcion: 'Gorra con visera plana, ajuste universal, bordado frontal.',
    categoria: 'Accesorios',
    disponible: false,
    imagen: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=200&fit=crop',
  },
  {
    id: 5,
    nombre: 'Pantalón Cargo Gris',
    precio: 32.00,
    descripcion: 'Pantalón con múltiples bolsillos, tela resistente, corte moderno.',
    categoria: 'Ropa',
    disponible: true,
    imagen: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300&h=200&fit=crop',
  },
  {
    id: 6,
    nombre: 'Reloj Casual Marrón',
    precio: 84.99,
    descripcion: 'Reloj análogo con correa de cuero genuino, mecanismo japonés.',
    categoria: 'Accesorios',
    disponible: true,
    imagen: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop',
  },
]

// =====================================================
// CATEGORÍAS (Captura 19)
// =====================================================
const categorias = [
  { id: 'todas', label: 'Todas', emoji: '🛍️' },
  { id: 'ropa',  label: 'Ropa',  emoji: '👕' },
  { id: 'calzado', label: 'Calzado', emoji: '👟' },
  { id: 'accesorios', label: 'Accesorios', emoji: '🎒' },
]

function App() {
  // Estado para la categoría activa (JavaScript activo - datos dinámicos)
  const [categoriaActiva, setCategoriaActiva] = useState('todas')

  // Filtrar productos según la categoría seleccionada
  const productosFiltrados = categoriaActiva === 'todas'
    ? productos
    : productos.filter(
        (p) => p.categoria.toLowerCase() === categoriaActiva
      )

  return (
    <div className="app">

      {/* ============================================
          HEADER (Captura 8-10)
          Enviamos props desde App al componente Header
          ============================================ */}
      <Header
        titulo="Mini Catálogo React"
        subtitulo="Guía 14 · Props y reutilización de componentes"
        totalProductos={productos.length}
      />

      <main className="main">

        {/* ============================================
            SECCIÓN CATEGORÍAS (Capturas 19-21)
            Generadas con map() desde el arreglo categorias
            ============================================ */}
        <section className="categorias-section">
          <h2 className="section-titulo">Explorar por categoría</h2>
          <div className="categorias">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                className={`cat-btn ${categoriaActiva === cat.id ? 'activa' : ''}`}
                onClick={() => setCategoriaActiva(cat.id)}
              >
                {cat.emoji} {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* ============================================
            CATÁLOGO DE PRODUCTOS (Capturas 16-18)
            Generado con productos.map() — cada ProductCard
            recibe sus datos mediante props
            ============================================ */}
        <section className="productos-section">
          <h2 className="section-titulo">
            {categoriaActiva === 'todas'
              ? 'Todos los productos'
              : `Categoría: ${categorias.find(c => c.id === categoriaActiva)?.label}`}
            <span className="section-count">({productosFiltrados.length})</span>
          </h2>

          {productosFiltrados.length === 0 ? (
            <p className="sin-productos">No hay productos en esta categoría.</p>
          ) : (
            <div className="productos-grid">
              {/* productos.map() — Captura 17 */}
              {productosFiltrados.map((producto) => (
                <ProductCard
                  key={producto.id}
                  nombre={producto.nombre}
                  precio={producto.precio}
                  descripcion={producto.descripcion}
                  categoria={producto.categoria}
                  disponible={producto.disponible}
                  imagen={producto.imagen}
                />
              ))}
            </div>
          )}
        </section>

      </main>

      {/* ============================================
          FOOTER (Capturas 11-13)
          Enviamos props desde App al componente Footer
          ============================================ */}
      <Footer
        autor="Katherine Jeanmillette Rodriguez Menendez"
        anio={2026}
        descripcion="Proyecto de práctica · Guía 14 · Soft12-a · ITCA FEPADE"
      />
    </div>
  )
}

export default App
