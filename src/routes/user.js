import express from 'express'
import * as User from '../controllers'
const router= express.Router()
router.post('/createUser',User.createUser)
router.get('/getUser',User.getAllUser)

module.exports = router