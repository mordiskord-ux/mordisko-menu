import React, { useMemo, useState } from 'react';

const MENU_DATA = {
  "EMPANADAS 🥟": [
    { name: "POLLO", price: "RD$60.00", desc: "Pollo sazonado y desmenuzado, jugoso y lleno de sabor." },
    { name: "JAMÓN Y QUESO", price: "RD$60.00" },
    { name: "PIZZA", price: "RD$60.00" },
    { name: "POLLO QUESO Y MAÍZ", price: "RD$60.00" },
    { name: "4 QUESOS", price: "RD$60.00" },
    { name: "POLLO ÁRABE", price: "RD$60.00" },
    { name: "LASAÑA", price: "RD$100.00" },
    { name: "COSTILLA", price: "RD$100.00" },
    { name: "HUEVO", price: "RD$60.00" },
    { name: "POLLO Y QUESO", price: "RD$60.00" }
  ],
  "OTROS MUNCHIES 🍔": [
    { name: "CLUB SANDWICH", price: "RD$350.00", desc: "Pan tostado, pollo, jamón, queso, lechuga, tomate y mayonesa. Servido con papas fritas." },
    { name: "HAMBURGUESA BACON CHEESE", price: "RD$500.00" },
    { name: "HAMBURGUESA CLÁSICA", price: "RD$450.00" },
    { name: "HUEVO BURGUER", price: "RD$500.00" },
    { name: "MORDISKO CRISPY CHICKEN", price: "RD$480.00" },
    { name: "HOT DOG TRADICIONAL", price: "RD$150.00" },
    { name: "HOT DOG FULL QUESO", price: "RD$190.00" },
    { name: "QUESADILLA DE POLLO", price: "RD$380.00" },
    { name: "QUESADILLA DE RES", price: "RD$380.00" },
    { name: "QUESADILLA MIXTA", price: "RD$395.00" },
    { name: "TACOS DE POLLO", price: "RD$195.00" },
    { name: "TACOS DE RES", price: "RD$230.00" },
    { name: "TACOS MIXTOS", price: "RD$250.00" },
    { name: "TACOS POLLO ÁRABE", price: "RD$280.00" },
    { name: "BURRITO DE POLLO", price: "RD$380.00" },
    { name: "BURRITO DE RES", price: "RD$350.00" },
    { name: "BURRITO POLLO ÁRABE", price: "RD$400.00" },
    { name: "BURRITO MIXTO", price: "RD$400.00" },
    { name: "ALITAS BBQ", price: "RD$395.00" },
    { name: "ALITAS RANCH", price: "RD$395.00" },
    { name: "ALITAS PICANTES", price: "RD$395.00" },
    { name: "ALITAS MIEL PICANTE", price: "RD$395.00" },
    { name: "ALITAS AJO", price: "RD$395.00" }
  ],
  "PA LOS FIT 🥗": [
    { name: "ENSALADA MORDISKO", price: "RD$380.00" },
    { name: "PECHUGA A LA PLANCHA", price: "RD$450.00" },
    { name: "PECHUGA AL LIMÓN", price: "RD$450.00" },
    { name: "PECHUGA A LA CREMA", price: "RD$450.00" }
  ],
  "PA PICAR 🍟": [
    { name: "CROQUETA DE POLLO", price: "RD$50.00" },
    { name: "QUIPES DE RES", price: "RD$50.00" },
    { name: "MOZZARELLA STICK", price: "RD$150.00" }
  ],
  "LA COMPETENCIA DE LOS CHINOS 🍗": [
    { name: "PICA POLLO", price: "RD$290.00" },
    { name: "PICA POLLO 4 PIEZAS", price: "RD$580.00" },
    { name: "PECHURINA AL LIMÓN", price: "RD$395.00" }
  ]
};

export default function Home() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return MENU_DATA;
    return Object.fromEntries(
      Object.entries(MENU_DATA)
        .map(([category, items]) => [category, items.filter(item => `${item.name} ${item.desc || ''}`.toLowerCase().includes(term))])
        .filter(([, items]) => items.length)
    );
  }, [search]);

  return (
    <main className="page">
      <div className="glow glowOne" />
      <div className="glow glowTwo" />

      <header className="hero">
        <div className="logoMark" aria-label="Mordisko">
          <span>M</span>
        </div>
        <div className="brand">MORDISKO</div>
        <div className="tagline">SABOR QUE SE MORDISKEA</div>
        <div className="goldLine" />
        <h1>NUESTRO MENÚ</h1>
        <p>Elige tu favorito y disfruta el sabor Mordisko.</p>
      </header>

      <div className="searchWrap">
        <span className="searchIcon">⌕</span>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="¿Qué se te antoja hoy?"
          aria-label="Buscar en el menú"
        />
        {search && <button onClick={() => setSearch('')} aria-label="Limpiar búsqueda">×</button>}
      </div>

      <div className="menu">
        {Object.entries(filtered).map(([category, items]) => (
          <section className="category" key={category}>
            <div className="categoryTitle">
              <span>{category}</span>
              <i />
            </div>
            <div className="itemsGrid">
              {items.map((item, index) => (
                <article className="card" key={`${item.name}-${index}`}>
                  <div className="cardTop">
                    <h2>{item.name}</h2>
                    <strong>{item.price}</strong>
                  </div>
                  {item.desc && <p>{item.desc}</p>}
                </article>
              ))}
            </div>
          </section>
        ))}
        {!Object.keys(filtered).length && (
          <div className="empty">No encontramos ese antojo 😕</div>
        )}
      </div>

      <footer>MORDISKO · HECHO PARA MORDERSE LOS DEDOS</footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        html, body, #__next { margin: 0; min-height: 100%; }
        body { background: #090909; color: #fff; font-family: Arial, Helvetica, sans-serif; }
        button, input { font: inherit; }
        .page {
          min-height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 34px clamp(18px, 4vw, 70px) 28px;
          background: radial-gradient(circle at top, #252000 0, #111 30%, #090909 72%);
        }
        .glow { position: absolute; width: 420px; height: 420px; border-radius: 50%; filter: blur(90px); opacity: .12; pointer-events: none; background: #FFD700; }
        .glowOne { top: -250px; left: -180px; }
        .glowTwo { bottom: -280px; right: -170px; }
        .hero { position: relative; text-align: center; max-width: 1200px; margin: 0 auto 24px; }
        .logoMark {
          width: 76px; height: 76px; margin: 0 auto 9px; border: 3px solid #FFD700; border-radius: 50%; display: grid; place-items: center;
          box-shadow: 0 0 30px rgba(255,215,0,.2), inset 0 0 18px rgba(255,215,0,.08);
        }
        .logoMark span { color: #FFD700; font-weight: 900; font-size: 46px; line-height: 1; font-style: italic; }
        .brand { color: #FFD700; font-size: clamp(36px, 6vw, 68px); line-height: .95; font-weight: 950; letter-spacing: .08em; font-style: italic; text-shadow: 0 4px 22px rgba(255,215,0,.16); }
        .tagline { margin-top: 9px; color: #d7d7d7; font-size: 11px; letter-spacing: .28em; font-weight: 700; }
        .goldLine { width: 90px; height: 3px; background: #FFD700; margin: 18px auto 15px; border-radius: 99px; }
        .hero h1 { margin: 0; font-size: clamp(24px, 3vw, 36px); letter-spacing: .04em; }
        .hero p { color: #aaa; margin: 7px 0 0; font-size: 14px; }
        .searchWrap {
          position: relative; max-width: 920px; margin: 0 auto 38px; display: flex; align-items: center;
          background: #171717; border: 1px solid #333; border-radius: 16px; min-height: 58px; box-shadow: 0 12px 35px rgba(0,0,0,.35);
        }
        .searchWrap:focus-within { border-color: #FFD700; box-shadow: 0 0 0 3px rgba(255,215,0,.08), 0 12px 35px rgba(0,0,0,.35); }
        .searchIcon { color: #FFD700; font-size: 28px; margin-left: 18px; transform: rotate(-20deg); }
        .searchWrap input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; color: #fff; padding: 0 14px; font-size: 16px; }
        .searchWrap input::placeholder { color: #777; }
        .searchWrap button { border: 0; background: transparent; color: #888; font-size: 27px; padding: 0 18px; cursor: pointer; }
        .menu { position: relative; max-width: 1500px; margin: 0 auto; }
        .category { margin-bottom: 42px; }
        .categoryTitle { display: flex; align-items: center; gap: 16px; margin-bottom: 17px; color: #FFD700; font-size: clamp(20px, 2vw, 27px); font-weight: 900; letter-spacing: .02em; }
        .categoryTitle i { height: 1px; flex: 1; background: linear-gradient(90deg, rgba(255,215,0,.65), rgba(255,215,0,0)); }
        .itemsGrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
        .card { background: linear-gradient(145deg, #1b1b1b, #111); border: 1px solid #2d2d2d; border-radius: 16px; padding: 19px 20px; min-height: 100px; transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease; }
        .card:hover { transform: translateY(-3px); border-color: rgba(255,215,0,.55); box-shadow: 0 13px 28px rgba(0,0,0,.32); }
        .cardTop { display: flex; align-items: flex-start; justify-content: space-between; gap: 14px; }
        .card h2 { margin: 0; font-size: 16px; line-height: 1.25; letter-spacing: .025em; }
        .card strong { flex: 0 0 auto; color: #111; background: #FFD700; border-radius: 999px; padding: 7px 10px; font-size: 13px; white-space: nowrap; }
        .card p { margin: 11px 0 0; color: #999; font-size: 13px; line-height: 1.45; }
        .empty { text-align: center; padding: 70px 20px; color: #aaa; font-size: 17px; }
        footer { position: relative; max-width: 1500px; margin: 15px auto 0; padding-top: 22px; border-top: 1px solid #252525; text-align: center; color: #666; font-size: 10px; letter-spacing: .2em; }
        @media (max-width: 1000px) { .itemsGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 620px) {
          .page { padding: 25px 13px 22px; }
          .hero { margin-bottom: 20px; }
          .logoMark { width: 62px; height: 62px; }
          .logoMark span { font-size: 37px; }
          .tagline { font-size: 9px; letter-spacing: .18em; }
          .hero p { font-size: 13px; }
          .searchWrap { min-height: 52px; margin-bottom: 30px; border-radius: 14px; }
          .itemsGrid { grid-template-columns: 1fr; gap: 10px; }
          .category { margin-bottom: 31px; }
          .categoryTitle { font-size: 19px; }
          .card { padding: 16px; }
        }
      `}</style>
    </main>
  );
}
