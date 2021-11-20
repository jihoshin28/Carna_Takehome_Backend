const { Router } = require('express')
const quotesController = require('../controllers/student')
const bookingsController = require('../controllers/teacher')
const itemsController = require('../controllers/group')
const reviewsController = require('../controllers/course')
const quoteItemsController = require('../controllers/forum')
const bookingItemsController = require('../controllers/post')
const auth = require('../controllers/auth')
const admin = require('../controllers/admin')
const verifyToken = require('../middleware/index.js').verifyToken
 

const router = Router()

console.log(verifyToken, 'verifyToken')
router.get('/', (req, res) => res.send('Welcome to UpackHaulers!'))

// quotes routes

router.get('/quotes', verifyToken, quotesController.getAllQuotes)
router.get('/quotes/:id', verifyToken, quotesController.getQuoteById)
router.post('/quotes', verifyToken, quotesController.createQuote)
router.put('/quotes/:id', verifyToken, quotesController.updateQuote)
router.delete('/quotes/:id', verifyToken, quotesController.deleteQuote)

// bookings routes

router.get('/bookings', verifyToken, bookingsController.getAllBookings)
router.get('/bookings/:id', verifyToken, bookingsController.getBookingById)
router.post('/bookings', verifyToken, bookingsController.createBooking)
router.put('/bookings/:id', verifyToken, reviews.updateBooking)
router.delete('/bookings/:id', verifyToken, bookingsController.deleteBooking)

// items routes

router.get('/items', verifyToken, itemsController.getAllItems)
router.get('/items/:id', verifyToken, itemsController.getItemById)
router.post('/items', verifyToken, itemsController.createItem)
router.delete('/items/:id', verifyToken, itemsController.deleteItem)

// reviews routes

router.get('/reviews', verifyToken, reviewsController.getAllReviews)
router.get('/reviews/:id', verifyToken, reviewsController.getReviewById)
router.post('/reviews', verifyToken, reviewsController.createReview)
router.put('/reviews/:id', verifyToken, reviewsController.updateReview)
router.delete('/reviews/:id', verifyToken, reviewsController.deleteReview)

//quote_item routes

router.get('/quote_items', verifyToken, quoteItemsController.getAllQuoteItems)
router.post('/quote_items', verifyToken, quoteItemsController.createQuoteItem)
router.put('/quote_items/:item_id/:quote_id', verifyToken, quoteItemsController.updateQuoteItem)
router.delete('/quote_items/:item_id/:quote_id', verifyToken, quoteItemsController.deleteQuoteItem)

//booking_item routes

router.get('/booking_items', verifyToken, bookingItemsController.getAllBookingItems)
router.post('/booking_items', verifyToken, bookingItemsController.createBookingItem)
router.put('/booking_items/:item_id/:booking_id', verifyToken, bookingItemsController.updateBookingItem)
router.delete('/booking_items/:item_id/:booking_id', verifyToken, bookingItemsController.deleteBookingItem)

// Routes with verifyToken

// // quotes routes

// router.get('/quotes', verifyToken, quotesController.getAllQuotes)
// router.get('/quotes/:id', verifyToken, quotesController.getQuoteById)
// router.post('/quotes', verifyToken, quotesController.createQuote)
// router.put('/quotes/:id', verifyToken, quotesController.updateQuote)
// router.delete('/quotes/:id', verifyToken, quotesController.deleteQuote)

// // bookings routes

// router.get('/bookings', verifyToken, bookingsController.getAllBookings)
// router.get('/bookings/:id', verifyToken, bookingsController.getBookingById)
// router.post('/bookings', verifyToken, bookingsController.createBooking)
// router.put('/bookings/:id', verifyToken, reviews.updateBooking)
// router.delete('/bookings/:id', verifyToken, bookingsController.deleteBooking)

// // items routes

// router.get('/items', verifyToken, itemsController.getAllItems)
// router.get('/items/:id', verifyToken, itemsController.getItemById)
// router.post('/items', verifyToken, itemsController.createItem)
// router.delete('/items/:id', verifyToken, itemsController.deleteItem)

// // reviews routes

// router.get('/reviews', verifyToken, reviewsController.getAllReviews)
// router.get('/reviews/:id', verifyToken, reviewsController.getReviewById)
// router.post('/reviews', verifyToken, reviewsController.createReview)
// router.put('/reviews/:id', verifyToken, reviewsController.updateReview)
// router.delete('/reviews/:id', verifyToken, reviewsController.deleteReview)

// //quote_item routes

// router.get('/quote_items', verifyToken, quoteItemsController.getAllQuoteItems)
// router.post('/quote_items', verifyToken, quoteItemsController.createQuoteItem)
// router.put('/quote_items/:item_id/:quote_id', verifyToken, quoteItemsController.updateQuoteItem)
// router.delete('/quote_items/:item_id/:quote_id', verifyToken, quoteItemsController.deleteQuoteItem)

// //booking_item routes

// router.get('/booking_items', verifyToken, bookingItemsController.getAllBookingItems)
// router.post('/booking_items', verifyToken, bookingItemsController.createBookingItem)
// router.put('/booking_items/:item_id/:booking_id', verifyToken, bookingItemsController.updateBookingItem)
// router.delete('/booking_items/:item_id/:booking_id', verifyToken, bookingItemsController.deleteBookingItem)

//auth routes

router.post('/login', auth.login)

//admin routes

router.get('/admin', admin.getAdmin)
router.put('/admin/:id', admin.updateAdmin)

module.exports = router