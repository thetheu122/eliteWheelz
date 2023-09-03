import Cabecalho from '../components/cabecalhoComponente/index.js';
import LateralMenu from '../components/menuComponente/index.js';
import './index.scss';

function App() {
  return (
    <div className="Main">
        <LateralMenu/>
      <div className='inputs_Tables'>
        <Cabecalho/>
       <h1>HOME</h1>
      </div>
    </div >
  );
}

export default App;
