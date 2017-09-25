import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../actions/productActions';
import Product from './product.js'

class Room extends Component {
  render() {
    var styles = {
      room: {
        position:'relative',
        width:'70%',
        height: '0',
        background: '#fff url(' + this.props.room_photo +') no-repeat top',
        backgroundSize: 'contain',
        paddingBottom: '70%'
      }
    }
    let products = this.props.products ? this.props.products : [];

    return (
      <div id="room" style={styles.room}>
        {products.map((product, i) => (
          <Product {...product} key={i} />
        ))}
      </div>
    );
  }
}

Room.propTypes = {
  room_type:  PropTypes.string.isRequired,
  room_photo: PropTypes.string.isRequired,
  products:   PropTypes.array.isRequired,
}

function mapStateToProps(state, props) {
  return {
    room_type:state.roomData.room_type,
    room_photo: state.roomData.room_photo,
    products: state.roomData.products,
    selectedProduct: state.selectedProduct
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
)(Room);
