/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('rentalfilm');

// Insert a few documents into the sales collection.
// db.customers.createIndex({age : 1})

// db.customers.createIndex({id : 1}, {unique: true})

// db.address.createIndex({"Nama_Produk" : 1}, {sparse : true})

// db.actor.createIndex({"last_update" : 1}, {expireAfterSeconds :60})

// db.customers.createIndex({"email" : 1}, {v : 1})

// db.film.createIndex({Title : "text"}, {weights: {Title : 5}})

// db.customers.createIndex({email : "text"}, {default_language: "english"})

// db.actor.createIndex({First_Name: "text"}, {language_override: "spanish"})

// db.customers.aggregate([ {$group: {_id: null, age: {$sum: '$age'}}}])

// db.customers.aggregate([ {$group: {_id: null, age: {$avg: '$age'}}}])

// db.customers.aggregate([ {$group: {_id: null, age: {$min: '$age'}}}])

// db.customers.aggregate([ {$group: {_id: null, age: {$max: '$age'}}}])

// db.actor.updateOne({id : 1}, {$push : {Usia: 40}})

// db.actor.updateOne({id : 1}, {$addToSet : {Usia: 70}})

// db.customers.aggregate({$group: {_id: null, first: {$first: "$$ROOT"}}})

// db.customers.aggregate({$group: {_id: null, last: {$last: "$$ROOT"}}})

// db.customers.aggregate([{
//     $project: {
//       "joinedDate": 0
//     }
// }])

// db.customers.aggregate([{
//     $match: {
//       fullname: "Fernanda Ramos"
//     }
// }])

// db.customers.aggregate([{
//     $group: {
//         age: 27,
//     }
// }
// ]);
// [ {age: 27}, {age: 39}]

// db.customers.aggregate([{
//     $sort: {
//       fullname: 1
//     }
// }])

// db.customers.aggregate([{
//     $limit: 2
// }])

// db.actor.aggregate([{
//     $match: {First_Name: "Frila"}
// }])

// db.film.aggregate([{
//     $sort: {
//         Rating: -1
//     }
// },
// {
//     $limit: 2
// }])

// db.film.aggregate([{
//     $group: {
//       _id: "$Release_Year",
//       count: {
//         $sum: 1
//       }
//     }
// }])

// db.actor.aggregate([{
//     $lookup: {
//       from: "actor_film",
//       localField: "Id",
//       foreignField: "Actor Id",
//       as: "films"
//     }
// }])

// db.film.aggregate([{
//     $group: {
//       _id: null,
//       averageLength: {
//         $avg: "$Duration"
//       }
//     }
// }])

