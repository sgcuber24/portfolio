import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import NavBar from './navbar/navBar.js';
import Drawer from '@material-ui/core/Drawer';
import DrawerItems from './navbar/drawerItems';
import Home from './home/home';
import Skills from './skills/skills';
import Contact from './contact/contact';
import Projects from './projects/projects';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Particles from 'react-particles-js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      right: false,
      height: window.innerHeight,
      width: window.innderWidth,
    };
  }
  toggleDrawer() {
    this.setState((prevState) => ({
      right: !prevState.right,
    }));
  }
  componentDidMount() {
    this.handleWindowSizeChange();
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ height: window.innerHeight, width: window.innerWidth });
  };
  particleParams = {
    detectRetina: true,
    fpsLimit: 999,

    interactivity: {
      detectsOn: 'canvas',
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },

        onHover: {
          enable: true,
          mode: 'repulse',
          parallax: {
            enable: false,
            force: 60,
            smooth: 10,
          },
        },
        resize: true,
      },
      modes: {
        absorbers: [],

        connect: {
          distance: 80,
          lineLinked: {
            opacity: 0.5,
          },
          radius: 60,
        },
        emitters: [],
        grab: {
          distance: 400,
          lineLinked: {
            opacity: 1,
          },
        },
        push: {
          quantity: 2,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          speed: 1,
        },
        slow: {
          factor: 3,
          radius: 200,
        },
      },
    },
    particles: {
      lineLinked: {
        blink: false,
        color: {
          value: '#ffffff',
        },
        consent: false,
        distance: 150,
        enable: true,
        opacity: 0.4,
        shadow: {
          blur: 5,
          color: {
            value: 'lime',
          },
          enable: false,
        },
        width: 1,
      },
      move: {
        speed: 5,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
          factor: 1000,
        },
        limit: 0,
        value: 40,
      },
      size: {
        animation: {
          destroy: 'none',
          enable: false,
          minimumValue: 0.1,
          speed: 40,
          startValue: 'max',
          sync: false,
        },
        random: {
          enable: true,
          minimumValue: 1,
        },
        value: 5,
      },
      stroke: {
        color: {
          value: '#000000',
        },
        width: 0,
        opacity: 1,
      },
    },
    pauseOnBlur: true,
  };
  render() {
    if (this.state.height <= 450 && this.state.width >= 500) {
      return (
        <div className="h-screen max-h-full w-screen flex flex-col flex-wrap justify-center align-middle">
          <h1 className="text-center text-white px-16">
            Hello, thanks for showing interest in my website. Please rotate your
            screen or find a larger screen to experience this website to its
            full extent.
          </h1>
        </div>
      );
    } else
      return (
        <HashRouter>
          <Switch>
            <>
              <div
                className="xl:px-32 xl:py-20 px-8 py-10 sm:px-20 sm:py-16 lg:px-24 lg:py-18 h-screen h-full w-screen absolute z-10 pointer-events-none"
                id="mainDiv"
              >
                <NavBar onClickHandler={() => this.toggleDrawer()} />
                <Drawer
                  anchor="right"
                  open={this.state.right}
                  onClose={() => this.toggleDrawer(false)}
                >
                  <DrawerItems onClickHandler={() => this.toggleDrawer()} />
                </Drawer>
                <Route exact path="/" component={Home} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/projects" component={Projects} />
              </div>
              <Particles
                className="opacity-25 h-screen w-screen"
                params={this.particleParams}
              />
            </>
          </Switch>
        </HashRouter>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
