import { useState, useRef } from 'react';
import styles from './Ficha.module.css';

const EMAIL = 'giliarder1994@gmail.com';

export default function Ficha() {
  const [modalOpen, setModalOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setTooltipVisible(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setTooltipVisible(false), 1500);
    });
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setModalOpen(false);
  };

  return (
    <section id="ficha" className={styles.ficha}>
      <img src="/imagens/foto_giliarde.jpeg" alt="Foto de Giliarde Rodrigues" className={styles.foto} />
      <h1 className={styles.nome}>Giliarde Rodrigues</h1>

      <div className={styles.social}>
        <a href="https://www.linkedin.com/in/giliarde-rodrigues/" target="_blank" rel="nofollow">
          <i className="fa-brands fa-linkedin" title="Linkedin"></i>
        </a>
        <a href="https://github.com/giliarder1994" target="_blank" rel="nofollow">
          <i className="fa-brands fa-github" title="GitHub"></i>
        </a>
        <a href="https://www.instagram.com/giliarde.rodriguess/" target="_blank" rel="nofollow">
          <i className="fa-brands fa-instagram" title="Instagram"></i>
        </a>
        <i
          id="emailIcon"
          className={`fa-regular fa-envelope ${styles.emailIcon}`}
          title="E-mail"
          onClick={() => setModalOpen(true)}
        />
      </div>

      <div className={styles.recuo}>
        <p>Estudante de Engenharia de Software e Desenvolvimento Web em formação, focado em aprendizado contínuo e prática diária.</p>
        <p>Busco uma oportunidade de estágio nas áreas de Back-End ou Desenvolvimento Web para desenvolver minhas habilidades, aprender com a equipe e contribuir com dedicação.</p>
      </div>

      {/* Email Modal */}
      {modalOpen && (
        <div className={`${styles.modalOverlay} ${styles.show}`} onClick={handleOverlayClick}>
          <div className={styles.modalContent}>
            <span className={styles.closeBtn} onClick={() => setModalOpen(false)}>&times;</span>
            <h4>Contato</h4>
            <p>E-mail para contato:</p>
            <p className={styles.emailWrapper}>
              <strong
                className={styles.emailText}
                onClick={handleCopyEmail}
                title="Clique para copiar"
              >
                {EMAIL}
              </strong>
              <span className={`${styles.tooltip} ${tooltipVisible ? styles.tooltipShow : ''}`}>
                E-mail copiado!
              </span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
