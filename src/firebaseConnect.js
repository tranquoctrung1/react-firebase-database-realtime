import * as firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-database';


var firebaseConfig = {
    apiKey: "AIzaSyBlabV5BKzU7MI3q8305MhOjCtPcxub9rk",
    authDomain: "react-firebase-25a7f.firebaseapp.com",
    databaseURL: "https://react-firebase-25a7f.firebaseio.com",
    projectId: "react-firebase-25a7f",
    storageBucket: "react-firebase-25a7f.appspot.com",
    messagingSenderId: "564367427512",
    appId: "1:564367427512:web:f8485dafdbc228b0a3b14d"
  };
  // Initialize Firebase
  export const firebaseConnect = firebase.initializeApp(firebaseConfig);

// get data in database realtime
var data = firebase.database().ref('user/user1');
// lấy dữ liệu
// data.once('value').then((snap) =>
// {
//     console.log(snap.val());
// })

// sữa dữ liệu cũng có thể dùng hàm set này để thêm dữ liệu nhưng mà hàm set thì cần phải vào đúng tên của cái document đó
// data.set({
//   content: 'This is my content',
//   name: "Trần Quốc Trung",
//   id: 1
// })