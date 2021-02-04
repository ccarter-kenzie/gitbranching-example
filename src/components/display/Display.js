import { Component } from 'react'
import Service from '../../services/service'


class Display extends Component{
  constructor(props) {
    super(props);
    this.client = new Service();
    this.state = {
      data: [],

    }
  }

  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  render() {
    let display = (<div>No data found</div>);

    if (this.state.data) {
      display = this.state.data.map((value) => {
        return (
          <li id={value.id} key={value.id}>{value.question}</li>
        )
      })
      console.log(display)
    }
    return (
      <div>        
        {display}
      </div>
    )
  }
}

export default Display