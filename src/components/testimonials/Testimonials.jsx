import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import './testimonials.css';

import testimonialImg from '../../assets/images/review1.png';
import Slider from 'react-slick';

const Testimonials = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='slider__wrapper d-flex align-items-center gap-5'>
               <div className='slider__content w-50'>
                 <h2 className='mb-4'>Que dicen nuestros clientes.</h2>
                 <Slider>
                <div>
                    <div className='single__testimonial'>
                       <p className='review__content'>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore aliquid facere necessitatibus minima nam 
                          blanditiis expedita perferendis illum voluptatibus inventore rem, nihil dignissimos? Ratione 
                          amet quae, expedita asperiores vero ullam.
                       </p>
                       <h6 className='texto__nombre'>Jhon Doe</h6>
                       <p>Desarrollador web</p>
                    </div>
                </div>
                <div>
                    <div className='single__testimonial'>
                       <p className='review__content'>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore aliquid facere necessitatibus minima nam 
                          blanditiis expedita perferendis illum voluptatibus inventore rem, nihil dignissimos? Ratione 
                          amet quae, expedita asperiores vero ullam.
                       </p>
                       <h6 className='texto__nombre'>Jhon Doe</h6>
                       <p>Desarrollador web</p>
                    </div>
                </div>
                <div>
                    <div className='single__testimonial'>
                       <p className='review__content'>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore aliquid facere necessitatibus minima nam 
                          blanditiis expedita perferendis illum voluptatibus inventore rem, nihil dignissimos? Ratione 
                          amet quae, expedita asperiores vero ullam.
                       </p>
                       <h6 className='texto__nombre'>Jhon Doe</h6>
                       <p>Desarrollador web</p>
                    </div>
                </div>
                <div>
                    <div className='single__testimonial'>
                       <p className='review__content'>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore aliquid facere necessitatibus minima nam 
                          blanditiis expedita perferendis illum voluptatibus inventore rem, nihil dignissimos? Ratione 
                          amet quae, expedita asperiores vero ullam.
                       </p>
                       <h6 className='texto__nombre'>Jhon Doe</h6>
                       <p>Desarrollador web</p>
                    </div>
                </div>
            </Slider>
            </div>
            <div className='slider__img w-50'>
            <img src={testimonialImg} alt="" className='w-100'/>
            </div>
            </div>
            
          </Col> 
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
