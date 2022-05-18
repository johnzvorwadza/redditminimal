
import './styles/App.css';
import './styles/AppMobile.css';
import './styles/AppMore.css';
import Header from './componants/Header';
import Footer from './componants/Footer';
import Main from './componants/Main';
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
