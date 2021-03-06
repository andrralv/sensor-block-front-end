import React from 'react';
import Modal from 'react-responsive-modal';
import SensorTableCom from './SensorTableCom'
import SensorTableCrash from './SensorTableCrash'

export default class Mod extends React.Component {
  
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { data } = this.props;
    return (
      <div>
        <button onClick={this.onOpenModal} className="history-button">View Sensor Data</button>
        <Modal open={open} onClose={this.onCloseModal} little>
          <div className="history-table">
            <div><SensorTableCom sensors={data} /></div>
            <div><SensorTableCrash sensors={data} /></div>
          </div>
        </Modal>
      </div>
    );
  }
}

module.exports = Mod;