import './App.css'
import laptopImage from './assets/products/laptop.jpg'
import phoneImage from './assets/products/phone.jpg'
import headphonesImage from './assets/products/headphones.jpg'
import cameraImage from './assets/products/camera.jpg'
import tabletImage from './assets/products/tablet.jpg'
import keyboardImage from './assets/products/keyboard.jpg'
import printerImage from './assets/products/printer.jpg'
import smartwatchImage from './assets/products/smartwatch.jpg'
import ProductsPage from './Products.jsx'

const whatsappLink = 'https://wa.me/2349133490360?text=Hello%20Chimex%20Digital%20World%2C%20I%27d%20like%20to%20ask%20about%20your%20products.'

function App() {
  if (window.location.pathname === '/products') {
    return <ProductsPage />
  }

  return (
    <main>
      <div className="announcement">Ibadan's neighborhood tech desk <span>•</span> Open Mon–Sat, 8am–6pm</div>
      <nav className="nav wrap">
        <a className="brand" href="#top" aria-label="Chimex Digital World home">
          <span className="brand-mark">C</span>
          <span>Chimex <b>Digital World</b></span>
        </a>
        <div className="nav-links">
          <a href="/products">Shop</a>
          <a href="#services">Services</a>
          <a href="#visit">Visit us</a>
        </div>
        <a className="call-button" href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp us <span>↗</span></a>
      </nav>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Computer store · Photo shop · Delivery</p>
          <h1>Good tech.<br /><em>Right here.</em></h1>
          <p className="hero-intro">From a dependable laptop to the cable you forgot you needed. Find the essentials, get straight answers, and leave ready for what's next.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#shop">Browse the essentials <span>↓</span></a>
            <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Iya-Olobe+Road+Ekotedo+Dugbe+Ibadan" target="_blank" rel="noreferrer">Find us in Dugbe ↗</a>
          </div>
        </div>
        <div className="hero-image" aria-label="Laptop and workspace accessories">
          <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85" alt="Laptop on a desk beside a camera and notebook" />
          <div className="image-note"><span>01</span><b>Tools for<br />moving forward</b></div>
          <div className="scribble">Dugbe<br />⇢ Ibadan</div>
        </div>
      </section>

      <section className="ticker"><div className="wrap ticker-inner"><span>New & used devices</span><i>✳</i><span>Accessories that last</span><i>✳</i><span>Prints & photo services</span><i>✳</i><span>Local delivery</span></div></section>

      <section className="shop wrap" id="shop">
        <div className="section-heading"><div><p className="eyebrow">Start here</p><h2>Pick your next essential.</h2></div><p>Practical tech for work, study, creating, and staying connected.</p></div>
        <div className="category-grid">
          <a className="category-card card-blue" href={whatsappLink} target="_blank" rel="noreferrer"><span className="card-number">01 / 04</span><div className="category-icon laptop-icon">▱</div><h3>Computers</h3><p>Laptops, desktops & reliable upgrades</p><span className="card-arrow">↗</span></a>
          <a className="category-card card-yellow" href={whatsappLink} target="_blank" rel="noreferrer"><span className="card-number">02 / 04</span><div className="category-icon">◉</div><h3>Mobile</h3><p>New & pre-loved phones, ready to go</p><span className="card-arrow">↗</span></a>
          <a className="category-card card-red" href={whatsappLink} target="_blank" rel="noreferrer"><span className="card-number">03 / 04</span><div className="category-icon">⌁</div><h3>Accessories</h3><p>Cables, chargers, audio & more</p><span className="card-arrow">↗</span></a>
          <a className="category-card card-paper" href={whatsappLink} target="_blank" rel="noreferrer"><span className="card-number">04 / 04</span><div className="category-icon">▣</div><h3>Photo shop</h3><p>Prints, passport photos & quick service</p><span className="card-arrow">↗</span></a>
        </div>
        <div className="products-heading"><div><p className="eyebrow">A few good things</p><h2>In stock now.</h2></div><a className="text-link" href={whatsappLink} target="_blank" rel="noreferrer">Ask on WhatsApp ↗</a></div>
        <div className="product-grid">
          <a className="product-card" href={whatsappLink} target="_blank" rel="noreferrer"><div className="product-image"><img src={laptopImage} alt="Laptop computer on a desk" /><span>01</span></div><div className="product-meta"><div><h3>Everyday laptops</h3><p>For work, study & getting things done</p></div><b>Ask price ↗</b></div></a>
          <a className="product-card" href={whatsappLink} target="_blank" rel="noreferrer"><div className="product-image"><img src={phoneImage} alt="Smartphone held in a hand" /><span>02</span></div><div className="product-meta"><div><h3>Smartphones</h3><p>New & pre-loved, checked and ready</p></div><b>Ask price ↗</b></div></a>
          <a className="product-card" href={whatsappLink} target="_blank" rel="noreferrer"><div className="product-image"><img src={headphonesImage} alt="Wireless headphones" /><span>03</span></div><div className="product-meta"><div><h3>Audio & accessories</h3><p>Chargers, cables, headphones & more</p></div><b>Ask price ↗</b></div></a>
          <a className="product-card" href={whatsappLink} target="_blank" rel="noreferrer"><div className="product-image"><img src={cameraImage} alt="Digital camera" /><span>04</span></div><div className="product-meta"><div><h3>Photo essentials</h3><p>Cameras, prints & passport photos</p></div><b>Ask price ↗</b></div></a>
          <a className="product-card" href={whatsappLink} target="_blank" rel="noreferrer"><div className="product-image"><img src={tabletImage} alt="Tablet computer" /><span>05</span></div><div className="product-meta"><div><h3>Tablets</h3><p>Portable screens for work and play</p></div><b>Ask price ↗</b></div></a>
          <a className="product-card" href={whatsappLink} target="_blank" rel="noreferrer"><div className="product-image"><img src={keyboardImage} alt="Computer keyboard" /><span>06</span></div><div className="product-meta"><div><h3>Desk setup</h3><p>Keyboards, mice and useful upgrades</p></div><b>Ask price ↗</b></div></a>
          <a className="product-card" href={whatsappLink} target="_blank" rel="noreferrer"><div className="product-image"><img src={printerImage} alt="Desktop printer" /><span>07</span></div><div className="product-meta"><div><h3>Printers</h3><p>Home, office and photo printing</p></div><b>Ask price ↗</b></div></a>
          <a className="product-card" href={whatsappLink} target="_blank" rel="noreferrer"><div className="product-image"><img src={smartwatchImage} alt="Smartwatch" /><span>08</span></div><div className="product-meta"><div><h3>Smart wearables</h3><p>Stay connected wherever you go</p></div><b>Ask price ↗</b></div></a>
        </div>
      </section>

      <section className="services" id="services"><div className="wrap services-inner"><div><p className="eyebrow">More than a counter</p><h2>Whatever you’re<br /><em>working on,</em> let’s help.</h2></div><div className="service-list"><div><span>01</span><b>Honest guidance</b><p>No jargon. Just a recommendation that fits.</p></div><div><span>02</span><b>Ready when you are</b><p>Pop in, call ahead, or ask about delivery.</p></div><div><span>03</span><b>Made for Ibadan</b><p>A friendly local shop in the heart of Dugbe.</p></div></div></div></section>

      <footer className="footer wrap" id="visit"><div className="footer-brand"><span className="brand-mark">C</span><p>Small shop.<br /><b>Big possibilities.</b></p></div><div className="footer-info"><div><span className="footer-label">Find us</span><p>Iya-Olobe Road, Ekotedo<br />Dugbe, Ibadan 200113</p><a href="https://www.google.com/maps/search/?api=1&query=Iya-Olobe+Road+Ekotedo+Dugbe+Ibadan" target="_blank" rel="noreferrer">Get directions ↗</a></div><div><span className="footer-label">Chat with us</span><p><a href={whatsappLink} target="_blank" rel="noreferrer">09133490360</a><br />Mon–Sat · 8am–6pm</p><a href={whatsappLink} target="_blank" rel="noreferrer">Ask about delivery ↗</a></div></div><div className="footer-bottom"><span>© 2026 Chimex Digital World</span><span>Built local. Used everywhere.</span></div></footer>
      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Chat with Chimex Digital World on WhatsApp"><span className="whatsapp-icon">◔</span><span>Chat on WhatsApp</span></a>
    </main>
  )
}

export default App
