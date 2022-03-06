import logo from './logo.svg';
import './App.css';
import Profile  from './components/Profile';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Profile/>
        <Content />
        <Footer />
    </div>
  );
}

export default App;
