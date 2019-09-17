import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  const techsCount = useMemo(() => techs.length, [techs]);

  useEffect(() => {
    const t = localStorage.getItem('techs');
    if (t) setTechs(JSON.parse(t));
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const handleInputChange = useCallback(e => {
    setNewTech(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  return (
    <>
      <input value={newTech} onChange={handleInputChange} />
      <button type="button" onClick={handleAdd}>
        Add technology
      </button>
      <p>There are {techsCount} technologies in your list.</p>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
