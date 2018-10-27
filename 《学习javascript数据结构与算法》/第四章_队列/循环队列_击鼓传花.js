function hotPotato(namelist, num){
    let queue = new Queue();
    for(let i = 0; i < namelist.length; i++){
        queue.enqueue(namelist[i]);
    }

    let elimited = '';
    while(queue.size() > 1){
        for(let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue());
        }
        elimited = queue.dequeue();
        console.log(`${elimited}在击鼓传花游戏中被淘汰`);
    }
    return queue.dequeue();
}
