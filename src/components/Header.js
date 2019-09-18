import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const {total} = this.props;
        return(
            <div style={{
                width: '100%',
                background: '#87cefa',
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
       <p>         
      <Link to="/" className="navText">
     <p> Products</p>
      </Link>
      </p>
      <p>
      <Link to="/checkout" className="navText">
        Checkout
      </Link>
      </p>
                <p style={{
                    fontSize: '30px',
                    marginRight: '80px',
                }}>
                ${total}</p>
            </div>
        )
    }
}