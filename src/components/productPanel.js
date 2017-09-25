import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './productCard';
import {isEmptyObject} from '../helpers/helperFunctions';

class ProductPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }
  render() {
    if (!this.props.products) {
          return <div id={'product-panel'} />
    }
    var styles = {
      productPanel: {
        width:'30%',
        height:'100%',
        background: '#fff',
        title: {
          border: '1px solid #ececec',
          padding: '20px',
          margin: '0'
        },
        room: {
          width:'80vw',
          height:'100vh',
        },
        productList: {
        }
      }
    }
    let productList = this.props.products
    let productListCopy = productList.slice(0);

    return (
      <div className="product-panel" style={styles.productPanel}>
        <h3 style={styles.productPanel.title}>{this.props.title ? this.props.title : 'Products Shown'}</h3>
        <div style={styles.productPanel.productList}>
          { isEmptyObject(productListCopy) ? 'Sorry No Similar Products' :
            productListCopy.map((product, i) => (
              <ProductCard product={product} key={i} />
            ))
          }
        </div>
      </div>
    );
  }
}
ProductPanel.PropTypes = {
  products: PropTypes.array.isRequired,
  title: PropTypes.string
}

export default ProductPanel;
