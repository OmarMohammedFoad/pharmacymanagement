import { Link } from "react-router-dom"
const Navbar  = ()=>
{

   return(
    <nav className="navbar navbar-light bg-light justify-content-between">
  <Link to="/" className="navbar-brand">Medicine</Link>
  
</nav>
   )
}
export default Navbar