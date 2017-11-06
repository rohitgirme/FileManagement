import React, { Component } from 'react';
import _ from 'lodash';

class FileUpload extends Component {

  constructor(props) {
    super(props);
    this.files = [];
  }

  render() {
    let disabled = this.props.uploadProgress;
    let filesUploaded = this.getUploadedFiles();

    return (
      <form className="upload-form">
        <div className="form-group form-title">
          <h3>Upload new files</h3>
        </div>
        <div className="form-group">
          <input type="file"
                 name="easyFiles"
                 multiple
                 id="inputFile"
                 onChange={this.onFileSelect}
                 disabled={disabled}
          />
        </div>
        <div className="form-group">
          <h4>Uploaded files</h4>
          {filesUploaded}
        </div>
        <button type="button"
                disabled={disabled}
                className="btn btn-primary btn-upload"
                onClick={this.uploadFiles}>
          Upload
        </button>
      </form>
    )
  }

  uploadFiles = () => {
    this.props.uploadFiles(this.files);
  }

  onFileSelect = (evt) => {
    this.files = evt.target.files;
  }

  getUploadedFiles() {
    if (this.files.length > 0 && !this.props.uploadProgress) {
      let uploadedFileInfo = _.map(this.files, function (fileInfo) {
        return (
          <ul key={fileInfo.name}>
            <li>
              <h5>File Name ::</h5> {fileInfo.name}
            </li>
            <li>
              <h5>Type ::</h5> {fileInfo.type}
            </li>
          </ul>
        );
      });

      return (
        <ul>
          {uploadedFileInfo}
        </ul>
      );
    }
    return '';
  }
}

FileUpload.defaultProps = {
  uploadProgress: false
};

FileUpload.propTypes = {
  uploadFiles: React.PropTypes.func.isRequired,
  uploadProgress: React.PropTypes.bool
};

export default FileUpload;