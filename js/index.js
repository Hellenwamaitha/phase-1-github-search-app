document.addEventListener('DOMContentLoaded', function() {
// Accessing elements from the DOM
  const form = document.quaryselector("#github-form")
  form.addEventlistener('submit', (e)) =>{
    e.preventDefault()
    let search = e.target.search.value
    //console.log(search)
    handlesearch(search)

  function handlesearch() {
    fetch()
  }
  }
})
    