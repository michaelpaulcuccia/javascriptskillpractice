/*
fetch('./info.json')
    .then(res => {res.json()})
    .then(data => console.log(data));
*/

/*
let myRequest = new Request("./info.json");

fetch(myRequest)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
    });
*/

/*
fetch('./info.json')
.then(res => res.json())
.then(data => {
  console.log(data)
})
.catch(err => console.error(err));
*/

/*
let info = import('./info.json')
.then(res => res.json())
.then(data => {
  console.log(data)
})
.catch(err => console.error(err));
*/


//https://medium.com/chuans-blog/how-to-read-a-local-file-with-the-browser-using-fetch-api-c8a69e8294cd

fetch('./info.json', {mode: 'no-cors'})
.then(response => response.text())
.then(data=> console.log(data))
.catch(error => console.error(error));