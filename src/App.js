import './style/boostrap.css';
import './App.css';

import Header from "./components/Header";

import getView from "./Route";


function App() {
    return (
        <div className="App">
            <Header/>
            <div className="view">
                {getView()}
            </div>
        </div>
    );
}

export default App;
