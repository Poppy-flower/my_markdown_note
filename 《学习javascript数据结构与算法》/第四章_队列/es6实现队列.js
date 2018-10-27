let Queue = (function(){
    const items = new WeakMap();
    class Queue2{
        constructor(){
            items.set(this, []);
        }

        enqueue(element){
            let q = items.get(this);
            q.push(element);
        }

        dequeue(element){
            let q = items.get(this);
            q.shift(element);
        }
    }
    return Queue2;
})();