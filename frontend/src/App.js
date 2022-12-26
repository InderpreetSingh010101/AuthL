// import { Link, Route, Router  } from "react-router-dom";
import { BrowserRouter , Route , Routes  } from "react-router-dom";
import Login from "./Files/Login";

import Page from "./Files/Page";
import Register from "./Files/Register";

function App() {
  return (


    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Page/>} />
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/Register" element={<Register/>}/>
        </Routes> 
        

      
    </BrowserRouter>
  //  <Router>
  //   {/* <Page/> */} <Login/>

  //   <Routes>

  //    <Route path="/login">
  //       {/* <Login/> */}
  //    </Route>
  //   </Routes>
    
  //  </Router>
   
   
   
    // <Page/>
  );
}

export default App;
