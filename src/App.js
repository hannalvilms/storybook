import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.scss';
import Grid from './components/Grid'
import CardBlock from "./components/CardBlock";

function App() {
  return (
    <div className="App">
      <CardBlock columns={2} bgColor={'bg-white'} />
      <CardBlock columns={3} />
      <CardBlock columns={4} />
      <Grid />
    </div>
  );
}

export default App;
