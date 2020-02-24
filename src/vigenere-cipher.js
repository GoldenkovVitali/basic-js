class VigenereCipheringMachine {
constructor(type = true) {
if (this.type = type){
this.type = 'direct' 
}
else {
this.type = 'reverse'
}
}

encrypt(message, key) {
    if (!key || !message) {
    throw Error()
    }
    key = key.toUpperCase();
    message = message.toUpperCase();
    let q=0;
    let newmessage = ''
    for (let i = 0; i < message.length; i++) {
    if (message[i].match(/^[A-Z]$/)) {
    newmessage += String.fromCharCode(((message[i].charCodeAt() + key[q % key.length].charCodeAt()) % 26) + 97)
    q=q+1;
    }
    else {
    newmessage = newmessage+message[i]
    }
    }
    if (this.type === 'reverse'){
    return newmessage.split('').reverse().join('').toUpperCase();
    }
    if (this.type === 'direct'){
    return  newmessage.toUpperCase()
    }
    }

    decrypt(newmessage, key) {
    if (!key || !newmessage) {
    throw Error()
    }
    newmessage = newmessage.toUpperCase()
    key = key.toUpperCase()
    let result = ''
    let i=0;
    let q=0;
    for (i; i < newmessage.length; i++) {
    if (newmessage[i].match(/^[A-Z]$/)) {
    let inconsistencies = newmessage[i].charCodeAt() - key[q % key.length].charCodeAt()
    if (inconsistencies >= 0) {
    result += String.fromCharCode((inconsistencies % 26) + 97)
    q=q+1;
    } 
    else {
    result = result+String.fromCharCode((26 + inconsistencies % 26) + 97)
    q=q+1;
    }
    } 
    else {
    result = result+newmessage[i]
    }
    }
    if (this.type === 'reverse'){
    return result.split('').reverse().join('').toUpperCase();
    }
    if (this.type === 'direct'){
    return  result.toUpperCase()
    }
    }
}
module.exports = VigenereCipheringMachine;
