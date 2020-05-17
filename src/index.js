import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import NavBar from './navbar/navBar.js';
import Drawer from '@material-ui/core/Drawer';
import DrawerItems from './navbar/drawerItems';
import Home from './home/home';
import Skills from './skills/skills';
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { right: false, height: window.innerHeight };
  }
  toggleDrawer() {
    this.setState((prevState) => ({
      right: !prevState.right,
    }));
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ height: window.innerHeight });
  };
  render() {
    if (this.state.height <= 450) {
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
              <div className="xl:px-32 xl:py-20 px-8 py-10 sm:px-20 sm:py-16 lg:px-24 lg:py-18 h-screen w-screen">
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
              </div>
            </>
          </Switch>
        </HashRouter>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
