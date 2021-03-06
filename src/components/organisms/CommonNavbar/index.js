import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
const CommonNavbar=()=>
{
    return(
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Collapse id="responsive-navbar-nav">
    <Image src="https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" roundedCircle width="30" height="30"/>
     <NavDropdown  title="username" id="collasible-nav-dropdown" className="pl-50">
        <NavDropdown.Item href="#action/3.1">logout</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
  </Navbar.Collapse> 
</Navbar>
        );
}
export default CommonNavbar;