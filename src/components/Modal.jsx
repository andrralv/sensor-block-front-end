import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import ContractLibrary from '../utils/ContractLibrary'
import SensorTableCom from './SensorTableCom'
import SensorTableCrash from './SensorTableCrash'
 
export default class Mod extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    open: false,
    sensors: []
  };

  componentWillMount() {
    ContractLibrary.getSensorData("0x3e4161669Dd2abF0bA33bA63978C44f21ed61Ed7", this);
  }
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal} className="history-button">View Sensor Data</button>
        <Modal open={open} onClose={this.onCloseModal} little>
        <div className="history-table">
          <div><SensorTableCom sensors={this.state.sensors}/></div>
          <div><SensorTableCrash sensors={this.state.sensors}/></div>
        </div>
        </Modal>
      </div>
    );
  }
}

module.exports = Mod;