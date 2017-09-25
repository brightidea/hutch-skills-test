import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from './actions/productActions';
import {isEmptyObject} from './helpers/helperFunctions'
import Room from './components/room';
import ProductPanel from './components/productPanel';
import SimilarProducts from './components/similarProducts'
import './App.css';

class App extends Component {
  componentWillMount() {
     this.props.productActions.fetchData();
  }

  render() {
    if (isEmptyObject(this.props.roomData)) {
          return <div />
    }

    var styles = {
      app: {
        width:'100%',
        maxWidth:'1000px',
        margin: '0 auto',
        position:'relative',
        boxSizing: 'border-box',
        designer: {
          display: 'flex',
          border: '1px solid #ececec',
        },
        title: {
          width:'100%',
          maxWidth:'1200px',
          textAlign: 'center',
          textTransform: 'capitalize',
          background: '#ececec',
          padding: '10px 0',
          margin:'0',
        },
        clearButton: {
            width: '200px',
            height: '30px',
            fontSize: '14px',
            lineHeight: '30px',
            background: '#111',
            position: 'absolute',
            color: 'white',
            right: '20px',
            top:'10px',
            borderRadius: '8px'
          }
      }
    }
    let ProductPanelProducts = this.props.roomData.products;
    let pageTitle = this.props.roomData.room_type ? this.props.roomData.room_type.replace(/_/g, " ") : 'Loading Room Type...';
    let productSelection = this.props.selectedProduct.selectedProduct ? this.props.selectedProduct.selectedProduct : {};
    let productIsSelected = !isEmptyObject(productSelection);
    let BackButton = !productIsSelected ? '' : <div onClick={() => this.props.productActions.clearSelectedProduct()} style={styles.app.clearButton} dangerouslySetInnerHTML={{ __html: "&#8592; Back To Product List" }} />;

    return (
      <div className="App" style={styles.app}>
        <h2 style={styles.app.title}>{pageTitle} {BackButton}</h2>
        <div className="designer" style={styles.app.designer}>
          <Room products={this.props.roomData.products} />
          
          { productIsSelected ? <SimilarProducts selectedProduct={productSelection} title={this.props.selectedProduct.selectedProduct.type} /> 
            : <ProductPanel products={ProductPanelProducts} />
          }
          
        </div>
      </div>
    );
  }
}

App.propTypes = {
  productActions: PropTypes.object,
  roomData: PropTypes.object.isRequired,
  selectedProduct: PropTypes.object
}

function mapStateToProps(state, props) {
  return {
    roomData: state.roomData,
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
)(App);
