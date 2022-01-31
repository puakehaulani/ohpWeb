import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { ContactCTA } from '../Contact'
import './style.css'

function Team() {
    const founderContent = (
        <Row xs={1} sm={2}>
            <Col className="image-container">
                <Image src="./images/about.jpg" height={400} width={400} rounded fluid />
            </Col>
            <Col className="text-center my-auto textContainerFounder">
                <h1 className="text-center">About Our Founder</h1>
                <p>
                    Ugh williamsburg unicorn keytar labore meggings fam hashtag ut velit. Tbh dolore live-edge, selfies YOLO shoreditch eu subway tile est kombucha. Cronut readymade irony blog. Dolore mlkshk schlitz pok pok gluten-free skateboard hella lumbersexual heirloom, cupidatat gastropub dolore disrupt adipisicing. Vape pug vegan neutra ullamco officia pariatur polaroid semiotics keytar vice affogato knausgaard. Art party laborum offal in ut dolore mlkshk literally pour-over chambray pariatur. Keffiyeh heirloom locavore, aliqua dreamcatcher in pitchfork blog hashtag umami.
                </p>
                <div className="text-center"><ContactCTA /></div>
            </Col>
        </Row>

    )

    return (
        <Container className="section-container" id="team">
            {founderContent}
        </Container>
    )
}

export default Team