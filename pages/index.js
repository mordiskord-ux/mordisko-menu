import React, { useState } from 'react';

export default function Menu() {
  const [busqueda, setBusqueda] = useState('');

  const menuData = [
    {
      categoria: "EMPANADAS",
      items: [
        { nombre: "POLLO", precio: "RD$60.00", descripcion: "Pollo sazonado y desmenuzado, jugoso y lleno de sabor." },
        { nombre: "JAMÓN Y QUESO", precio: "RD$60.00", descripcion: "Jamón de calidad y queso fundido en cada bocado." },
        { nombre: "PIZZA", precio: "RD$60.00", descripcion: "Salsa de pizza con queso mozzarella derretido." },
        { nombre: "POLLO QUESO Y MAÍZ", precio: "RD$60.00", descripcion: "Pollo desmenuzado con queso y maíz dulce." },
        { nombre: "4 QUESOS", precio: "RD$60.00", descripcion: "Mezcla de 4 quesos cremosos que te encantarán." },
        { nombre: "POLLO ÁRABE", precio: "RD$60.00", descripcion: "Empanada de pollo picantico con queso." },
        { nombre: "LASAÑA", precio: "RD$100.00", descripcion: "Res, queso y salsa, una bomba de sabor." },
        { nombre: "COSTILLA", precio: "RD$100.00", descripcion: "Costilla de res desmenuzada con queso fundido." },
        { nombre: "HUEVO", precio: "RD$60.00", descripcion: "Empanada rellena de huevo sazonado." },
        { nombre: "POLLO Y QUESO", precio: "RD$60.00", descripcion: "Pollo sazonado con abundante queso fundido." }
      ]
    },
    {
      categoria: "OTROS MUNCHIES",
      items: [
        { nombre: "CLUB SANDWICH", precio: "RD$350.00", descripcion: "Pan tostado, pollo, jamón, queso, lechuga, tomate y mayonesa. Servido con papas fritas." },
        { nombre: "HAMBURGUESA BACON CHEESE", precio: "RD$500.00", descripcion: "Jugosa carne de res, queso, tocineta ahumada, lechuga, tomate, cebolla y salsas." },
        { nombre: "HAMBURGUESA CLÁSICA", precio: "RD$450.00", descripcion: "Jugosa carne de res, queso, lechuga, tomate, cebolla y salsas clásicas." },
        { nombre: "HUEVO BURGUER", precio: "RD$500.00", descripcion: "Hamburguesa con queso, tocineta ahumada y huevo frito." },
        { nombre: "MORDISKO CRISPY CHICKEN", precio: "RD$480.00", descripcion: "Pechuga de pollo empanizada súper crujiente, queso, lechuga, tomate y salsa especial." },
        { nombre: "HOT DOG TRADICIONAL", precio: "RD$150.00", descripcion: "Pan de hot dog, salchicha premium, repollo, carne molida, ketchup, mayonesa y mostaza." },
        { nombre: "HOT DOG FULL QUESO", precio: "RD$190.00", descripcion: "Pan de hot dog, salchicha premium, carne molida, salsas y FULL QUESO." },
        { nombre: "QUESADILLA DE POLLO", precio: "RD$380.00", descripcion: "Tortilla de harina dorada a la plancha rellena de pollo, queso derretido y salsas." },
        { nombre: "QUESADILLA DE RES", precio: "RD$380.00", descripcion: "Tortilla de harina dorada rellena de carne de res sazonada y queso derretido." },
        { nombre: "QUESADILLA MIXTA", precio: "RD$395.00", descripcion: "Pollo y carne de res sazonados con abundante queso derretido." },
        { nombre: "TACOS DE POLLO", precio: "RD$195.00", descripcion: "2 tortillas, pollo sazonado, lechuga, tomate, cebolla y queso." },
        { nombre: "TACOS DE RES", precio: "RD$230.00", descripcion: "2 tortillas, carne de res sazonada, lechuga, tomate, cebolla y queso." },
        { nombre: "TACOS MIXTOS", precio: "RD$250.00", descripcion: "2 tortillas con pollo y carne de res, lechuga, tomate, cebolla y queso." },
        { nombre: "TACOS POLLO ÁRABE", precio: "Precio pendiente", descripcion: "Pollo sazonado al estilo árabe picantoso, vegetales frescos y queso." },
        { nombre: "BURRITO DE POLLO", precio: "RD$380.00", descripcion: "Tortilla de harina con pollo sazonado, queso, lechuga, tomate, cebolla y salsas." },
        { nombre: "BURRITO DE RES", precio: "RD$350.00", descripcion: "Tortilla de harina con carne de res sazonada, queso, lechuga, tomate, cebolla y salsas." },
        { nombre: "BURRITO POLLO ÁRABE", precio: "RD$400.00", descripcion: "Tortilla de harina con pollo picante, queso, lechuga, tomate, cebolla y salsas." },
        { nombre: "BURRITO MIXTO", precio: "RD$400.00", descripcion: "Pollo y carne de res con queso, lechuga, tomate, cebolla y salsas." }
      ]
    },
    {
      categoria: "PA LOS FIT",
      items: [
        { nombre: "ENSALADA MORDISKO", precio: "RD$380.00", descripcion: "Versión especial de la ensalada César con lechuga, pollo, crutones, salsa César y queso fundido." },
        { nombre: "PECHUGA A LA PLANCHA", precio: "RD$450.00", descripcion: "Pechuga de pollo sazonada a la plancha. Acompañada de ensalada verde o papas fritas." },
        { nombre: "PECHUGA AL LIMÓN", precio: "RD$450.00", descripcion: "Pechuga a la plancha bañada en salsa de limón. Acompañada de ensalada verde o papas fritas." },
        { nombre: "PECHUGA A LA CREMA", precio: "RD$450.00", descripcion: "Jugosa pechuga de pollo bañada en una suculenta y cremosa salsa de la casa. Acompañada de ensalada verde o papas fritas." }
      ]
    },
    {
      categoria: "PA PICAR",
      items: [
        { nombre: "CROQUETA DE POLLO", precio: "RD$50.00", descripcion: "Relleno cremoso de pollo sazonado, empanizadas y fritas hasta lograr un exterior crujiente." },
        { nombre: "QUIPES DE RES", precio: "RD$50.00", descripcion: "Crujientes quipes dorados de trigo y carne de res sazonada." },
        { nombre: "MOZZARELLA STICK", precio: "RD$150.00", descripcion: "4 palitos de mozzarella crujientes por fuera y cremosos por dentro, acompañados de salsa de la casa." }
      ]
    },
    {
      categoria: "LA COMPETENCIA DE LOS CHINOS",
      items: [
        { nombre: "PICA POLLO", precio: "RD$290.00", descripcion: "2 piezas de pollo frito acompañadas con papas fritas." },
        { nombre: "PICA POLLO 4 PIEZAS", precio: "RD$580.00", descripcion: "4 piezas de pollo frito acompañadas con papas fritas." },
        { nombre: "PECHURINA AL LIMÓN", precio: "RD$395.00", descripcion: "5 pechurinas llenas de sabor bañadas en toque de limón." }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '25px 15px' }}>
      
      {/* Cabecera con Nombre y Eslogan */}
      <header style={{ textAlign: 'center', marginBottom: '35px' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: '900', 
          fontStyle: 'italic', 
          color: '#FFE600', 
          margin: '0', 
          letterSpacing: '2px'
        }}>
          MORDISKO
        </h1>
        <p style={{ letterSpacing: '4px', color: '#ffffff', fontSize: '0.9rem', marginTop: '5px', fontWeight: 'bold' }}>
          EMPANADAS & MUNCHIES
        </p>
      </header>

      {/* Buscador */}
      <div style={{ textAlign: 'center', marginBottom: '35px' }}>
        <input 
          type="text" 
          placeholder="🔎 Buscar en el menú..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ 
            padding: '12px 20px', 
            width: '90%', 
            maxWidth: '500px', 
            borderRadius: '25px', 
            border: '2px solid #FFE600',
            backgroundColor: '#111111',
            color: '#ffffff',
            fontSize: '1rem',
            outline: 'none'
          }}
        />
      </div>

      {/* Contenedor del menú */}
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {menuData.map((sec, idx) => {
          const itemsFiltrados = sec.items.filter(item => 
            item.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
            item.descripcion.toLowerCase().includes(busqueda.toLowerCase())
          );

          if (itemsFiltrados.length === 0) return null;

          return (
            <div key={idx} style={{ marginBottom: '45px' }}>
              <h2 style={{ 
                borderBottom: '2px solid #FFE600', 
                paddingBottom: '8px', 
                color: '#FFE600', 
                fontSize: '1.6rem',
                fontWeight: 'bold',
                letterSpacing: '1px'
              }}>
                {sec.categoria}
              </h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                gap: '15px', 
                marginTop: '20px' 
              }}>
                {itemsFiltrados.map((item, i) => (
                  <div key={i} style={{ 
                    padding: '16px', 
                    backgroundColor: '#111111', 
                    borderRadius: '12px',
                    border: '1px solid #FFE600',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between'
                  }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '1.05rem', color: '#ffffff' }}>{item.nombre}</span>
                        <span style={{ color: '#FFE600', fontWeight: 'bold', fontSize: '1.05rem', whiteSpace: 'nowrap' }}>{item.precio}</span>
                      </div>
                      <p style={{ fontSize: '0.88rem', color: '#cccccc', marginTop: '8px', lineHeight: '1.4' }}>{item.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
