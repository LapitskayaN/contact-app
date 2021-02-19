import logo from './logo.svg';
import './App.css';
import Contact from "./components/Contact";




function App() {
  return (
    <div className="App">
   <Contact
        isOnline="true"
        name="Tatsiana"
        avatar="https://randomuser.me/api/portraits/women/10.jpg"
      />
  </div>
  );
}

export default App;
