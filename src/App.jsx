import {
  Hero,
  Navbar,
  About,
  Contact,
  Experience,
  Tech,
  Works,
  StarsCanvas,
} from './components';

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <div className="relative z-0">
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
