var githubUsers = require('./index');

githubUsers.getData("ol-web", function(error, data){
    if(error) throw error;
    console.log(data);
});

githubUsers.getRepos("ol-web", function(error, repos){
    if(error) throw error;
    console.log(repos.length);
});