const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/users/2")
	.then(response => {
		console.log(`${response.data.name} lives in ${response.data.address.street}, ${response.data.address.city}.`);
		console.log(`Contact him at ${response.data.phone}.`);
	})
	.catch(error => {
		console.log(error);
	})
	.finally(() => {
	});