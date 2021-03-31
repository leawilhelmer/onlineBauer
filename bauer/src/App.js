import React, { useEffect, useState } from "react";
import Nav from "./components/Nav/nav";
import Profile from "./components/Forms/profile";
import Team from "./components/Account/Team";
import Unternehmen from "./components/Account/Unternehmen";
import FormAuthenticate from "./components/Forms/formAuthenticate"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserContext from "./Context/userContext";
import axios from "axios";

function App() {
  // Set state for authentication using UserData
  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined
  })

  // Function to see if the user is logged in
  const checkLoggedIn = async () => {
    // Set token to the local storage AuthToken
    let token = localStorage.getItem("auth-token");
    // If no token, set up the spot in LocalStorage
    if (token === null) {
      localStorage.setItem("auth-token", "")
      token = ""
    } else {
      try {
        // If there is a token send the get request to get the user Data
        const userRes = await axios.get("/api/login", {
          headers: { "x-auth-token": token }
        })
        // then console log the results
        console.log("user", userRes)
        // set the user data to the token and the user information
        setUserData({ token, user: userRes.data })
      } catch (err) {
        console.log("Must log in")
      }
    }

  }
  // use Effect to call the check logged in on the page load
  useEffect(() => {
    // console.log(userData)
    checkLoggedIn()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Nav />
          <Switch>
            <Route path="/team" component={Team} />
            <Route path="/profile" component={Profile} />
            {/* <Route path="/addevent" component={AddEvent} /> */}
            <Route path="/unternehmen" component={Unternehmen} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={FormAuthenticate} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
