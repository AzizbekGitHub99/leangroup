import React, { Component } from 'react'

import img from '../../assets/images/site-logo.svg';
import menu from '../../assets/images/hamburger-menu.png';

import './Header.scss';

export class Header extends Component {
  state = {
    toogle: false,
  }

  render() {
    const {toggle} = this.state;
    const toggleMenu = ()=>{
      this.setState({toggle: !toggle})
    }

    return (
      <header className='header'>
        <div className="container ">
          <nav className='header__nav'>
            <a href="#home">
              <img src={img} alt="site logo" />
            </a>
            <ul className={`header__list ${toggle ? "header__list__open" : " "}`}>
              <li>
                <a className='header__link border' href="#product">
                  Продукция
                </a>
                {/* <ul className='header__link__menu'>
                  <li>
                    <a href="Ламинатные тубы">Ламинатные тубы</a>
                  </li>
                  <li>
                    <a href="Экструзионные тубы">Экструзионные тубы</a>
                  </li>
                  <li>
                    <a href="Другая упаковка">Другая упаковка</a>
                  </li>
                </ul> */}
              </li>
              <li>
                <a className='header__link' href="#certificate">
                  Сертификаты
                </a>
              </li>
              <li>
                <a className='header__link' href="#company">
                  Наша команда
                </a>
              </li>
              <li>
                <a className='header__link' href="#about">
                  О нас
                </a>
              </li>
              <li>
                <a className='header__link' href="#news">
                  Новости
                </a>
              </li>
              <li>
                <a className='header__link' href="#vakancy">
                  Вакансии
                </a>
              </li>
              <li>
                <a className='header__link ' href="#contact">
                  Контакты
                </a>
              </li>
            </ul>
            <div className='header__btns'>
              <button className='header__btn__ru'>
                RU
              </button>
              <button className='header__btn__en'>
                EN
              </button>
              <button className='header__menu' onClick={toggleMenu}>
                <img src={menu} alt="menu" width={34} />
              </button>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header