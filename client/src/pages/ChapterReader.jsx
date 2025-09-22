import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ChapterReader() {
  const { id, chapterId } = useParams();
  const [paginas, setPaginas] = useState([]);

  useEffect(() => {
    fetch(`https://SEU_BACKEND.onrender.com/chapters/${chapterId}/pages`)
      .then(res => res.json())
      .then(data => setPaginas(data))
      .catch(err => console.error(err));
  }, [chapterId]);

  return (
    <div>
      <h1>Capítulo {chapterId}</h1>
      {paginas.map((pagina, index) => (
        <div key={index}>
          <img src={pagina.url} alt={`Página ${index + 1}`} style={{ width: '100%' }} />
        </div>
      ))}
    </div>
  );
}

export default ChapterReader;
