import React from 'react'
import {Link} from 'react-router'

export default ({orderTotals, handleCheckoutUserCart, userId}) => {
  function handleCheckout (event) {
    event.preventDefault()
    handleCheckoutUserCart(orderTotals, userId)
  }
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Order Total</h3>
        </div>
        <div className="panel-body">
          <dl className="dl-horizontal">
            <dt>Subtotal:</dt>
            <dd>{orderTotals.subtotal}</dd>
            <dt>Tax</dt>
            <dd>{orderTotals.tax}</dd>
            <dt>Shipping</dt>
            <dd>{orderTotals.shippingCost}</dd>
          </dl>
        </div>
        <div className="panel-footer">
          <dl className="dl-horizontal">
            <dt>Total:</dt>
            <dd>{orderTotals.totalCost}</dd>
          </dl>
        </div>
      </div>
      <Link to='#'>
        <button className="btn btn-default" type="submit" onClick={handleCheckout}>Proceed to Checkout</button>
      </Link>
    </div>
  )
}
