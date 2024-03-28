import React, { Component } from 'react'


import './news-card.scss';
export class NewsCard extends Component {
  render() {
    const {img, date, desc} = this.props;
    return (
            <div className='news__card'>
                <div>
                    <img className='news__card__img' src={img} alt={desc} />
                </div>
                <p className='news__card__date'>{date}</p>
                <p className='news__card__desc'>{desc}</p>
            </div>
    )
  }
}

export default NewsCard;