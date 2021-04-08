import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

class AppNavbar extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const color = 'purple';

    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/'>ShoppingList</NavbarBrand>
            <NavbarToggler onClick={this.toggle}>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className='ml-auto' navbar>
                  <NavItem>
                    <NavLink href='https://github.com/salah7eddine'>
                      <h1 color={color}>Github</h1>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </NavbarToggler>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
