const express = require('express')
const router = express.Router()

const addTask = require('./handlers/addTask')
const getTasks = require('./handlers/getTasks')
const updateTask = require('./handlers/updateTask')

router.post('/', addTask)
router.get('/', getTasks)
router.put('/updateTask/:id', updateTask)

module.exports = router