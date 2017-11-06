import React, {Component} from 'react';
import ReactModal from 'react-modal';

class ModalDialog extends Component {
  render() {
    return (
      <div>
        <ReactModal isOpen={this.props.show} contentLabel="React Modal">
          <div>
            <div className="pull-right" onClick={this.onClose}>
              <span className="glyphicon glyphicon-remove-sign"></span>
            </div>
          </div>
          {this.props.children}
        </ReactModal>
      </div>
    );
  }

  onClose = () => {
    this.props.onModalClose();
  }
}

ModalDialog.propTypes = {
  show: React.PropTypes.bool.isRequired,
  onModalClose: React.PropTypes.func.isRequired
};

export default ModalDialog