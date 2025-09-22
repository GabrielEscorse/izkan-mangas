import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MangaDetail() {
  const { id } = useParams();
  const [capitulos, setCapitulos] = useState([]);
  const [titulo, setTitulo] = useState('');

  useEffect(() => {
    fetch(`https://SEU_BACKEND.onrender.com/mangas/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitulo(data.titulo);
        setCapitulos(data.capitulos);
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div>
      <h1>{titulo}</h1>
      <h2>Capítulos</h2>
      <ul>
        {capitulos.map(cap => (
          <li key={cap.id}>
            <Link to={`/manga/${id}/chapter/${cap.id}`}>Capítulo {cap.numero}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MangaDetail;
