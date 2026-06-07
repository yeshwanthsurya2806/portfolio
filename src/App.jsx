import { Navbar } from './components/Navbar';
import { AnimatedCursor } from './components/AnimatedCursor';
import { BackgroundBlobs } from './components/BackgroundBlobs';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="bg-dark-bg text-white min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <BackgroundBlobs />

      {/* Custom Cursor */}
      <AnimatedCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
