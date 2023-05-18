const url = "http://localhost:5500/api"

function getUsers(){
  fetch(url)
  .then(response => console.log (response.json()))
  .then(data => renderApiResult.textContent=JSON.stringify(data))
  .catch(error=> console.error(error))
}
getUsers()