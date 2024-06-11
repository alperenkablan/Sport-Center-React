import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import HeroBottom from './components/herobottom/HeroBottom';
import Classes from './components/classes/Classes';
import Trainer from './components/trainer/Trainer';
import Purchase from './components/purchase/Purchase';
import Review from './components/review/Review';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <HeroBottom />
      <Classes />
      <Trainer />
      <Purchase />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
