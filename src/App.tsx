import React from 'react';
import FooterComponent from './components/footer/FooterComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className='layout'>
      <HeaderComponent />
      <div className='content'>
        <UserComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
