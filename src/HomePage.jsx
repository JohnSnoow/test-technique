// Modules
import React from 'react';

// css
import {
  Button,
  Nav,
  NavItem,
  NavLink,
  Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Components
import { ContainerHomePage } from './ContainerHomePage/ContainerHomePage';
import { TransactionTable } from './TransactionTable/TransactionTable';

export class HomePage extends React.Component {
  render() {
    return (
      <div>
          <Row>
            <ContainerHomePage backgroundColor="#1a1a1a" padding="20px" textColor="white" text="Finpal" colSize="2"  />
            <ContainerHomePage backgroundColor="#e6b800" padding="20px" textColor="black" text="" colSize="7"  />
            <ContainerHomePage backgroundColor="#e6e6e6" padding="20px" textColor="black" text="" colSize="3"  />
          </Row>
          <Row>
          <ContainerHomePage backgroundColor="#262626" padding="0px" textColor="black" colSize="2" >
            <Nav vertical>
              <NavItem>
                <NavLink disabled href="#">Overview</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="#">Transactions (3)</NavLink>
              </NavItem>
            </Nav>
            <hr style={{"border": "1px solid grey"}} />
            <Nav vertical>
              <NavItem>
                <NavLink disabled href="#">Transfers (2)</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="#">Invoices (1)</NavLink>
              </NavItem>
            </Nav>
            <hr style={{"border": "1px solid grey"}} />
            <Nav vertical>
              <NavItem>
                <NavLink disabled href="#">Manage cards</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="#">Manage accounts</NavLink>
              </NavItem>
            </Nav>
            <hr style={{"border": "1px solid grey"}} />
            <Nav vertical>
              <NavItem>
                <NavLink disabled href="#">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="#">Integrations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="#">Settings</NavLink>
              </NavItem>
            </Nav>
            <Button outline color="info"> Upgrade Account </Button>
          </ContainerHomePage>
          <ContainerHomePage backgroundColor="#e6e6e6" padding="0px" textColor="black" colSize="7" >
            <TransactionTable/>
          </ContainerHomePage>
          <ContainerHomePage backgroundColor="#ffffff" padding="0px" textColor="black" colSize="3" text="Click on one or several transactions to see details" />
        </Row>
      </div>
    )
  }
}
