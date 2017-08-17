const express = require('express')
const router = express.Router()

const removeTask = require('./handlers/removeTask')
const doneTask = require('./handlers/doneTask')
const doneAll = require('./handlers/doneAll')

router.delete('/:id', removeTask)
router.put('/doneTask/:id', doneTask)
router.put('/doneAll', doneAll)

module.exports = router
