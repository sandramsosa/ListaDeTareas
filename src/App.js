/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import Logo from './imagenes/oltursa-logo-sin-fondo.png'
import ListaDeTareas from './componentes/ListaDeTareas';



function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img src={Logo}  className='logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
