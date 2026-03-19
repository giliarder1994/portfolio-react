import { useTheme } from './hooks/useTheme';
import Header from './components/Header/Header';
import Ficha from './components/Ficha/Ficha';
import SobreMim from './components/SobreMim/SobreMim';
import Skills from './components/Skills/Skills';
import Formacao from './components/Formacao/Formacao';
import Projetos from './components/Projetos/Projetos';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Header isDark={isDark} onToggleTheme={toggleTheme} />

      <main className={styles.main}>
        <div className={styles.ficha}>
          <Ficha />
        </div>

        <section className={styles.detalhes}>
          <SobreMim />
          <Skills />
          <Formacao />
          <Projetos />
        </section>
      </main>

      <Footer />
    </>
  );
}
