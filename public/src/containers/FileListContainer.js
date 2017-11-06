import FileList from '../components/FileList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchFiles,
  deleteFiles
} from '../actions/FileActions';

import {
  openUploadDialog,
  closeUploadDialog
} from '../actions/ModalActions';

function mapStateToProps(state) {
  return {
    files: state.files.files,
    message: state.files.message,
    showModal: state.files.showModal,
    filesDeleted: state.files.filesDeleted
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchFiles, deleteFiles, openUploadDialog, closeUploadDialog },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FileList);