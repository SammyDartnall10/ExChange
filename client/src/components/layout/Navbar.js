import Nav from 'react-bootstrap/Nav';
import { Fragment } from "react"

function Navbar() {
  return (
    <Nav
    // activeKey="/home"
    // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">All Listings</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Create Listing</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Profile</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}


export default Navbar