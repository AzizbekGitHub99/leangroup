import  { Component } from 'react'
import Layout from '../components/layout/Layout';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Sertificate from '../components/certificate/Certificate';
import Product from '../components/product/Product';
import Team from '../components/team/Team';
import News from '../components/news/News';


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