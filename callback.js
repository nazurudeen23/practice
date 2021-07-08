function setUp(callback) {
  console.log("calling other function.");
  callback(2,3);
}

function add(x,y) {
  console.log(x*y);
}

setUp(add)
