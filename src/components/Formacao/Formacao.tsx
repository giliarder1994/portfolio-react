import { formacoes } from '../../data';
import styles from './Formacao.module.css';

export default function Formacao() {
  return (
    <article id="formacao" className={styles.article}>
      <h2><i className="fa-solid fa-graduation-cap"></i> Formação</h2>
      <div className={styles.formacaoContainer}>
        {[...formacoes].reverse().map((f) => (
          <div key={f.titulacao} className={styles.curso}>
            <p className={styles.periodo}>{f.periodo}</p>
            <h3 className={styles.instituicao}>{f.instituicao}</h3>
            <p className={styles.titulacao}>{f.titulacao}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
