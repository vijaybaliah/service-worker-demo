import React from 'react';
import './App.css';
import {Layout, Header, Content, Navigation, Drawer} from 'react-mdl';

function App() {
  return (
    <div className="App">
      <Layout fixedHeader>
        <Header title="product pwa">
          <Navigation className="hide-on-sm">
          </Navigation>
        </Header>
        <Drawer title="product pwa">
          <Navigation>
          </Navigation>
        </Drawer>
        <Content>
          Dynamic content here...
        </Content>
      </Layout>
    </div>
  );
}

export default App;
