import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../css/style4.css'
import Navheader from '../Header/Navheader';

class Examination extends Component {
  render() {
    return (
      <div class="wrapper">
        <Header />
        <div className="container">
        <Navheader />
        <div className="card">
          <div className="card-header">
            <h3>Examination</h3>
          </div>
          <div className="card-body">

          </div>
        </div>
        <Footer />
        </div>
      </div>
    );
  }
}

export default Examination;
