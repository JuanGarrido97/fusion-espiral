import Spiral from '@/components/shared/Spiral'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 4 }}>
            <Spiral size={36} stroke="var(--cream)" thickness={1.4} turns={3.4} />
            <h3 className="display" style={{ fontSize: 36, margin: 0 }}>Fusión Espiral</h3>
          </div>
          <p>
            Joyería artesanal hecha en familia. Plata, oro y piedras de Chile,
            forjadas a mano en un taller pequeño de Santiago.
          </p>
        </div>
        <div className="footer__col">
          <h4>Tienda</h4>
          <ul>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#categorias">Categorías</a></li>
            <li><a href="https://wa.me/56900000000?text=Hola%2C%20me%20gustar%C3%ADa%20un%20dise%C3%B1o%20a%20medida%20%E2%9C%A8" target="_blank" rel="noopener noreferrer">Diseño a medida</a></li>
            <li><a href="#contacto">Tarjeta de regalo</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Información</h4>
          <ul>
            <li><a href="#envios">Envíos</a></li>
            <li><a href="#contacto">Cuidado de piezas</a></li>
            <li><a href="#contacto">Cambios y garantía</a></li>
            <li><a href="#historia">Sobre nosotros</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Síguenos</h4>
          <ul>
            <li><a href="https://www.instagram.com/fusion.espiral_joyas/" target="_blank" rel="noopener noreferrer">Instagram · @fusion.espiral</a></li>
            <li><a href="https://wa.me/56900000000" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href="mailto:hola@fusionespiral.cl">Email</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 Fusión Espiral · Familia Garrido · Santiago de Chile</span>
        <span>Hecho con paciencia y martillo</span>
      </div>
      <div className="footer__hugespiral">
        <h2 className="footer__huge">fusión espiral</h2>
      </div>
    </footer>
  )
}
