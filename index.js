const express = require('express')
const router = require('./router/index')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const firebase = require('firebase');
const admin = require("firebase-admin");
var serviceAccount = require("./key.json");
//fireBase configuration

// const firebaseConfig = {
//     apiKey: "AIzaSyD-g0YAm2ogZu1uOV5a_T0q6G7eaJGRrlI",
//     authDomain: "loanmangment-718b7.firebaseapp.com",
//     projectId: "loanmangment-718b7",
//     storageBucket: "loanmangment-718b7.appspot.com",
//     messagingSenderId: "373764052774",
//     appId: "1:373764052774:web:1d4c59c38e426c82a1d3e7",
//     measurementId: "G-GPW10Y1PTV"
//   };

//   firebase.initializeApp(firebaseConfig)

//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
// })

// const  db = firebase.firestore();
app.use(bodyParser.json())
//   app.post('/user/registration',(req,res)=>{
//       (async()=>{
//           try{
//               // let response = []
//               const id = req.email
//               const data = {
//                   'name':req.body.name,
//                   'email':req.body.email,
//                   'password':req.body.password
//                 }
//                 console.log(data);
    
    
//             const response = db.collection("Users").doc(id).set(data);
//             console.log(response);
//             return res.status(200).send(response)

//             // await db.collection('Users').get().then(querysnapshot=>{
//             //     console.log(querysnapshot.docs);
//             //     let docs = querysnapshot.docs
//             //     for(let doc of docs){
//             //         console.log(doc);
//             //         response.push(doc.data())
//             //     }
//             //     return res.status(200).send(response)
//             // })
//         }catch(error){
//             return res.status(500).send(error)
//         }
//     })()
//   })


app.use(cors({
        origin: "*"
    }

))
app.use(router)
    // app.use('/upload',express.static(path.join(__dirname,'upload')))


 let hostName = '0.0.0.0'
 app.listen('8081',hostName, () => {
    console.log('server is working on 8081')
})