import React, { Component } from 'react'


export class ShopItemClass extends Component {
  render() {
    const props = this.props.item
    const {brand, title, description, descriptionFull, price, currency} = props
    return (
        <div class="main-content">
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div class="description">
          {descriptionFull}
        </div>
        <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
        <div class="divider"></div>
        <div class="purchase-info">
          <div class="price">{currency}{price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    )
  }
}
