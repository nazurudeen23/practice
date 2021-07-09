let seets = ["ws","ms","as"];
let sn = 5;
function findSeet() {
  if(sn == 1){
    console.log(`opposite seet is ${sn+3} and the seet position is ${seets[0]}`);
  }else if (sn==2) {
    console.log(`opposite seet is ${sn+3} and the seet position is ${seets[1]}`);
  }else if (sn==3) {
    console.log(`opposite seet is ${sn+3} and the seet position is ${seets[2]}`);
  }else if (sn==4) {
    console.log(`opposite seet is ${sn+3} and the seet position is ${seets[0]}`);
  }else if (sn==5) {
    console.log(`opposite seet is ${sn+3} and the seet position is ${seets[1]}`);
  } else {
    console.log(`opposite seet is ${sn+3} and the seet position is ${seets[2]}`);
  }
}

findSeet();
