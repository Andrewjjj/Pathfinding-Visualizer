// Lol @ the name tho.

class NodeBox{
    constructor(){
        this.nodeBox=[];
    }

    set(nodeBox){
        this.nodeBox=nodeBox;
    }

    get(x, y){
        return this.nodeBox[y][x];
    }
}

class Node {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.visited = false;
        this.div;
    }

    setDiv(div){
        this.div = div;
    }

    visit(){
        this.visited = true;
    }

    animateVisit(){
        this.div.setAttribute('style', 'background-color: #CEAA8F');
    }
}