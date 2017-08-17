const Task = require('../../../models/Task')

function doneTask (req, res) {
  const { id } = req.params
  Task.findByIdAndUpdate(id,{done: true})
    .then(() => res.send('`Task w/ id ${id} was updated succesfully`'))
    .catch(() => res.send(`FAIL!! Task w/ id ${id} was NOT removed`))
}

module.exports = doneTask
