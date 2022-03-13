class Queue {

    constructor() { 
        this.q = []; 
    }

    receive(){ 
        return this.q;
    }

    add(data) {
        this.q.push(data);
        console.log('Position in Queue', this.q.length);
        return;
    }

    removeById(userId) {
        console.log('Before Removal', this.q);

        this.q.splice(userId, 1);

        console.log('After removal', this.q);

        return this.q;
    }

    removeByPosition(index) {

        if (index <= 0) {
            console.error('Value should start from 1');
            return;
        } 
        console.log('Index to remove -->', index);

        index -= 1;
        this.q.splice(index, 1)
        
        console.log(this.q);
        return;
    }
  
    move(p1, p2) {

        if (p2 >= this.q.length) {
            var k = p2 - this.q.length + 1;
            while (k--) {
                this.q.push(undefined);
            }
        }
        this.q.splice(p2, 0, this.q.splice(p1, 1)[0]);
        
        console.log('After moving', this.q);

        return;

    }

    swap(p1, p2) {
        
        if (this.q[p1] == undefined || this.q[p2] == undefined ) {
            console.error("Swaping positions not exist");
            return;
        }

        console.log('Before swaping', this.q);
        const tempData = this.q[p1];
        this.q[p1] = this.q[p2];
        this.q[p2] = tempData;
        console.log('After swapping', this.q)
        return;
    }

    reverse() {
        let reversed = [];
        while (this.q.length) {
          reversed.push(this.q.pop());
        }
        this.q = reversed;
        console.log('reserved', this.q);
        return;
    }

    printData() {
        this.q.map(x => {
            console.log({ ...x });
            return;
        });
    }

  }

  module.exports = Queue;