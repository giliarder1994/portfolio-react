import styles from './SobreMim.module.css';

export default function SobreMim() {
  return (
    <article id="sobre-mim" className={styles.article}>
      <h2><i className="fa-solid fa-user"></i> Sobre mim</h2>
      <div className={styles.recuo}>
        <p>Olá! Meu nome é Giliarde da Silva Rodrigues e estou em transição de carreira para a área de Desenvolvimento Web, com foco em Back-End e aprendizado contínuo na prática.</p>
        <p>Possuo experiência profissional nas áreas administrativa, financeira e operacional, além de passagem pela Força Aérea Brasileira, onde desenvolvi competências como disciplina, organização, responsabilidade e trabalho em equipe, habilidades que considero essenciais para minha formação como desenvolvedor.</p>
        <p>Atualmente estudo JavaScript (ES6), TypeScript, Node.js, Express e MySQL, venho desenvolvendo projetos pessoais de API REST para aplicar conceitos de roteamento, autenticação JWT, integração com banco de dados e boas práticas de Back-End.</p>
        <p>Sou estudante de Engenharia de Software e estou em busca de uma oportunidade de estágio em Desenvolvimento Web ou Back-End para aplicar meus conhecimentos, aprender com profissionais experientes e crescer no setor de tecnologia.</p>
      </div>
    </article>
  );
}
