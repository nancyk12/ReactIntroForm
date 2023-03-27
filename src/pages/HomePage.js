import { useOutletContext } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './HomePage.css'


const HomePage = () => {
    const context = useOutletContext();
    console.log(context);
    


    return(
        <Container id='main' fluid>
            <Row className='justify-content-center'>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage