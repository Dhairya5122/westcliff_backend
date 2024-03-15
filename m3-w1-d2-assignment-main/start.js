const app = require('./demo-node-app/app');
 
const server = app.listen(3000, function(){
    console.log(`Express is running on port ${server.address().port}`);
});