import React, { useState } from 'react';

const MENU_DATA = {
  "EMPANADAS 🥟": [
    { name: "POLLO", price: "RD$60.00", desc: "Pollo sazonado y desmenuzado, jugoso y lleno de sabor." },
    { name: "JAMÓN Y QUESO", price: "RD$60.00", desc: "Jamón de calidad y queso fundido en cada bocado." },
    { name: "PIZZA", price: "RD$60.00", desc: "Salsa de pizza con queso mozzarella derretido." },
    { name: "POLLO QUESO Y MAÍZ", price: "RD$60.00", desc: "Pollo desmenuzado con queso y maíz dulce." },
    { name: "4 QUESOS", price: "RD$60.00", desc: "Mezcla de 4 quesos cremosos que te encantarán." },
    { name: "POLLO ÁRABE", price: "RD$60.00", desc: "Empanada de pollo picantico con queso." },
    { name: "LASAÑA", price: "RD$100.00", desc: "Res, queso y salsa, una bomba de sabor." },
    { name: "COSTILLA", price: "RD$100.00", desc: "Costilla de res desmenuzada con queso fundido." },
    { name: "HUEVO", price: "RD$60.00", desc: "Empanada rellena de huevo sazonado." },
    { name: "POLLO Y QUESO", price: "RD$60.00", desc: "Pollo sazonado con abundante queso fundido." }
  ],
  "OTROS MUNCHIES 🍔": [
    { name: "CLUB SANDWICH", price: "RD$350.00", desc: "Pan tostado, pollo, jamón, queso, lechuga, tomate y mayonesa. Servido con papas fritas." },
    { name: "HAMBURGUESA BACON CHEESE", price: "RD$500.00", desc: "Jugosa carne de res, queso, tocineta ahumada, lechuga, tomate, cebolla y salsas." },
    { name: "HAMBURGUESA CLÁSICA", price: "RD$450.00", desc: "Jugosa carne de res, queso, lechuga, tomate, cebolla y salsas clásicas." },
    { name: "HUEVO BURGUER", price: "RD$500.00", desc: "Hamburguesa con queso, tocineta ahumada y huevo frito." },
    { name: "MORDISKO CRISPY CHICKEN", price: "RD$480.00", desc: "Pechuga de pollo empanizada súper crujiente, queso, lechuga, tomate y salsa especial." },
    { name: "HOT DOG TRADICIONAL", price: "RD$150.00", desc: "Pan de hot dog, salchicha premium, repollo, carne molida, ketchup, mayonesa y mostaza." },
    { name: "HOT DOG FULL QUESO", price: "RD$190.00", desc: "Pan de hot dog, salchicha premium, carne molida, salsas y FULL QUESO." },
    { name: "QUESADILLA DE POLLO", price: "RD$380.00", desc: "Tortilla de harina dorada a la plancha rellena de pollo, queso derretido y salsas." },
    { name: "QUESADILLA DE RES", price: "RD$380.00", desc: "Tortilla de harina dorada rellena de carne de res sazonada y queso derretido." },
    { name: "QUESADILLA MIXTA", price: "RD$395.00", desc: "Pollo y carne de res sazonados con abundante queso derretido." },
    { name: "TACOS DE POLLO", price: "RD$195.00", desc: "2 tortillas, pollo sazonado, lechuga, tomate, cebolla y queso." },
    { name: "TACOS DE RES", price: "RD$230.00", desc: "2 tortillas, carne de res sazonada, lechuga, tomate, cebolla y queso." },
    { name: "TACOS MIXTOS", price: "RD$250.00", desc: "2 tortillas con pollo y carne de res, lechuga, tomate, cebolla y queso." },
    { name: "TACOS POLLO ÁRABE", price: "RD$280.00", desc: "Pollo sazonado al estilo árabe picantoso, vegetales frescos y queso." },
    { name: "BURRITO DE POLLO", price: "RD$380.00", desc: "Tortilla de harina con pollo sazonado, queso, lechuga, tomate, cebolla y salsas." },
    { name: "BURRITO DE RES", price: "RD$350.00", desc: "Tortilla de harina con carne de res sazonada, queso, lechuga, tomate, cebolla y salsas." },
    { name: "BURRITO POLLO ÁRABE", price: "RD$400.00", desc: "Tortilla de harina con pollo picante, queso, lechuga, tomate, cebolla y salsas." },
    { name: "BURRITO MIXTO", price: "RD$400.00", desc: "Pollo y carne de res con queso, lechuga, tomate, cebolla y salsas." }
  ],
  "PA LOS FIT 🥗": [
    { name: "ENSALADA MORDISKO", price: "RD$380.00", desc: "Versión especial de la ensalada César con lechuga, pollo, crutones, salsa César y queso fundido." },
    { name: "PECHUGA A LA PLANCHA", price: "RD$450.00", desc: "Pechuga de pollo sazonada a la plancha. Acompañada de ensalada verde o papas fritas." },
    { name: "PECHUGA AL LIMÓN", price: "RD$450.00", desc: "Pechuga a la plancha bañada en salsa de limón. Acompañada de ensalada verde o papas fritas." },
    { name: "PECHUGA A LA CREMA", price: "RD$450.00", desc: "Jugosa pechuga de pollo bañada en una suculenta y cremosa salsa de la casa. Acompañada de ensalada verde o papas fritas." }
  ],
  "PA PICAR 🍟": [
    { name: "CROQUETA DE POLLO", price: "RD$50.00", desc: "Relleno cremoso de pollo sazonado, empanizadas y fritas hasta lograr un exterior crujiente." },
    { name: "QUIPES DE RES", price: "RD$50.00", desc: "Crujientes quipes dorados de trigo y carne de res sazonada." },
    { name: "MOZZARELLA STICK", price: "RD$150.00", desc: "4 palitos de mozzarella crujientes por fuera y cremosos por dentro, acompañados de salsa de la casa." }
  ],
  "LA COMPETENCIA DE LOS CHINOS 🍗": [
    { name: "PICA POLLO", price: "RD$290.00", desc: "2 piezas de pollo frito acompañadas con papas fritas." },
    { name: "PICA POLLO 4 PIEZAS", price: "RD$580.00", desc: "4 piezas de pollo frito acompañadas con papas fritas." },
    { name: "PECHURINA AL LIMÓN", price: "RD$395.00", desc: "5 pechurinas llenas de sabor bañadas en toque de limón." }
  ]
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ backgroundColor: '#121212', color: '#FFFFFF', minHeight: '100vh', fontFamily: 'sans-serif', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#FFD700', fontSize: '2.5rem', margin: '10px 0 5px 0', letterSpacing: '2px' }}>MORDISKO</h1>
        <p style={{ color: '#AAAAAA', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>EMPANADAS &amp; MUNCHIES</p>
      </header>

      <div style={{ maxWidth: '600px', margin: '0 auto 30px auto' }}>
        <input
          type="text"
          placeholder="🔎 Buscar en el menú..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 20px',
            borderRadius: '25px',
            border: '2px solid #FFD700',
            backgroundColor: '#1E1E1E',
            color: '#FFF',
            fontSize: '1rem',
            outline: 'none'
          }}
        />
      </div>

      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        {Object.keys(MENU_DATA).map((category) => {
          const filteredItems = MENU_DATA[category].filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (filteredItems.length === 0) return null;

          return (
            <section key={category} style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#FFD700', borderBottom: '1px solid #333', paddingBottom: '8px', marginBottom: '20px' }}>
                {category}
              </h2>
              <div style={{ display: 'grid', gap: '15px' }}>
                {filteredItems.map((item, index) => (
                  <div key={index} style={{ backgroundColor: '#1E1E1E', borderRadius: '12px', padding: '15px', border: '1px solid #333' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#FFF' }}>{item.name}</h3>
                      <span style={{ backgroundColor: '#FFD700', color: '#000', fontWeight: 'bold', padding: '4px 8px', borderRadius: '6px', fontSize: '0.9rem' }}>
                        {item.price}
                      </span>
                    </div>
                    <p style={{ margin: 0, color: '#AAA', fontSize: '0.9rem' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
