import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, { Storage, API } from 'aws-amplify';
import { Authenticator } from 'aws-amplify-react';
import config from './aws-exports';

Amplify.configure(config);

const fileName = 'test.txt';

class App extends Component {

  async getList(){
    try {
      const response = await API.get('api9ba8b6c3', '/items/1');
      alert(JSON.stringify({response}));
    } catch (error) {
      alert(JSON.stringify({error}))
    }
  }

  async getObject(){
    try {
      const response = await API.get('api9ba8b6c3', '/items/object/1/elorzafe');
      alert(JSON.stringify({response}));
    } catch (error) {
      alert(JSON.stringify({error}))
    }
  }
  async post(){
    try {
      const response = await API.post('api9ba8b6c3', '/items', {
        body: {
          id: '1',
          name: 'elorzafe'
        }
      });
      alert(JSON.stringify({response}));
    } catch (error) {
      alert(JSON.stringify({error}))
    }
  }
  async put(){
    try {
      const response = await API.put('api9ba8b6c3', '/items',{
        body: {
          id: '1',
          name: 'elorzafe2'
        }
      });
      alert(JSON.stringify({response}));
    } catch (error) {
      alert(JSON.stringify({error}))
    }
  }
  async delete(){
    try {
      const response = await API.del('api9ba8b6c3', '/items/object/1/elorzafe');
      alert(JSON.stringify({response}));
    } catch (error) {
      alert(JSON.stringify({error}))
    }
  }

  async getFile() {
    try {
      const file = await Storage.get(fileName, { download: true });
      alert(JSON.stringify({ file }));
    } catch (error) {
      alert(JSON.stringify({ error }))
    }
  }

  async uploadFile() {
    try {
      await Storage.put(fileName, 'testing testing 123 123');
      alert('File uploaded');
    } catch (error) {
      alert(JSON.stringify({ error }));
    }
  }

  async removeFile() {
    try {
      await Storage.remove(fileName);
      alert('File deleted');
    } catch (error) {
      alert(JSON.stringify({ error }));
    }
  }

  render() {
    return (
      <div className="App">
        <Authenticator></Authenticator>
        <button onClick={this.uploadFile}>upload</button>
        <button onClick={this.getFile}>get</button>
        <button onClick={this.removeFile}>remove</button>
        <button onClick={this.getList}>getList</button>
        <button onClick={this.getObject}>getObject</button>
        <button onClick={this.post}>post</button>
        <button onClick={this.put}>put</button>
        <button onClick={this.delete}>delete</button>

      </div>
    );
  }
}

export default App;
