

import logo from './logo.svg';
import './App.css';
import './AppMobile.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { Provider } from 'react-redux';
import store from './redux/store';
import SidebarControls from './SidebarControls';

///middleware
const lodger =state=>next=>action=>{
  console.log(action);
  return next(action);
}


function App() {
 
  return (
    <Provider store={store}>
      <div className="App">       
        <button id="menuButton" display-visible='true' className='menuButton' onClick={SidebarControls}></button>
        <Header/>
        <Main/>
      <Footer/>
    
    </div>
    </Provider>
    
  );
}

export default App;
