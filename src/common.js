
function pseudo_uuid(length=16) {
    let string = ""
    for (let i = 0; i < length; i++) {
        string += Math.floor(Math.random() * 16).toString(16)
    }
    return string
}

export default pseudo_uuid
