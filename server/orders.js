'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const Orderline = db.model('orderlines')
const localUserStorage = require('store')

module.exports = require('express').Router()
  .use((req, res, next) => {
    //load the local storage cart
    req.cart = localUserStorage.get('cart')
    next()
  })
  .post('/cart/add', (req, res, next) => {
    // user cart: add/update orderline
    // check if orderline alredy exists for the item
    Orderline.findOrCreate({
      where: {
        product_id: req.body.productId,
        order_id: req.body.orderId,
        color: req.body.color,
      }
    })
    .spread((orderline, created) => {
      // if orderline was created and did not exist before
      if (created) {
        orderline.quantity = req.body.quantity
        orderline.unitPrice = req.body.price
        orderline.size = req.body.size
      } else {
      // if orderline already existed
        orderline.quantity = orderline.quantity + req.body.quantity
      }
      return orderline.save()
    })
    .then(orderline => res.json(orderline))
    .catch(next)
  })
  .post('/cart/add/guest', (req, res, next) => {
    //guest cart: add/update orderline
    let cart = localUserStorage.get('cart')
    cart.orderlines = cart.orderlines || []

    let existingOrderline = cart.orderlines.filter(orderline => {
      return orderline.product_id === req.body.productId
              && orderline.color === req.body.color
    })

    let newOrderline = {}
    // if orderline did not exist
    if (existingOrderline.length === 0) {
      newOrderline.id = cart.orderlines.length + 1
      newOrderline.product_id = req.body.productId
      newOrderline.color = req.body.color
      newOrderline.quantity = req.body.quantity
      newOrderline.unitPrice = req.body.price
      newOrderline.size = req.body.size
      newOrderline.subtotal = newOrderline.quantity * newOrderline.unitPrice
      newOrderline.product = req.body.product

      cart.orderlines.push(newOrderline)
    } else {
    // if orderline already existed
      newOrderline = existingOrderline[0]
      newOrderline.quantity += req.body.quantity
      newOrderline.subtotal = newOrderline.quantity * newOrderline.unitPrice

      cart.orderlines = cart.orderlines.map(orderline => {
        if (orderline.product_id === req.body.productId
              && orderline.color === req.body.color) {
          return newOrderline
        } else {
          return orderline
        }
      })
    }
    localUserStorage.set('cart', cart)
    res.json(newOrderline)
  })
  .get('/cart', (req, res, next) => {
    //guest user cart route

    if(!req.cart){
      localUserStorage.set('cart', { status: 'pending'})
      req.cart = localUserStorage.get('cart')
    }
    res.send(req.cart)
  })
  .get('/cart/:userId', (req, res, next) => {
      var cart = req.cart
      //is there a cart in local storage?
      //is it empty? if yes, then load the recent pending order or create one in db
      if(cart && cart.orderlines){
        //if the local storage cart has items, make that the pending cart for this user
        Order.create({
          status: cart.status,
          user_id: req.params.userId,
          orderlines: cart.orderlines
        }).then(newCart => {
          res.send(newCart)
        }).catch(console.error)
      } else {
        //if it is empty (does not have any orderlines added yet) or doesn't exist
        //find or create an existing pending cart for the user
        Order.findOrCreate({
          where: {
            status: 'pending',
            user_id: req.params.userId
          },
          order: [
            ['created_at', 'DESC'] //gets the most recently created order
          ],
          defaults: {
            status: 'pending',
            user_id: req.params.userId
          }
        }).spread((newCart, bool) => {
          localUserStorage.remove('cart')
          res.send(newCart)
        })
        .catch(console.error)
      }
  })
  .delete('/cart/delete/:userId/:orderId/:productId', (req, res, next) => {
    // user cart: delete product from orderline and load the updated order

    // not sure if this is RESTful but couldn't think of another way to make sure the new order rendered after the delete
    // let me know if you have suggestions
    Orderline.findOne({
      where: {
        order_id: req.params.orderId,
        product_id: req.params.productId,
      }
    })
    .then((orderlineToDelete) => {
      orderlineToDelete.destroy()
    })
    .then(() => {
      return Order.findOne({
        where: {
          user_id: req.params.userId,
          status: 'pending',
        }
      })
    })
    .then(updatedOrder => {
      res.json(updatedOrder)
    })
    .catch(next)
  })
