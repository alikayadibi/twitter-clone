import "./App.scss";

import { Navbar, Feed, Trends } from "./containers";

function App() {
   return (
      <div className="App">
         <Navbar />
         <Feed />
         <Trends />
      </div>
   );
}

export default App;
