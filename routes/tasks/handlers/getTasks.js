const Task = require('../../../models/Task')

function getTasks (req, res) {

  Task.find()
    .then(tasks => res.render('./pages/list-task', { tasks }))
}

module.exports = getTasks
