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

// db.createCollection("staff")

// db.staff.insertOne({
//     id: 1,
//     Nama: "Febri", // string
//     Alamat: "Bogor", // string
//     No_Hp: 081234567890, // int
//     Berat_Badan: 64.7, //decimal
//     Hidup: true, // boolean
//     Tanggal_Masuk: new Date(), // date
//     History: ["S1", "S2"], // array
//     Id_Product: ObjectId()
// })

// db.createCollection("continent", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             title: "continent validator",
//             required: ["continent", "last_update"],
//             properties: {
//                 continent: {
//                     bsonType: "string",
//                     description: "continent harus dalam rupa string dan wajib diisi"
//                 },
//                 last_update: {
//                     bsonType: "date",
//                     description: "last update harus dalam rupa string dan wajib diisi"
//                 },
//             }
//         }
//     }
// 

// db.continent.insertOne({ continent : "Asia", last_update : ISODate() })

// db.continent.insertOne({
//     continent: "Asia", last_update: 26-04-2024
// })

// db.customers.aggregate({
//     $lookup: {
//         from: "actor",
//         localField: "id",
//         foreignField: "id",
//         as: "join"
//     }
// });

