const { MongoClient, ObjectID } = require('mongodb');

const connURL = 'mongodb+srv://admin:admin@cluster0.ylggq8p.mongodb.net/taskDB?retryWrites=true&w=majority';

const dbName = 'task-manager';
MongoClient.connect(connURL, (error, client) => {
    if(error) return console.log('Unable to connect to database');
    const db = client.db(dbName);
    // db.collection('users').insertOne({
    //     name: 'Rahul',
    //     age: 30
    // })
    // db.collection('users').insertOne({
    //     name: 'Rohit',
    //     age: 20
    // })
    // db.collection('users').insertOne({
    //     name: 'Dev',
    //     age: 24
    // })
    // .then(result => console.log('Data inserted successfully',result.ops))
    // .catch(error => console.log(error))
//     db.collection('users').insertMany(
//         [
//             {
//         name: 'Dev',
//         age: 24
//             },
//             {
//         name: 'Hari',
//         age: 22
//             },
//             {
//         name: 'Ramu',
//         age: 21
//             }
//         ]
//     )
//     .then(result => console.log('Data inserted successfully',result.ops))
//     .catch(error => console.log(error))
// db.collection('users').findOne({
//         name: 'Dev'
//     })
//     .then(result => console.log('Data found successfully',result))
//     .catch(error => console.log(error))
// db.collection('users').find({
//     name: 'Dev'
// })
// .toArray()
// .then(result => console.log('Data found successfully',result))
// .catch(error => console.log(error))
// db.collection('users').updateOne({
//     _id: new ObjectID('6422b41bd467f8331c9f47b4')
// }, { $set: {name: 'Rajan'}})
// .then(result => console.log('Updated Data', result.modifiedCount))
// .catch(error => console.log(error))
// db.collection('users').updateMany({ age:20 },{$set: {age: 30}})
// .then(result => console.log('Updated Data',result.modifiedCount))
// .catch(error => console.log(error))
db.collection('users').deleteOne({ 
//    db.collection('users').deleteOne({ age: 21})
    _id: new ObjectID('6422b38ff9c66c4f1c615fcf')
})
.then(result => console.log('Deleted Data', result.deletedCount))
.catch(error => console.log(error))
// db.collection('users').deleteMany({ age: 30 })
//     .then(result => console.log('Deleted Data', result.deletedCount))
//     .catch(error => console.log(error))
})
