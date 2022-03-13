const queue = require('./queue');
const fs = require('fs');

  // define queue
const q1 = new queue();
  

fs.readFile('actions.txt', 'utf8', function(err, data) {
    if (err) throw err;

    const array = data.toString().split("\n");

    for(i in array) {
        const stringSplit = array[i].split(',');
        // console.log(stringSplit[0]);

        switch (stringSplit[0]) {
            case "ADD": q1.add(stringSplit[1]); break;
            case "REMOVE_USER": q1.removeById(stringSplit[1]); break;
            case "MOVE": q1.move(stringSplit[1], stringSplit[2]); break;
            case "REVERSE": q1.reverse(); break;
            case "SWAP": q1.swap(stringSplit[1], stringSplit[2]); break;
            case "REMOVE_POSITION": q1.removeByPosition(stringSplit[1]); break;
            case "PRINT": q1.printData(); break;
    }
    }

});



// q1.add({id: 1, name: 'rameez'});
// q1.add({id: 2, name: 'mark'});
// q1.add({ id: 3, name: 'Revel' });

//   q1.removeById(2);
//   q1.removeByPosition(1);

//   q1.reverse();
//   q1.swap(1,2);
// q1.printData()
//   q1.move(0,2);