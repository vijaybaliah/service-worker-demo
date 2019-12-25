import React from 'react';
import './App.css';
import {
  Layout,
  Header,
  Content,
  Navigation,
  Drawer
} from 'react-mdl';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tech from './Tech';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout fixedHeader>
          <Header title="product pwa">
            <Navigation className="hide-on-sm">
              <Link to='/'>Home</Link>
              <Link to='/tech'>Tech</Link>
              <Link to='/game'>Game</Link>
            </Navigation>
          </Header>
          <Drawer title="product pwa">
            <Navigation>
              <Link to='/'>Home</Link>
              <Link to='/tech'>Tech</Link>
              <Link to='/game'>Game</Link>
            </Navigation>
          </Drawer>
          <Content>
            <Switch>
              <Route path="/tech">
                <Tech />
              </Route>
              <Route path="/game">
                <Game />
              </Route>
              <Route path="/">
                <div>Home</div>
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
