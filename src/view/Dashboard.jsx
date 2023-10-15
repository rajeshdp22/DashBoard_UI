import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../components/SideBar"
/**
 * Main Dashboard UI Page View
 */
function Dashboard(){
    return(
        <>
           <Container fluid>
                <Row>
                    <Col xl={2}>
                        <SideBar/>
                    </Col>
                    <Col xl={10}>
                        <Container>
                            <Row>
                                <Col>
                                    <h1>Dashboard</h1>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;