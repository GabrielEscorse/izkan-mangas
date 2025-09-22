import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MangaList() {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    fetch('https://SEU_BACKEND.onrender.com/mangas')
      .then(res => res.json())
      .then(data => setMangas(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Lista de Mangás</h1>
      <ul>
        {mangas.map(manga => (
          <li key={manga.id}>
            <Link to={`/manga/${manga.id}`}>{manga.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MangaList;
