import logo from './logo.svg';
import './App.css';
import './ribbon.css';
import './chain.css';
import arrow from './arrow.svg';
import smallPlus from './plus.svg'
import bigPlus from './plus2.svg'


// import rib from './ribbon.svg';
// import rib2 from './ribbon2.svg';
// import cloud from './cloud01.svg';


function App({ name }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code> Animation tests </code>
        </p>
        <h1> Hello {name}. Nice to meet you </h1>
        <h2> Hey. </h2>

      </header>
      <div class='wrap'>
        <div className="chain">
          <h2>
            <span>U</span>
            <span>P</span>
            <span>&</span>
            <span>O</span>
            <span>V</span>
            <span>E</span>
            <span>R</span>
          </h2>
        </div>
      </div>

      <div class='wrap'>
        <div class="qmi-container">
          {/* creates first red svg circle. need linear gradient tags here 
          since didn't import.
          make note that width and height are like the box containing the circle,
          so they need to be bigger than radius
          */}
          <svg class="red-circle" width="300" height="300">
            <linearGradient id="red-gradient" x1="24.4251" y1="-52.6352" x2="112.279" y2="143.659" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF9399" />
              <stop offset="1" stop-color="#FF5A60" />
            </linearGradient>
            {/* cx and cy are centers so shld be half of height/width. r is radius */}
            <circle cx='150' cy='150' r='115'> </circle>
          </svg>
          <svg class="blue-circle" width="400" height="400">
              <linearGradient id="blue-gradient" x1="36.7649" y1="66.8832" x2="134.326" y2="192.278" gradientUnits="userSpaceOnUse">
                <stop stop-color="#B2D9FF" />
                <stop offset="1" stop-color="#78B6F4" />
              </linearGradient>
            <circle cx='200' cy='200' r='180'> </circle>
          </svg>
          {/* imported way of using svgs so cant adjust stroke colors*/}
          <img src={arrow} className="arrow-circle" alt="dti arrow" />
          {/* made two pluses since color gradient changes and second one needs
           to expand outside of the container. */}
          <img src={smallPlus} className="first-plus" alt="first plus" />
        </div>
        <img src={bigPlus} className="sec-plus" alt="first plus" />
      </div>
    </div>
  );
}

/* type npm start to begin*/

export default App;
