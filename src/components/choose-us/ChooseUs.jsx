import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './choose-us.css';
import pastaImg from "../../assets/images/pasta.png";

const ChooseUs = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <img src={pastaImg} alt="" className='w-100'/>
                </Col>
                <Col lg='6'>
                    <div className='choose__content'>
                        <h4>¿Quienes Somos?</h4>
                        <h2>Aprovecha los beneficios que te ofrecemos en el restaurante!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  
                        Sed eveniet voluptates odit ipsum similique.</p>
                    </div>
                    <div className='features mt-4'>
                        <div className='feature1 d-flex align-items-center gap-5'>
                            <div className='single__feature'>
                                <span><i class="ri-truck-line"></i></span>
                                 <h6>Envio Gratis</h6>
                                 <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className='single__feature'>
                                <span className='feature__icon-two'>
                                <i class="ri-money-dollar-circle-line"></i>
                                </span>
                                 <h6>Devolvemos tu dinero en caso de fallas</h6>
                                 <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className='feature1 mt-3 d-flex align-items-center gap-5'>
                            <div className='single__feature'>
                                <span className='feature__icon-3'>
                                    <i class="ri-secure-payment-line"></i>
                                </span>
                                 <h6>Pago Seguro</h6>
                                 <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className='single__feature'>
                                <span className='feature__icon-4'>
                                <i class="ri-24-hours-line"></i>
                                </span>
                                 <h6>24/7 de servicio</h6>
                                 <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ChooseUs
