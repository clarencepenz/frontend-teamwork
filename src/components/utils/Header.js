import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './Utils.css'

const Header = (props) => {

  const logout = () =>{
     
       localStorage.clear('token')
       window.location.reload()
        
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

        const diagnose = localStorage.token
        const avatar = localStorage.url
        const author = localStorage.author
        return (
            <div>
              <Navbar style={{padding: '0'}} color="light" light expand="md">
                <NavbarBrand  style={{paddingLeft: '120px', fontWeight: '600'}} href="/">LOGO</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                   
                 </Nav>
                 <Nav>
                  <NavbarText>
                  <UncontrolledDropdown nav inNavbar style={{paddingRight: '120px'}}>
                  {  diagnose ? <>
                     <DropdownToggle nav caret style={{padding: '0'}}>
                         {  <img src={ avatar}  alt="a" style={{height: '30px', width: '30px', borderRadius: '50%', borderColor: '#000', borderStyle: 'solid', borderWidth: '2px', backgroundColor: '#f4f4f4'}}/> }
                         { ' ' }
                         { author }
                      </DropdownToggle>
                      <DropdownMenu direction="left">
                        <DropdownItem>
                        { <p onClick={logout} style={{ marginTop: '5px'}}><Link  style={{textDecoration: 'none', color: '#000', marginTop: '10px'}} to ={ "/login"}>logout</Link> </p>  }
                        </DropdownItem>
                      </DropdownMenu> 
                      </> : <p><Link  to ={ "/login"}>Login</Link> </p>}
                    </UncontrolledDropdown>
                   </NavbarText>
                   </Nav>
                </Collapse>
              </Navbar>
            </div>
        )
}


export default  Header;