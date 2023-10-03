import './App.css';

import repaySrc from './repay.jpg';
import cryptoSrc from './crypto.jpg';
import solarSrc from './solar.jpg';
import minesweeperSrc from './minesweeper.jpg';
import resume from './resume.pdf';

const PortfolioItem = ({ title, imgSrc, description, link }) => {
  return (
    <div className="portfolio__item">
      <label className="portfolio__title">{title}</label>
      <img className="portfolio__img" src={imgSrc} alt={"img load error"} onClick={()=>window.open(link)}></img>
      <label className="portfolio__description">{description}</label>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <div className="info">
        <div className="heading">
          👋 Hi, I’m Louis Griffin<br/>
        </div>
        <div className="subheading">
          Passion for building programs, websites, and UIs<br/>
        </div>
        <div className="list">
          About Me:
          <li className="list__element">🎓 2022 BS in CS @ University of Wisconsin-Madison</li>
          <li className="list__element">🧰 Connectivity, Leadership, Novelty, Curiosity, Integrity</li>
          <li className="list__element">🏙️ Born, raised, and living in the Chicago Area</li>
        </div>
        <div className="list">
          Until Graduation, I was...
          <li className="list__element">👨‍💻 Interning @ MERGE during Summer 2021</li>
          <li className="list__element">💻 Managing the website for JUST Journal</li>
          <li className="list__element">🕹️ Captain of an eSports team</li>
        </div>
        <div className="list">
          Check me out and reach me at:
          <li className="list__element" onClick={()=>window.open('https://github.com/louisgrif')}>Github - louisgrif</li>
          <li className="list__element" onClick={()=>window.open('https://www.linkedin.com/in/louisgrif/')}>LinkedIn - louisgrif</li>
          <li className="list__element"><a download="LouisGriffinResume" href={resume}>Resume</a></li>
          <li className="list__element" onClick={() => {navigator.clipboard.writeText("louisgriffin12@gmail.com"); alert("email copied to clipboard")}}>Email - louisgriffin12@gmail.com</li>
        </div>
      </div>
      <div className="portfolio">
        <div className="heading">
          🔎 Check out my Portfolio<br/>
        </div>
        <PortfolioItem title={"Lou's Minesweeper"} description={"JavaScript, React-Redux, CSS, AWS, SVG"} imgSrc={minesweeperSrc} link={'http://louminesweeper.com'} />
        <PortfolioItem title={"Crypto Price Checker"} description={"JavaScript, React, Redux, API, Sass, CSS"} imgSrc={cryptoSrc} link={'https://louisgrif.github.io/cryptolookup'} />
        <PortfolioItem title={"Model Solar System"} description={"JavaScript, THREE.js"} imgSrc={solarSrc} link={'https://github.com/louisgrif/solarsystem'} />
        <PortfolioItem title={"RePay"} description={"Figma, Prototyping, UI, UX"} imgSrc={repaySrc} link={'https://www.figma.com/proto/88YPQbFCRu2BpfthEhy5AP/RePay?node-id=534%3A4&scaling=scale-down&page-id=534%3A3&starting-point-node-id=534%3A4'} />
      </div>
    </div>
  );
}

export default App;
