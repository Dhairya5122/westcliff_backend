const { MongoCLient } = require("mongodb");

const client = new MongoCLient("mongodb://localhost/nodemongo");

client.connect().then;
