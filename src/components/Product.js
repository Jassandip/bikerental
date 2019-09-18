import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0,
            message: ""
        }
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
    }
    add(e) {
        e.preventDefault();

        this.setState({
            quantity: this.state.quantity + 1
        })
    };
    remove(e) {
        e.preventDefault();
        if (this.state.quantity > 0) {
            this.setState({
                quantity: this.state.quantity - 1
            })
        }
    };
    update(e) {
        e.preventDefault();
        console.log(this.props.product)
        if (this.props.id < 4){
        this.props.update(
            this.props.id,
            this.state.quantity,
        )
    }
    else if (this.props.sideItem === true) { 
        this.props.update(
            this.props.id,
            this.state.quantity,
        );
        this.setState({
            message: ""
        });
    }
    else {
        this.setState({
            quantity: 0,
            message: "Need to purchase a bike in order to get this item"
        });
    }
}
    ;
    render() {
        const { name, price, image, product_type } = this.props;
        return (
            <div className="product-main">
                <div>
                    <img src={image} alt={name} />
                </div>
                <p>{name}</p>
                <p>{product_type}</p>
                <p>${price}</p>
                <form onSubmit={this.props.handler}>
                    <button
                        onClick={this.remove}
                    >-
      </button>
                    {this.state.quantity}
                    <button
                        onClick={this.add}
                    >+
      </button>
                </form>
                <p>
                    <button onClick={this.update}
                        style={{
                            // backgroundColor: 'balck',
                        }}> Submit </button></p>
                        <p>{this.state.message}</p>
                {/* <Button onClick = {this.props.handler} /> */}
            </div>
        )
    }
}
export default Product;