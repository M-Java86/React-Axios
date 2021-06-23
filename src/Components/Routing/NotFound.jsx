import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
    <>
    
    <h1>The page you are looking for can't be found!!!!</h1>
    <button>
        <Link to="/" className= "btn btn-danger">
         Home
        </Link>
    </button>
    </>
    );

};

 export default NotFound;

   