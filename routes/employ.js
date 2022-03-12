const express = require("express")
const router = express.Router()

const EmployController = require('../controller/emoloycontroller')

router.get('/', EmployController.index)
router.post('/show', EmployController.show)
router.post('/store', EmployController.store)
router.get('/update', EmployController.update)
router.get('/delete', EmployController.destroy)


module.exports = router