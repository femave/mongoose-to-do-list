// start todo
$('.remove').on('click', function(e) {
  const $input = $(this).siblings('input')
  let taskID = $input.val()
  $.ajax({
    url: '/task/doneTask/' + taskID,
    method: 'PUT'
  })
  .then( data => {
  	$(this).parent().parent().addClass("selected")
  } )

})

$('.delete').on('click', function(e) {
  const $input = $(this).siblings('input')
  const posId = $input.val()
  $.ajax({
    url: '/task/' + posId,
    method: 'DELETE'
  })
  .then( data => {
    window.location.reload()
  } )

})



$('.removeAll').on('click', function(e) {

  $.ajax({
    url: '/task/doneAll/',
    method: 'PUT'
  })
  .then( data => {
    $('.list-group-item').addClass("selected")
  } )

})

// $('.list-group-item').on('click', function(e){
//   e.preventDefault()
//   $(this).toggleClass('selected')
// })

$('.taskItem').on('click', function(e){
  e.preventDefault()
   $(this).toggleClass('hidden')
   $(this).siblings('input').toggleClass('hidden').focus()
})


$('.inpTask').keypress(function (e) {
  if (e.which == 13) {
    // $(".list-group-item").on("click");
    $(this).siblings('.taskItem').text(this.value);
    $(this).toggleClass('hidden')
    $(this).siblings('.taskItem').toggleClass('hidden')

    const $input = e.target.parentElement.children[1].value
    const idPath = e.target.parentNode.childNodes[2].children[0].value

    $.ajax({
    url: '/tasks/updateTask/' + idPath,
    method: 'PUT',
    data: {task : $input}
  })

    return false;  
  }

});