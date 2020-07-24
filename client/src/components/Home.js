import React, { Component } from 'react'
import { Wave } from 'react-animated-text';
import { Random } from 'react-animated-text';

import './Home.css';




class Home extends Component {
  render() {
    return (
      <section className="container back" >
            <div className="text-dark display-2 text-center header-text" >
          
              <Wave className="text-white display-3 text-center header-text"  text="WELCOME TO MIGRANT-SOLUTONS INTERNS DASHBOARD" />
      </div>
      </section>
      
    )
  }
}
export default Home; 