import  { Component } from 'react';

import Button from '../button';

import data from '../../data/news';
import NewsCard from '../news-card';

import './news.scss'

export class News extends Component {
  render() {
    return (
      <section className='news' id='news'>
        <div className="container news__container">
            <h2 className='news__title'>
                Новости
            </h2>
            <div className='news__row'>
                {data.map(el => <NewsCard img = {el.img} date = {el.date} desc = {el.desc}/>)}
            </div>
            <Button text = "Все новости" />
        </div>
      </section>
    )
  }
}

export default News