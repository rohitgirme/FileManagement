import FileUpload from '../components/FileUpload';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  uploadFiles
} from '../actions/UploadActions';

function mapStateToProps(state) {
  return {
    uploadProgress: state.files.uploadProgress
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {uploadFiles},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);