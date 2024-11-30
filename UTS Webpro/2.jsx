import React, { useState } from 'react';

function Komponen({ judul }) {
  const [klik, setKlik] = useState(0);

  return (
    <div>
      <h1>{judul}</h1>
      <button onClick={() => setKlik(klik + 1)}>Klik saya: {klik}</button>
    </div>
  );
}

export default function App() {
  return <Komponen judul="Judul dengan Props" />;
}
