import React from 'react';
import './App.css';
import {firebaseConnect} from './firebaseConnect';
import * as firebase from 'firebase/app';
import 'firebase/firebase-database';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }

    this.handleClick = this.handleClick.bind(this);
    this.deleteData = this.deleteData.bind(this);
  };
  
  handleClick () 
  {
    var data = firebase.database().ref('user');
    // hàm data.push này sẽ tự động thêm vào thằng collection của mình mà ko cần thêm vào tên của document thay vào đó nó sẽ tự động tạo ra tên của document bằng cách hash ra thằng id
    data.push({
      id: 2,
      content: "This is a second content",
      name: "Trần Quốc Trung"
    })
    console.log('Added!!!');
  }

  deleteData (id) 
  {
    var data = firebase.database().ref('user');
    // hàm child dủng để lấy tên của document cần xóa và sau đó hàm remove chỉ làm nhiệm vụ là xóa cái document đó mà thôi
    data.child(id).remove();

    console.log('Removed!!');
  }

  render()
  {
    console.log(firebaseConnect);
    return (
      <div className="App">
        <h2>Hello</h2>
        <button onClick={this.handleClick}>Add new data into database on firebase</button>
        <button onClick={() => this.deleteData('user1')}>Remove data on firebase</button>
      </div>
    );
  }
}

export default App;
