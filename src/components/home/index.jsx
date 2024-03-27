import { Component } from 'react'


import './home.scss';
import Button from '../button';

class Home extends Component {
  render() {
    return (
      <section id='home' className='home'>
        <div className="container home__container">
            <p className='home__intro'>
                LEANGROUP - тубы и этикетки
            </p>
            <h1 className='home__title'>
                Ламинатные тубы
            </h1>
            <p className='home__desc'>
                Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
            </p>
            <Button text = "Каталог"/>
        </div>
      </section>
    )
  }
}

export default Home