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
use('film');

// Insert a few documents into the sales collection.

// db.customer.find({Active : {$in : ["Y", "N"]}})

// db.customer.find({Active :{$nin :["Y","N"]}}).pretty()

// db.film.find({ title: { $regex: /g$/i } },{ title: 1, _id: 0 });

// db.film.find().limit(2).pretty()

// db.film.find({}, { title: 1, _id: 0 }).sort({ title: 1 });

// db.ArrTest.insertMany([
//     { name: "Data 1", numbers: [1, 2, 3] },
//     { name: "Data 2", numbers: [4, 5, 6] },
//     { name: "Data 3", numbers: [7, 8, 9] }
// ]);

// db.ArrTest.updateMany({}, { $push: { numbers: 10 } });

// db.ArrTest.updateMany({}, { $pull: { numbers: 7 } });

// db.ArrTest.updateMany({}, { $addToSet: { numbers: 5 } });
