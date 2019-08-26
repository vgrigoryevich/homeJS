const URL = "https://restcountries.eu/rest/v2/name/";
​
const find = name => {
  return fetch(`${URL}${name}`).then(resolve => resolve.json());
};
​
export default find;

const refs = {
    form: document.querySelector(".form")
}

console.log(refs.form);


const handleSubmit = evt => {
    evt.preventDefault()
    const [login, email, password] = evt.target.elements
    const user = {
        login: login.value,
        email: email.value,
        password: password.value,
    }

   userSubmit(user);

}

refs.form.addEventListener("submit", handleSubmit);



const user = {
    name: 'Hellsing'
}

const userSubmit = (user) => {
  console.log(user);
  
}



const options = {
method: 'POST',
body: JSON.stringify(user),
headers: {
    "Content-Type": "application/json"
}

}

fetch("http://localhost:3000/users", options)
    .then(response => response.json())
    .then(console.log);