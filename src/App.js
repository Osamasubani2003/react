import './App.css';
import Car from './Car'
import id7 from './id-7.jpg';
import mini from './mini_hardtop-4-door.webp';
import gclass from './g-class.jpg';
import porsche from './porsche-panamera-4e.jpg';
import './carCss.css'

function welcome(props){
  return (
    <h1>hello ,{props.name}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Car name="Volkswagen ID.7" image={id7} desc="" color="red"/>
      <Car name="mini hardtop 4" image={mini} desc="" color="blue"/>
      <Car name="mercedes g-class " image={gclass} desc="" color="#e2d62b"/>
      <Car name="porsche-panamera-4e" image={porsche} desc="" color="#25e455"/>
    </div>
  );
}
export default App;