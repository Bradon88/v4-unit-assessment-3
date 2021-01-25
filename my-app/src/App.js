import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <body>
        <header>
          <h1 className = 'bookist'>bookist</h1>
        </header>

        <div className = 'search-bar'>
          <input className = 'input' type = 'text'></input>
          <button className = 'search'>Search</button>
          <button className = 'clear'>Clear Search</button>
        </div>

        
        <section>
          <div className = 'book-box'>
            <h3>Books from array of objects in data.js here</h3>
          </div>
        

          
          <div className = 'shelf-box'>
            <p className = 'your-shelf'>Your Shelf</p>
            <button className = 'clear-shelf'>Clear Shelf</button>
            <p className = 'title1'>Title</p>
            <p className = 'title2'>Title</p>
            <p className = 'title3'>Title</p>

          </div>
        </section>


      </body>
    </div>
  );
}

export default App;
