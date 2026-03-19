import { useState } from 'react';
import { projetos } from '../../data';
import { Projeto } from '../../types';
import ProjetoModal from './ProjetoModal';
import styles from './Projetos.module.css';

const PROJETOS_POR_PAGINA = 4;

export default function Projetos() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null);

  const projetosOrdenados = [...projetos].reverse();
  const totalPaginas = Math.ceil(projetosOrdenados.length / PROJETOS_POR_PAGINA);
  const inicio = (paginaAtual - 1) * PROJETOS_POR_PAGINA;
  const projetosPagina = projetosOrdenados.slice(inicio, inicio + PROJETOS_POR_PAGINA);

  return (
    <article id="projetos" className={styles.article}>
      <h2><i className="fa-solid fa-trowel-bricks"></i> Projetos</h2>

      {/* Tabs de paginação */}
      <div className={styles.tabs}>
        {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((pagina) => (
          <button
            key={pagina}
            className={`${styles.tab} ${pagina === paginaAtual ? styles.tabActive : ''}`}
            onClick={() => setPaginaAtual(pagina)}
          >
            {pagina}
          </button>
        ))}
      </div>

      {/* Lista de projetos */}
      <div className={styles.projetoContainer}>
        {projetosPagina.map((projeto) => (
          <div
            key={projeto.id}
            className={styles.projeto}
            onClick={() => setProjetoSelecionado(projeto)}
          >
            <img src={projeto.imagem} alt={projeto.titulo} className={styles.foto} />
            <div className={styles.projetoInfo}>
              <h3 className={styles.titulo}>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
              <details>
                <summary>Saiba mais...</summary>
              </details>
            </div>
          </div>
        ))}
      </div>

      {/* Modal do projeto selecionado */}
      {projetoSelecionado && (
        <ProjetoModal
          projeto={projetoSelecionado}
          onClose={() => setProjetoSelecionado(null)}
        />
      )}
    </article>
  );
}
