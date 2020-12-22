import React, { Component } from 'react';

import './Bestsellers.css';

class Bestsellers extends Component {
  renderCardProduct(productInfo, index) {
    return (
      <div
        className={`cardProduct__container  ${productInfo.selected ? '--selected' : ''} `}
        key={index}
      >
        <img alt={productInfo.imageAlt} className="cardProduct__image" src={productInfo.imageURL} />
        <div className="cardProduct__description">
          <h3>{productInfo.name} </h3>
          <label className="cardProduct__labelBrand">{productInfo.brand}</label>
          <label className="cardProduct__labelPrice">{productInfo.price}</label>
        </div>{' '}
      </div>
    );
  }

  render() {
    return (
      <div className="bestsellers__container">
        <h1>{this.props.label}</h1>
        {this.props.products.map((productInfo, index) => {
          return this.renderCardProduct(productInfo, index);
        })}
        <div className="accordion__container">
          <h2>Free Shipping</h2>
          <img src="/assets/iconArrow.png" alt="Expand Section" />
        </div>
        <div className="accordion__container">
          <h2>Reviews (180)</h2>
          <img alt="Expand Section" src="/assets/iconArrow.png" />
        </div>
      </div>
    );
  }
}

export { Bestsellers };
