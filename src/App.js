// STYLING
import './App.css';
import './Styles.css';

// COMPONENTS
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Main from "./pages/Main.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
