import { Component } from 'react';


import "./card.scss";

class Card extends Component {
  render() {
    const {fullName, position, phone, img, email } = this.props;
    return (
        <div className='card'>
            <img src={img} className='card__img'  alt={fullName} />
            <h3 className='card__title'>{fullName}</h3>
            <p className='card__text'>
                {position}
            </p>
            <p className='card__number'>
               {phone}
            </p>
            <p className='card__email'>
                {email}
            </p>
        </div>
    )
  }
}

export default Card;