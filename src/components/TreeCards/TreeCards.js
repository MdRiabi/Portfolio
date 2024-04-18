import SimpleCard from 'components/Cards/SimpleCard'
import React from 'react'
import { Badge, Button, Card, CardBody, Col, Container, Row } from 'reactstrap'

function TreeCards() {
    return (
        <section className="section section-lg pt-lg-0 mt--100">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="4">
                  

                 <SimpleCard
                 icon= 'spaceship'
                 color='primary'
                 title='Frontend'
                 description='Check my Frontend project'
                 badges= {["React","Angular","Vue","JavaScript"]}

                 />
                  
                </Col>
                <Col lg="4">
                 
                 <SimpleCard
                 icon= 'ui-04'
                 color='success'
                 title='Backend'
                 description='Check my Backend project'
                 badges= {["NodeJs","SpringBoot","Dino","Embert"]}

                 />
                </Col>
                <Col lg="4">
                 
                 <SimpleCard
                 icon= 'palette'
                 color='warning'
                 title='Design'
                 description='Check my Design project'
                 badges= {["React","Angular","Vue","JavaScript"]}

                 />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default TreeCards
