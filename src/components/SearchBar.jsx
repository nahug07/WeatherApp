import React, { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({onSearch}) {
  
  const [city, setCity] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        className="inputCity"
        type="text"
        placeholder="Buscar ciudad . . ."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar" className="botonAgregar" />
    </form>
  );
}
