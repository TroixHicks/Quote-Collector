const update = document.querySelector('#update-button')
let trash = document.getElementsByClassName("fa-trash");
const messageDiv = document.querySelector('#message')
let star = document.getElementsByClassName("fa-star");


Array.from(star).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const quote = this.parentNode.parentNode.childNodes[3].innerText

    fetch('color', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'quote':quote,
        'color': "6b9bd0",
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});


Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const quote = this.parentNode.parentNode.childNodes[3].innerText
    const bookTitle = this.parentNode.parentNode.childNodes[2].innerText
    fetch('quotes', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'quote':quote,
        'name': name,
        'bookTitle': bookTitle
        
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});

// deleteButton.addEventListener('click', _ => {
//     fetch('/quotes', {
//       method: 'delete',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
    
//         'quote': quote
//       })
//     })
//     .then(res => {
//         if (res.ok) return res.json()
//       })

//     .then(response =>{
//         if (response === 'No quote to delete'){
//             messageDiv.textContent = 'No Darth Vader quote to be deleted'
//             console.log('nothing else')
//         }
//     })
//       .then(data => {
//         window.location.reload()
//       })
//   })
  
  
    