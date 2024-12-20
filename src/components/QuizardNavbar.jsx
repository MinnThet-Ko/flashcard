import { Container, Nav, Navbar } from "react-bootstrap";
import { FlashcardLinks } from "../data/FlashcardLinks";
import "../assets/styles/navbar.styles.css";
import "bootstrap/dist/css/bootstrap.css"

function QuizardNavbar(){
    return <Navbar className="navbar-container">
        <Container>
            <Navbar.Brand className = "app-logo">Quizard</Navbar.Brand>
            {
                FlashcardLinks.map((link) => {
                    return <Nav.Link key={link.id} href={link.link}>{link.description}</Nav.Link>
                })
            }
        </Container>
    </Navbar>
}

export default QuizardNavbar