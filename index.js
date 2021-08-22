// DOM element for main area
const main = document.getElementById('main');

// Append div to contain filter buttons
const button_div = document.createElement('div');
main.appendChild(button_div);
button_div.setAttribute('id', 'button_container');
button_div.addEventListener('click', (e) => {
  if (e.target.innerText === "random") {
    fetch_dog();
  }
})

// Use buttons to filter dogs being shown.
function addButton(label) {
  let button = document.createElement('button');
  button.className = 'filter_button';
  button_div.appendChild(button);
  button.innerText = label;
}

const filters = ["random"];

for (let filter of filters) addButton(filter);


const DOG_URL = "https://dog.ceo/api/breeds/image/random";

let new_img = document.createElement('img');
new_img.alt = "cute_doggo";
new_img.setAttribute('id', 'dog_img');
new_img.classList = "hidden";
main.appendChild(new_img);

let loading_img = document.createElement('img');
loading_img.classList = "dog_loader hidden";
loading_img.src = "./dog_loading.gif";
loading_img.alt = "doggo is loading!";

main.appendChild(loading_img);


function fetch_dog(filter = []) {
  
  new_img.classList = "hidden";
  loading_img.classList = "dog_loader";

  setTimeout(() => {
    fetch(DOG_URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        new_img.setAttribute('src', data.message);
        loading_img.classList = "hidden";
        new_img.classList = "";
      });
  }, 1000);
}



