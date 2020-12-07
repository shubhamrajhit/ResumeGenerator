import React, { Component } from 'react'
import Nav from './Nav'
import Header from './Header'
import SampleTemp from '../sample/SapmpleTemp'

class Home extends Component {
    state={

    }
    handletempOne=(name)=>{
        this.props.handleTemp(name)
    }
    render() {
        return (
            <div className="container-fluid" id="container">
                <Nav />
                <Header />
                <SampleTemp handletempOne={this.handletempOne} />
                
                
            </div>
        )
    }
}
export default Home