import { skills } from '../../data';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <article id="skills" className={styles.article}>
      <h2><i className="fa-solid fa-brain"></i> Minhas skills</h2>
      <div className={styles.skillContainer}>
        {skills.map((skill) => (
          <div key={skill.nome} className={styles.curso}>
            <div className={styles.info}>
              <span className={styles.nome}>
                {skill.nome}
                <img src={skill.imagem} alt={skill.alt} className={styles.iconTam} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
