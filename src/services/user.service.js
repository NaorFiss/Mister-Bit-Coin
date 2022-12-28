import { storageService } from '../services/storage.service.js'

export const userService = {
    getUser,
    signup,
    addMove,
    isUser

}

var gUser = storageService.load('User_KEY', gUser) ?
    storageService.load('User_KEY', gUser) : null

const users = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Puki Ben-David",
        "coins": 100,
        "moves": []
    }
]



function signup(name) {
    let user = getEmptyUser()
    user.name = name
    user._id = _makeId()
    user.url = `https://robohash.org/set_set4/${user._id}`
    console.log(user)
    gUser = user
    storageService.store('User_KEY', gUser)


}
function isUser() {
    return gUser ? true : false
}

async function getUser() {
    return Promise.resolve(gUser)
}

function addMove(contact, amount) {
    const move = {
        toId: contact._id,
        to: contact.name,
        at: new Date(),
        amount
    }
    gUser.moves.unshift(move)
    gUser.coins -= amount
    storageService.store('User_KEY', gUser)
}

function getEmptyUser() {
    return {
        name: '',
        coins: 100,
        moves: [],
        url: ''
    }
}

function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}