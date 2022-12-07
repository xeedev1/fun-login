import React, {useState} from "react";
import Form from "./components/Form";
import Welcome from "./components/Welcome";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  if(loggedIn){
    return (
      <main>
        <Welcome/>
      </main>
    )
  }
    return(
      <main>
        <Form setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
      </main>
    )
}

export default App;
