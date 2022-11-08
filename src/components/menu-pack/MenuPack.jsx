import React,{useState,useEffect} from 'react';
import './menu-pack.css';

import { Container, Row, Col } from 'reactstrap';
import ProductCard from '../product-card/ProductCard';
import { fastFoodProducts,riceMenuProducts,pizzaProducts,dessertProducts,coffeeProducts } 
from '../../assets/fake-data/products';

const MenuPack = () => {

  const {filter, setfilter} = useState('RICE-MENU')
  const {products,setproducts} = useState(riceMenuProducts)

  useEffect(()=>{

    if(filter === 'RICE-MENU'){
      setproducts(riceMenuProducts)
    }
    if(filter === 'FAST-FOOD'){
      setproducts(fastFoodProducts)
    }
    if(filter === 'PIZZA'){
      setproducts(pizzaProducts)
    }
    if(filter === 'DESSERT'){
      setproducts(dessertProducts)
    }
    if(filter === 'COFFEE'){
      setproducts(coffeeProducts)
    }

  },[filter])

  return (
    <section>
      <Container>
        <Row>
            <Col lg="12" className='text-center mb-4'>
                <h3 className='menu__title'>Nuestro Paquete de menu</h3>
            </Col>
            <Col lg="12" className='text-center mb-5'>
               <button className='filter-btn'>Comida Rapida</button>
               <button className='filter-btn active__btn'>Menu Arroz</button>
               <button className='filter-btn'>Pizza</button>
               <button className='filter-btn'>Postre</button>
               <button className='filter-btn'>Cafe</button>
            </Col>
            {
                fastFoodProducts.map(item=>(
                    <Col lg='3' key={item.id} className="mb-4">
                       <ProductCard item={item}/>
                    </Col>
                ))
            }
        </Row>
      </Container>
    </section>
  )
}

export default MenuPack
