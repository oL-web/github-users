# github-users

node.js module to access any Github user's data by Github API. Done for the purpose of learning node.js.

## Installation

You can install this package from npm:
```bash
npm install github-users
npm install --save github-users
npm install --save-dev github-users
```

Use in node:
```javascript
	const githubUsers = require("github-users");

	githubUsers.getData("ol-web", function(error, data){
		if(error) throw error;
		console.log(data);
	});

	githubUsers.getRepos("ol-web", function(error, repos){
		if(error) throw error;
		console.log(repos);
	});
```

## Documentation

githubUsers has two methods. Both of them take user's Github login as a first argument and a callback function as a second argument.

The callback function returns requested user data as a second argument.

## Is there something wrong?

Please tell me!