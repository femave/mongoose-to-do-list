const Task = require('../../../models/Task')

function doneTask (req, res) {
  const { id } = req.params
  const {task} = req.body
  
  Task.findByIdAndUpdate(id,{title: task})
    .then(() => res.send('`Task w/ id ${id} was updated succesfully`'))
    .catch(() => res.send(`FAIL!! Task w/ id ${id} was NOT removed`))
}

module.exports = doneTask
