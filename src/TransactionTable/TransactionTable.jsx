// Modules
import React from 'react';

// Requests
import axios from 'axios';

// css
// import ReactTable from 'react-table';
import { Table } from 'reactstrap';

export class TransactionTable extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    axios.get("http://private-3f9656-paymiuminterviews.apiary-mock.com/transactions")
    .then( res => res.data )
    .then( data => this.setState({transactions: data}))
    .catch( error => console.error( error ));
  }

  render() {
    const {
      transactions
    } = this.state;

    // const columns = [{
    //   Header: 'DD-MM-YYYY',
    //   accessor: 'created_at'
    //   }, {
    //     Header: 'Counterparty Name',
    //     accessor: 'counterparty_name'
    //   }, {
    //     id: "payment type",
    //     Header: 'Payment Type',
    //     accessor: transaction => (transaction.credit) ? "credit" : (transaction.debit) ? "debit" : ""
    //   }, {
    //     id: "amount",
    //     Header: "Amount", // Custom header components!
    //     accessor: transaction =>
    //       (transaction.credit) ? "+" : (transaction.debit) ? "-" : ""
    //       + transaction.amount
    //       + transaction.currency
    // }]

    // Better table but long customisation
    // <ReactTable
    //   data={transactions}
    //   columns={columns}
    // />

    // Simpler Table but cannot be customised for sorting
    return (
      <div style={{"padding": "20px"}}>
         <Table borderless size="sm">
           <thead>
             <tr>
               <th>DD-MM-YYYY</th>
               <th>Counterparty Name</th>
               <th>Payment Type</th>
               <th>Amount</th>
             </tr>
           </thead>
           <tbody>
           {
             transactions ?
               transactions.map(
                 transaction => (
                   <tr>
                     <td>transaction.created_at</td>
                     <td>transaction.counterparty_name</td>
                     <td>{(transaction.credit) ? "credit" : (transaction.debit) ? "debit" : null}</td>
                     <td>
                       {((transaction.credit) ? "+" : (transaction.debit) ? "-" : "")
                         + transaction.amount
                         + transaction.currency
                       }
                     </td>
                   </tr>
                 )
               )
               :
               null
           }
           </tbody>
         </Table>
      </div>
    )
  }
}
