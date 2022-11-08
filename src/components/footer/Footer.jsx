import React from 'react';
import './footer.css';
import { Container, Row, Col,ListGroup,ListGroupItem } from 'reactstrap';

const footerQuickLinks = [
    {
        display:'Terminos & Condiciones',
        url:'#'
    },
    {
        display:'Politicas de privacidad',
        url:'#'
    },
    {
        display:'Metodos de pagos',
        url:'#'
    },
    
]
const footerLinks = [
    {
        display:'Nosotros',
        url:'#'
    },
    {
        display:'Menu',
        url:'#'
    },
    {
        display:'Recetas',
        url:'#'
    },
    {
        display:'Contacto',
        url:'#'
    },
]

const Footer = () => {
  return (
    <footer className='footer'>
       <div className='footer__top'>
        <Container>
            <Row>
                <Col lg='4' md="4" sm='6'>
                    <div className='logo'>
                        <h2 className="d-flex align-items-center gap-1 mb-4">
                           <span>
                            <i class="ri-restaurant-2-line"></i>
                           </span>
                           Comilatinas
                        </h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, a dolor! Porro enim eum, sunt illum, libero cupiditate tempora eius quam odit, aut optio velit 
                            sequi facilis nisi dolorem neque.
                        </p>
                    </div>
                </Col>
                <Col lg='2' md='4' sm='6'>
                    <h5 className='footer__link-title'>
                        Informacion
                    </h5>
                    <ListGroup>
                        {
                            footerQuickLinks.map((item,index)=>
                            <ListGroupItem className='link__item' key={index}>
                               <a href={item.url}>{item.display}</a>
                            </ListGroupItem>
                            )
                        }
                        
                    </ListGroup>
                </Col>
                <Col lg='2' md='4' sm='6'>
                    <h5 className='footer__link-title'>
                        Los Links
                    </h5>
                    <ListGroup>
                        {
                            footerLinks.map((item,index)=>
                            <ListGroupItem className='link__item' key={index}>
                               <a href={item.url}>{item.display}</a>
                            </ListGroupItem>
                            )
                        }
                        
                    </ListGroup>
                </Col>
        
            </Row>
        </Container>
       </div>
    </footer>
  )
}

export default Footer
