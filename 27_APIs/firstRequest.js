const axios = require("axios");

// Make a request for a user with a given ID (with themable promise)
axios.get("https://jsonplaceholder.typicode.com/todos/1")
	.then(response => {
		// handle success
		console.log(`Title: ${response.data.title}`);
	})
	.catch(error => {
		// handle error
		console.log(error);
	})
	.finally(() => {
		// always executed
	});

// async/await version
(async () => {
	try {
		const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
		console.log(`userId: ${response.data.userId}`);
	} catch (err) {
		console.log(err);
	}
})();