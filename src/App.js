import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import './scss/app.scss';

function App() {
  const [pizzaData, setPizzaData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://6335977cea0de5318a16db9b.mockapi.io/pizzaData')
      .then((res) => res.json())
      .then((data) => setPizzaData(data));
  });

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Home pizzaData={pizzaData} />
        </div>
      </div>
    </div>
  );
}

export default App;
