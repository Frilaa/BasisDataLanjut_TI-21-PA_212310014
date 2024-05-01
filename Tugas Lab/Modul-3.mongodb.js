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
// db.createCollection("actor")
// db.createCollection("customers")
// db.createCollection("address")
// db.createCollection("products")
// db.createCollection("orders")
// db.createCollection("film")
// db.createCollection("language")
// db.createCollection("orderDetails")

// db.customers.insert([{
//     id: "Fernanda",
//     fullname: "Fernanda Ramos",
//     email: "fernadaramos4@uol.com.br",
//     age: 24
// },
// {
//     id: "Mark",
//     fullname: "Mark Philips",
//     email: "mphilips12@shaw.ca",
//     city: "San Francisco"
// },
// {
//     id: "Jennifer",
//     fullname: "Jennifer Peterson",
//     email: "jenniferp@rogers.ca",
//     occupation: "teacher"
// }])

// db.actor.insert([{
//     id: 1,
//     First_Name: "Frila",
//     Last_Name: "Cw",
//     Last_Update: "2024-03-11 10:46:54"
// },
// {
//     id: 2,
//     First_Name: "Frila",
//     Last_Name: "Cahya",
//     Last_Update: "2024-03-11 10:46:54"
// },
// {
//     id: 3,
//     First_Name: "Frila",
//     Last_Name: "Wardani",
//     Last_Update: "2024-03-11 10:46:54"
// }])

// db.address.insertOne(
//     {
//         Nama_Produk: "Kulkas",
//         Harga: 10000000,
//         Berat_Produk: 8.9,
//         Rusak: false,
//         Tanggal_Masuk: new Date(),
//         Tag: ["Elektronik", "Perabotan"],
//         Dimensi: {
//             tinggi: 80,
//             panjang: 50,
//             lebar: 20
//         },
//         Id_Product: ObjectId()
//     }
// )

// db.address.insertMany([
//     {
//         Nama_Produk: "TV",
//         Harga: 5000000,
//         Berat_Produk: 4.5,
//         Rusak: false,
//         Tanggal_Masuk: new Date(),
//         Tag: ["Elektronik", "Perabotan"],
//         Dimensi: {
//             "tinggi": 30,
//             "panjang": 50,
//             "lebar": 40
//         },
//         Id_Product: ObjectId() 
//     },
//     {
//         Nama_Produk: "Meja",
//         Harga: 750000,
//         Berat_Produk: 5,
//         Rusak: false,
//         Tanggal_Masuk: new Date(),
//         Tag: ["Perabotan"],
//         Dimensi: {
//             "tinggi": 50,
//             "panjang": 70,
//             "lebar": 35
//         },
//         Id_Product: ObjectId()  
//     },
//     {
//         Nama_Produk: "Kursi",
//         Harga: 200000,
//         Berat_Produk: 3,
//         Rusak: false,
//         Tanggal_Masuk: new Date(),
//         Tag: ["Perabotan"],
//         Dimensi: {
//             "tinggi": 20,
//             "panjang": 30,
//             "lebar": 25
//         },
//         Id_Product: ObjectId()  
//     }
// ])

// db.customers.update(
//     { id: "Jennifer" },
//     { $set: { fullname: 'Jennifer Aniston' } }
// )

// db.customers.update(
//     { id: "Mark" },
//     { $set: { fullname: 'Mark Daihatsu' } }
// )

db.address.remove(
    {Nama_Produk: "Kursi"}
)

db.address.remove(
    {Nama_Produk: "Meja"}
)