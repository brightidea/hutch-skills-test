import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './productCard';
import {isEmptyObject} from '../helpers/helperFunctions';

class SimilarProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: {},
      similarProducts: []
    };
  }
  render() {
    if (!this.props.selectedProduct) {
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
          margin: '0 0 20px 0'
        },
        similarProducts: {
        }
      }
    }

    let selectedProduct = this.props.selectedProduct;
    let similarProducts = this.props.selectedProduct.similar_products;
    return (
      <div className="product-panel" style={styles.productPanel}>
        <h3 style={styles.productPanel.title}>{this.props.title ? this.props.title : 'Similar Products'}</h3>
        <div style={styles.productPanel.similarProducts}>
          { isEmptyObject(similarProducts) ? '' : <ProductCard product={selectedProduct} key={'123'} onClickType={'similar'} /> }
          
          { isEmptyObject(similarProducts) ? 'Sorry No Similar Products' :
            similarProducts.map((product, i) => (
              <ProductCard product={product} key={i} onClickType={'similar'} />
            ))
          }

        </div>
      </div>
    );
  }
}
SimilarProducts.PropTypes = {
  selectedProduct: PropTypes.object.isRequired,
  title: PropTypes.string
}

export default SimilarProducts;
