import  { Component } from 'react'
import Layout from '../components/layout';
import Home from '../components/home';
import About from '../components/about';
import Sertificate from '../components/certificate';
import Product from '../components/product';
import Team from '../components/team';
import News from '../components/news';


class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Home/>
        <About/>
        <Sertificate/>
        <Product/>
        <Team/>
        <News/>
      </Layout>
    )
  }
}

export default HomePage;