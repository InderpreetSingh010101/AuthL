import { Link } from "react-router-dom";

function Page() {
    return (
      <div>
         <div class="row">
          <div class="col-4 p-3 m-5">
  
          {/* <button type="button" class="btn btn-primary" to="/login">Login</button> */}
          <Link class="btn btn-primary" to="/login">Login</Link>
          
  
          </div> 
  
          <div class="col-4 p-3 m-5">
          <Link type="button" class="btn btn-secondary" to="/register">SignUp</Link>
          </div>
  
         </div>
         
      </div>
    );
  }
  
  export default Page;