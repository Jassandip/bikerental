import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Stripe from './Stripe';

export default class Checkout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: this.props.products.filter(product => product["quantity"] > 0)
            
        }
    }

    render(){
  const dataPre = this.state.products.map((product) => (  
    {
    name: product["name"],
    price: "$"+product["price"],
    quantity: product["quantity"],
    total: "$"+product["price"]*product["quantity"]
  }));
  const data = dataPre.concat({
      total: "$"+this.props.total
  });
 
const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  },{
    Header: 'Price',
    accessor: 'price' // String-based value accessors!
  },{
    Header: 'Quantity',
    accessor: 'quantity' // String-based value accessors!
  },{
    Header: 'Total',
    accessor: 'total' // String-based value accessors!
  }]
 
  return( 
<div>
  <ReactTable
    data={data}
    columns={columns}
    minRows={0}
    showPagination={false}
    style={{
        marginTop: '20px',
    }}
  />
  <Stripe style={{
    marginTop: '20px',
  }}/>
  </div>
  )
    }
}