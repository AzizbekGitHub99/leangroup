import React, { Component } from 'react'

import img from '../../assets/images/about.png'

import './about.scss'

export class About extends Component {
    render() {
        return (
            <section id='about' className='about'>
                <div className="container about__container">
                    <h2 className='about__title'>О компании <span>LEANGROUP</span></h2>
                    <div className='about__wrapper'>
                        <div>
                            <img className='about__img' src={img} alt="about section video" width={552}/>
                        </div>
                        <div>
                            <p className='about__text'>
                                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.
                                <br /><br />
                                Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.
                                <br /><br />
                                С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About