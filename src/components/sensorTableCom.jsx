export class Navigation extends Component {
    
  componentWillMount(props) {
    console.log("hello: ", props.sensors)
  }

  render() {
      return ( 
      <div className="navigation">
          <h1>{this.props.title}</h1>
      </div>
      )
  }
}