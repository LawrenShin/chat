class Room {
    constructor(id){
        this.id = id;
        this.userPool = [];
    }
    addUser(name){
        this.userPool.push(name);
    }
    removeUser(name){
        this.userPool = this.userPool.filter(u => u !== name);
    }
    getPool(){
        return this.userPool;
    }
    getId(){
        return this.getId;
    }
}

module.exports = Room;
