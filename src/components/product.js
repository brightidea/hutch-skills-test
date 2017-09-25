import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Product extends Component {

  render() {
    var styles = {
      position:'absolute',
        width: this.props.width + '%',
        height: this.props.height + '%',
        background: 'transparent url('+ this.props.url +') no-repeat center',
        top: this.props.top + '%',
        left: this.props.left + '%',
        backgroundSize: 'contain',
        zIndex: this.props.index,
        pointerEvents:'auto',
        cursor: 'pointer'
    }

    return (
      <div className={'product '} style={styles} >
    </div>
    );
  }
}
Product.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  similar_producs:  PropTypes.array,
}

export default Product;
