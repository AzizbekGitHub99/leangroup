import React, { Component } from 'react'


import img1 from '../../assets/images/footer-log.png';
import img2 from '../../assets/images/fb.png';
import img3 from '../../assets/images/linkedin.png';
import img4 from '../../assets/images/vk.png';

import "./footer.scss"

export class Footer extends Component {
  render() {
    return (
      <footer id='footer' className='footer'>
        <div className="container">
          <div className='footer__wrapper'>
            <a href="#home">
              <img src={img1} alt="footer logo" />
            </a>

            <div>
              <a href="vk">
                <img src={img4} alt="vk" />
              </a>
              <a href="facebook">
                <img src={img2} alt="vk" />
              </a>
              <a href="linkedin">
                <img src={img3} alt="vk" />
              </a>
            </div>
          </div>
          <div className='footer__links'>
              <ul className='footer__list'>
                <li>
                  <h3><a className="footer__list__item" href="Продукция">Продукция</a></h3>
                </li>
                <li>
                  <a className="footer__list__item" href="Ламинатные тубы">Ламинатные тубы</a>
                  </li>
                <li>
                  <a className="footer__list__item" href="Экструзионные тубы">Экструзионные тубы</a>
                </li>
                <li>
                  <a className="footer__list__item" href="Другая упаковка">
                    Другая упаковка
                  </a>
                </li>
              </ul>
              <ul className='footer__list'>
                <li>
                  <h3><a className="footer__list__item" href="Компания">Компания</a></h3>
                </li>
                <li>
                  <a className="footer__list__item" href="О нас">О нас</a>
                  </li>
                <li>
                  <a className="footer__list__item" href="Наша команда">Наша команда</a>
                </li>
                <li>
                  <a className="footer__list__item" href="Сертификаты">
                   Сертификаты
                  </a>
                </li>
              </ul>
              <ul className='footer__list'>
                <li>
                  <h3><a className="footer__list__item" href="Разделы">Разделы</a></h3>
                </li>
                <li>
                  <a className="footer__list__item" href="Контакты">Контакты</a>
                  </li>
                <li>
                  <a className="footer__list__item" href="Новости">Новости</a>
                </li>
                <li>
                  <a className="footer__list__item" href="Вакансии">Вакансии</a>
                </li>
              </ul>
              <ul className='footer__contacts'>
                <li>
                  Беларусь
                  <a href="tel:+375(17)2705377">+375 (17) 270 53 77</a>
                  <a href="tel:+375(17)2705378">+375 (17) 270 53 78</a>
                </li>
                <li>
                  Москва
                  <a href="tel:+7(495)2807344">+7 (495) 280 73 44</a>
                  <a href="tel:+7(495)2807344">+7 (495) 280 73 44</a>
                </li>
              </ul>
              <ul className='footer__contacts'>
                <li>
                  Европа
                  <a href="tel:+48731111044">+48 73 1111 044</a>
                </li>
                <li>
                  Екатеринбург
                  <a href="tel:+7(343)3468206">+7 (343) 346 82 06</a>
                </li>
              </ul>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer