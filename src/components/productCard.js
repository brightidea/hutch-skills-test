import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../actions/productActions';

class ProductCard extends Component {
  onClickHandler(product, type) {
    if(type ==='similar') {
      let updatedProduct = this.updateProductImage(this.props.selectedProduct.selectedProduct, product.url);
      let updatedProductArray = this.updateProductArray(this.props.roomData.products, updatedProduct);
      let updatedRoomData = this.updateRoomData(this.props.roomData, updatedProductArray);

      this.props.productActions.useSimilarProductImage(updatedRoomData);
    } else {
      this.props.productActions.selectProduct(this.props.product, '');
    }
  }

  updateProductImage(product, url) {
    let productObject = product
    let updatedProductObject = Object.assign({}, productObject, {url:url});
    return updatedProductObject;
  }

  updateProductArray(productArray, updatedProduct) {
    let newProductArray = [];
    for(var i = 0; i < productArray.length; i++) {
      if(productArray[i].index !== updatedProduct.index) {
         newProductArray.push(productArray[i]);
      } else {
        newProductArray.push(updatedProduct);
      }
    }

    return newProductArray;
  }

  updateRoomData(roomData, newProductArray) {
   let newRoomData = roomData;
   newRoomData.products = newProductArray

    return newRoomData;
  }
  // updateRoomData(roomData, product) {
  //   let roomProducts = roomData.products;
  //   let index = this.findProductInArray(roomData.products, 'id', product.id);
  //   let cleanedProductArray = roomProducts.splice(index, 1);
  //   let newRoomProducts = roomProducts.unshift(product);

  //   return newRoomProducts;
  // }

  findProductInArray(roomDataProducts, attr, value) {
    for(var i = 0; i < roomDataProducts.length; i += 1) {
        if(roomDataProducts[i][attr] === value) {
            return i;
        }
    }
    return -1;
  }

  formatPrice(number) {
    return "$" + number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }

  render() {
    var styles = {
      productCard: {
        width: '45%',
        height: '120px',
        background: 'white',
        border: '1px solid #ececec',
        margin: '2%',
        float: 'left',
        boxShadow: '0px 1px 1px 0px rgba(0,0,0,0.1)',
        image: {
          width: 'auto',
          maxWidth:'70%',
          margin: '10%',
          padding: '0',
          maxHeight: '45px',
          boxSizing: 'border-box'
        },
        hover: {
          width: '45%',
          height: '120px',
          background: 'white',
          margin: '2%',
          float: 'left',
          boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.2)',
          border: '1px solid #fbd7d2'
        }
      }
    }
    let unformatedPrice = this.props.product.price;
    let price = this.formatPrice(unformatedPrice);
    let onclickHandlerType = this.props.onClickType
    return (
      <div className={'product-card '} style={styles.productCard} onClick={() => this.onClickHandler(this.props.product, onclickHandlerType)} >
        <img src={this.props.product.url} style={styles.productCard.image} alt={this.props.type}/>
        <div>{price}</div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  productActions: PropTypes.object,
  selectedProduct: PropTypes.object,
  product: PropTypes.object.isRequired,
  roomData: PropTypes.object,
}

function mapStateToProps(state, props) {
  return {
    selectedProduct: state.selectedProduct,
    roomData: state.roomData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
