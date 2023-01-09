const {Schema, model} = require('mongoose')

const friendSchema = new Schema({
  name: String
})

const Friends = model('Friends', friendSchema)

const getFriends = async () => {
  try {
    const list = await Friends.find()
    return list
  } catch (err) {
    console.log(err)
  }
}

const loadFriends = async () => {
  try {
    const friends = [{name: 'Ivan'}, {name: 'Kat'}, {name: 'Daniel'}]
    Friends.insertMany(friends)
    return
  } catch (err) {
    console.log(err);
  }
}

module.exports.getFriends = getFriends
module.exports.loadFriends = loadFriends