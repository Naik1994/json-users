import './App.css';
import React, { useState, useEffect } from 'react';
// import Robots from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// const App = () => {
//   return (
//     <div className="tc">
//       <h1>RoboFriends</h1>
//       <InputSearch />
//       <CardList robots={Robots}/>
//     </div>
//   );
// }

function App()  {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchField: ""
  //   };
  // }

  const [robots, setRobots ] = useState([]);
  const [searchField, setSearchField ] = useState("");

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(resp => resp.json())
  //     .then(users => this.setState({robots: users}))
  // }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(users => setRobots(users))
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  // render() {
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    if (!robots.length) {
      return <h1>Loading..</h1>
    } else {
      return (
        <div className="tc">
          <h1 className='f2'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );      
    }
    
  // }
}

export default App;
