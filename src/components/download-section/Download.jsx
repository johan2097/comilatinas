import React from 'react';
import './download.css';

import appImg from '../../assets/images/app.png';
import { Container, Row, Col } from 'reactstrap';

const Download = () => {
  return (
    <section>
      <Container className='app__container'>
          <Row>
            <Col lg='6' md='6'>
                <div className='app__img'>
                   <img src={appImg} alt=""/>
                </div>
            </Col>
            <Col lg='6' md='6'>
                <div className='app__content'>
                    <h5>Descarga la app</h5>
                    <h2 className='mb-4'>Si sientes hambre! descarga la app</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sint, non placeat vitae saepe quod enim quae animi perferendis explicabo natus vel recusandae est maxime, 
                    illum nobis illo ea laborum!</p>
                    <div className='app__btn d-flex align-items-center gap-5 mt-4'>
                        <button className='btn__apple d-flex align-items-center gap-3'>
                           <i class="ri-apple-line"></i><a href='#'>Apple Store</a>
                        </button>
                        <button className='btn__google d-flex align-items-center gap-3'>
                           <i class="ri-google-play-line"></i><a href='#'>Google Play Store</a>
                        </button>
                    </div>
                </div>
            </Col>
          </Row>
      </Container>
    </section>
  )
}

export default Download
