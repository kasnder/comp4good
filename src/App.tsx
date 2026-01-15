import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Methods } from './components/Methods';
import { Publications } from './components/Publications';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Methods />
        <Projects />
        <Team />
        <Publications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
