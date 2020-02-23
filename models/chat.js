class Chat {
    constructor(){
        this.rooms = [];
    }
    addRoom(room){
        this.rooms.push(room);
    }
    getRoom(roomNeeded){
        return this.rooms.filter(room => room.id === roomNeeded)[0];
    }
    updateRoom(roomUpdates){
        this.rooms = this.rooms.map(room => {
            if(room.id === roomUpdates.id){
                room = roomUpdates;
            }
            return room;
        });
    }
    removeRoom(id){
        this.rooms = this.rooms.filter(room => room.id !== id);
    }
}
module.exports = Chat;
