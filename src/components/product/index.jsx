import  { Component } from 'react'

import Button from '../button';

import img1 from '../../assets/images/phone.png';
import img3 from '../../assets/images/user.png';

import './product.scss';

export class Product extends Component {
  render() {
    return (
      <section id='product' className='product'>
        <div className="container product__info">
            <div className='product__wrapper'>
                <h2 className='product__wrapper__title'>
                    Получить подробную <span>информацию</span>
                </h2>
                <p className='product__wrapper__text'>
                    Просто заполните форму, наш менеджер свяжется с вами в ближайшее время
                </p>
                <div className='product__inner'>
                    <div>
                        <label htmlFor="name">
                            <img src={img1} alt="sdfsdfsdf" />
                            <input type="text" id='name' placeholder='Ваше имя' />
                        </label>
                        <label htmlFor="tel">
                            <img src={img3} alt="asdasd" />
                            <input type="tel" name="tel" id="tel" placeholder='+375 (29) 0000000'/>
                        </label>
                    </div>
                    <textarea className="product__inner__textarea"  cols="30" rows="5" placeholder='Комментарий'></textarea>
                    <Button text="Получить информацию"/>
                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default Product;