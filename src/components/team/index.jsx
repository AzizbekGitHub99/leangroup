import React, { Component } from 'react'

import Button from '../button';

import Card from '../team-card';
import teams from '../../data/team';

import "./team.scss";

export class Team extends Component {
  render() {
    return (
      <section id='team' className='team'>
        <div className="container team__container">
            <h2 className='team__title'>
                Наша <span>команда</span>
            </h2>
            <div className='team__cards__row'>
            {teams.map((el, i) =><Card key={i} {...el}/> )}
            </div>
           <Button text = "Наша команда" />
        </div>
      </section>
    )
  }
}

export default Team;