import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import RatingStars from "./RatingStars";

const NavElm = ({ change /*name*/, handlerating, rate }) => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Movie-Show</h1>
      <hr style={{ color: "gray" }} />
      <div style={{ marginLeft: "400px" }}>
        <Navbar bg="#212529" data-bs-theme="dark">
          <Container>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container fluid>
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <button
                      style={{
                        backgroundColor: "#2b3035",
                        borderRadius: "5px",
                        height: "45px",
                      }}
                    >
                      <NavDropdown
                        title="Genre"
                        id="navbarScrollingDropdown"
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <NavDropdown.Item href="#action3">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Horror
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                          Drama
                        </NavDropdown.Item>
                      </NavDropdown>
                    </button>
                    <Nav.Link href="#" disabled></Nav.Link>
                    <Nav.Link href="#" disabled></Nav.Link>
                    <Nav.Link href="#" disabled></Nav.Link>
                    <Nav.Link href="#" disabled></Nav.Link>
                    <Nav.Link href="#" disabled></Nav.Link>
                  </Nav>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Form className="d-flex" style={{ marginRight: "50px" }}>
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        // value={name}
                        onChange={change}
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                    <RatingStars rate={rate} handlerating={handlerating} />
                  </div>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Container>
        </Navbar>
      </div>
      <hr style={{ color: "gray" }} />
    </div>
  );
};

export default NavElm;
