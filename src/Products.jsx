import { useMemo, useState } from 'react'
import './Products.css'
const catalogImages = import.meta.glob('./assets/catalog/*.svg', { eager: true, import: 'default', query: '?url' })

const phoneNumber = '2349133490360'
const productGroups = [
  ['Laptops', [
    ['HP', '250 G8', '15.6in business laptop, Core i3, 8GB RAM'], ['HP', 'ProBook 440 G8', '14in Core i5 laptop for work and study'], ['HP', 'EliteBook 840 G7', 'Premium 14in Core i5 business laptop'], ['Dell', 'Latitude 3420', '14in Core i5 laptop, 8GB RAM'], ['Dell', 'Inspiron 15 3511', '15.6in everyday laptop for home and school'], ['Dell', 'Vostro 3400', '14in Core i5 business laptop'], ['Lenovo', 'ThinkPad T480', '14in durable business laptop'], ['Lenovo', 'IdeaPad 3 15ITL6', '15.6in Core i5 everyday laptop'], ['Lenovo', 'Yoga 7', '14in touchscreen 2-in-1 laptop'], ['Apple', 'MacBook Air M1', '13.3in Apple Silicon laptop'], ['Acer', 'Aspire 5 A515', '15.6in productivity laptop'], ['Asus', 'VivoBook 15', '15.6in slim everyday laptop'],
  ]],
  ['Phones', [
    ['Apple', 'iPhone 11', '64GB smartphone with dual camera'], ['Apple', 'iPhone 12', '64GB 5G smartphone'], ['Apple', 'iPhone 13', '128GB 5G smartphone'], ['Samsung', 'Galaxy A14', '128GB Android smartphone'], ['Samsung', 'Galaxy A24', '128GB AMOLED Android smartphone'], ['Samsung', 'Galaxy A54', '5G smartphone with 50MP camera'], ['Samsung', 'Galaxy S21', 'Flagship 5G smartphone'], ['Tecno', 'Camon 20', 'Camera-first Android smartphone'], ['Tecno', 'Spark 10', 'Affordable everyday smartphone'], ['Infinix', 'Hot 30', 'Large-display Android smartphone'], ['Infinix', 'Note 30', 'Fast-charge performance smartphone'], ['Redmi', 'Note 12', 'AMOLED Android smartphone'],
  ]],
  ['Accessories', [
    ['Anker', 'PowerCore 20K', '20,000mAh portable power bank'], ['Oraimo', 'PowerBox 10K', 'Compact fast-charge power bank'], ['JBL', 'Tune 510BT', 'Wireless on-ear headphones'], ['Sony', 'WH-CH520', 'Wireless headphones with long battery'], ['Logitech', 'M185 Mouse', 'Reliable wireless office mouse'], ['Logitech', 'K120 Keyboard', 'USB keyboard for desktop work'], ['TP-Link', 'Archer C6', 'AC1200 dual-band Wi-Fi router'], ['Ubiquiti', 'UniFi AP AC Lite', 'Wireless access point for coverage'], ['Baseus', 'USB-C Hub 6-in-1', 'HDMI and USB-C laptop hub'], ['UGREEN', '100W USB-C Charger', 'Multi-port GaN fast charger'], ['Sandisk', 'Ultra 128GB', 'MicroSD memory card'], ['WD', '1TB Elements', 'Portable external hard drive'],
  ]],
  ['CCTV & Security', [
    ['Hikvision', 'DS-2CE16D0T', '2MP outdoor bullet CCTV camera'], ['Hikvision', 'DS-2CD1023G0', '2MP IP network bullet camera'], ['Hikvision', 'DS-2CD2143G0', '4MP outdoor dome IP camera'], ['Dahua', 'HAC-HFW1200T', '2MP HDCVI outdoor bullet camera'], ['Dahua', 'IPC-HFW1230S', '2MP IP bullet security camera'], ['Dahua', 'IPC-HDW2431T', '4MP IP dome camera'], ['TP-Link', 'Tapo C200', 'Pan and tilt indoor Wi-Fi camera'], ['TP-Link', 'Tapo C210', '3MP indoor pan and tilt camera'], ['Ezviz', 'C6N', 'Smart indoor Wi-Fi camera'], ['Ezviz', 'H8C', 'Outdoor pan and tilt smart camera'], ['Hikvision', 'DS-7608NI-K2', '8-channel NVR security recorder'], ['Dahua', 'XVR1B08-I', '8-channel hybrid DVR recorder'],
  ]],
  ['Printers', [
    ['HP', 'LaserJet Pro M15w', 'Compact wireless monochrome printer'], ['HP', 'DeskJet 2710', 'Wireless colour all-in-one printer'], ['HP', 'LaserJet 107a', 'Fast monochrome office printer'], ['Canon', 'PIXMA G3420', 'Refillable ink tank all-in-one printer'], ['Canon', 'PIXMA TS3440', 'Wireless colour home printer'], ['Epson', 'L3250 EcoTank', 'Wi-Fi refillable ink tank printer'], ['Epson', 'L8050', 'Six-colour photo ink tank printer'], ['Brother', 'HL-L2320D', 'Duplex monochrome laser printer'], ['Brother', 'DCP-T420W', 'Wireless ink tank all-in-one printer'], ['Xerox', 'B210', 'Compact wireless monochrome printer'],
  ]],
  ['Tablets & Wearables', [
    ['Apple', 'iPad 9th Gen', '10.2in tablet for school and work'], ['Apple', 'iPad 10th Gen', '10.9in colourful productivity tablet'], ['Samsung', 'Galaxy Tab A8', '10.5in Android tablet'], ['Samsung', 'Galaxy Tab S6 Lite', '10.4in tablet with S Pen support'], ['Tecno', 'MegaPad 10', '10in Android entertainment tablet'], ['Xiaomi', 'Redmi Pad SE', '11in high-refresh Android tablet'], ['Apple', 'Apple Watch SE', 'Smartwatch for everyday activity'], ['Samsung', 'Galaxy Watch 5', 'Health and fitness smartwatch'], ['Amazfit', 'Bip 5', 'Large-screen fitness smartwatch'], ['Oraimo', 'Watch 5 Lite', 'Affordable smart fitness watch'],
  ]],
]

const products = productGroups.flatMap(([category, items], groupIndex) => items.map(([brand, model, description], index) => ({
  id: `${category}-${brand}-${model}`,
  slug: `${brand}-${model}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
  category,
  brand,
  model,
  description,
  image: catalogImages[`./assets/catalog/${`${brand}-${model}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.svg`],
  number: index + 1,
  variant: groupIndex * 12 + index,
})))

const categories = ['All products', ...productGroups.map(([category]) => category)]
const whatsappFor = (product) => `https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hello Chimex Digital World, is the ${product.brand} ${product.model} available?`)}`
const visualStyle = (variant) => ({
  '--product-bg': `hsl(${(variant * 47) % 360} 24% ${variant % 2 ? 88 : 82}%)`,
  '--image-position': `${18 + ((variant * 17) % 64)}% ${18 + ((variant * 29) % 64)}%`,
})

const buyingGuides = [
  ['01', 'Match the workload', 'For everyday work, 8GB RAM is a useful floor. Creative work, heavy spreadsheets, and editing need more headroom.'],
  ['02', 'Check used-device health', 'Ask about battery health, charging, keyboard, ports, screen marks, and whether the device has been repaired.'],
  ['03', 'Confirm the exact storage', 'Make sure the listed SSD, hard drive, or phone storage matches what you need and ask if it can be upgraded.'],
  ['04', 'Verify a phone before paying', 'Check the IMEI, network compatibility, account lock status, cameras, speakers, charging port, and included accessories.'],
  ['05', 'Price the printer system', 'Ink or toner cost matters as much as the printer price. Ask about refill options and expected page volume.'],
  ['06', 'Know what is in the box', 'Confirm whether a charger, adapter, remote, cables, battery, mouse, or keyboard is included before comparing prices.'],
  ['07', 'Plan CCTV as a system', 'Ask about night vision, camera resolution, storage days, cable length, power, installation, and whether the recorder is included.'],
  ['08', 'Size Wi-Fi for the space', 'The right router depends on walls, floor area, connected devices, and internet speed, not just the advertised number.'],
  ['09', 'Test before you leave', 'For used electronics, test the display, camera, audio, Wi-Fi, Bluetooth, ports, charging, and any biometric features.'],
  ['10', 'Get the final terms', 'Before payment, confirm current stock, final price, condition, warranty, returns, delivery cost, and who to contact after purchase.'],
]

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All products')
  const [query, setQuery] = useState('')
  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = activeCategory === 'All products' || product.category === activeCategory
    const searchable = `${product.brand} ${product.model} ${product.description} ${product.category}`.toLowerCase()
    return matchesCategory && searchable.includes(query.toLowerCase())
  }), [activeCategory, query])

  return (
    <main className="products-page">
      <div className="announcement">Ibadan's neighborhood tech desk <span>•</span> Open Mon–Sat, 8am–6pm</div>
      <nav className="nav products-nav wrap">
        <a className="brand" href="/" aria-label="Chimex Digital World home"><span className="brand-mark">C</span><span>Chimex <b>Digital World</b></span></a>
        <div className="products-nav-links"><a href="/">Home</a><a className="active" href="/products">Products</a><a href="/#services">Services</a></div>
        <a className="call-button" href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noreferrer">WhatsApp us <span>↗</span></a>
      </nav>

      <header className="products-hero wrap">
        <div><p className="eyebrow">The Chimex shelf</p><h1>Find your<br /><em>next upgrade.</em></h1><p>Browse {products.length} products across computers, phones, accessories, CCTV security, printers, and more. Message us for today's stock and prices.</p></div>
        <div className="catalog-stamp"><strong>{products.length}</strong><span>different<br />models</span></div>
      </header>

      <section className="catalog wrap">
        <div className="catalog-tools"><label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search model, brand or category" aria-label="Search products" /></label><span className="result-count">Showing {visibleProducts.length} of {products.length}</span></div>
        <div className="category-filters" aria-label="Product categories">{categories.map((category) => <button className={activeCategory === category ? 'filter-button active' : 'filter-button'} type="button" key={category} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
        <div className="catalog-grid">{visibleProducts.map((product) => <article className="catalog-card" key={product.id}><div className={`catalog-image visual-${product.variant % 4}`} style={visualStyle(product.variant)}><img src={product.image} alt={`Product image for ${product.brand} ${product.model}`} /><span>{String(product.number).padStart(2, '0')}</span><b>{product.category}</b></div><div className="catalog-details"><p>{product.brand}</p><h2>{product.model}</h2><span>{product.description}</span><small>Exact model image • confirm unit and stock</small><a href={whatsappFor(product)} target="_blank" rel="noreferrer">Ask on WhatsApp <strong>↗</strong></a></div></article>)}</div>
        {visibleProducts.length === 0 && <div className="empty-results"><strong>No exact match yet.</strong><span>Try a brand, model, or category like “CCTV”.</span></div>}
      </section>

      <section className="guides wrap" id="buying-guide"><div className="guides-heading"><div><p className="eyebrow">Straight answers</p><h2>10 honest ways<br /><em>to buy smarter.</em></h2></div><p>Stock, prices, condition, and model availability can change. These are the questions worth asking before you pay.</p></div><div className="guides-grid">{buyingGuides.map(([number, title, copy]) => <article className="guide-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <footer className="products-footer wrap"><div className="footer-brand"><span className="brand-mark">C</span><p>Need a recommendation?<br /><b>We are one message away.</b></p></div><a className="button button-dark" href={`https://wa.me/${phoneNumber}?text=Hello%20Chimex%20Digital%20World%2C%20I%27d%20like%20a%20product%20recommendation.`} target="_blank" rel="noreferrer">Chat with the shop ↗</a></footer>
      <a className="whatsapp-float" href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noreferrer" aria-label="Chat with Chimex Digital World on WhatsApp"><span className="whatsapp-icon">◔</span><span>Chat on WhatsApp</span></a>
    </main>
  )
}

export default ProductsPage
