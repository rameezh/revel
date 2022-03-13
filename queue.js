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
        const index = this.q.map(x => {
            return x.id;
        }).indexOf(userId);

        this.q.splice(index, 1);

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

    print() {
        this.q.map(x => {
            console.log({ ...x });
            return;
        });
    }

  }
  
  // define queue
  const q1 = new Queue();
  
  q1.add({id: 1, name: 'rameez'});
  q1.add({id: 2, name: 'mark'});
  q1.add({ id: 3, name: 'Revel' });

//   q1.removeById(2);
//   q1.removeByPosition(1);

//   q1.reverse();
//   q1.swap(1,2);
    q1.print()
//   q1.move(0,2);