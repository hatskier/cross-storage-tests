import crossStorage from "cross-storage";

window.runHub = function () {
  crossStorage.CrossStorageHub.init([
    {origin: /localhost:1234$/, allow: ['get', 'set', 'del']},
    {origin: /.*$/, allow: ['get']}
  ]);
}

runHub();

window.runClientSet = function () {
  var storage = new crossStorage.CrossStorageClient('http://localhost:1234');
  storage.onConnect().then(async function() {
    console.log("Connected to cross-storage. Setting value...");
    await storage.set("test-key", "42");
    console.log("Done");
  });
}

window.runClient = function () {
  var storage = new crossStorage.CrossStorageClient('http://localhost:1234');
  storage.onConnect().then(function() {
    console.log("Connected. Getting value...");
    storage.get("test-key").then(console.log);
  });
}

window.testSave = function (key, value) {
  localStorage[key] = value;
}

// console.log('Hello world!');
