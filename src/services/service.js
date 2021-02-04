import axios from 'axios';

class Service {
  constructor(){
    this.url = 'http://jservice.io/api/random';
    this.client = axios.create();
  }

  getQuestion(){
    return this.client.get(this.url);
  }
  
}


export default Service;