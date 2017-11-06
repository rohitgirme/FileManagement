import axios from 'axios';

export const FETCH_FILE_LIST = 'fetchFileList';
export const FILES_FETCHED = 'filesFetched';
export const FILES_DELETED = 'filesDeleted';
const ROOT_URL = 'http://localhost:3000/';

export function fetchFiles() {
  let request = axios.get(`${ROOT_URL}files`);

  return (dispatch) => {
    dispatch(fetchingFiles());
    return request.then((response) => {
      dispatch(filesFetched(response));
    });
  };
}

export function deleteFiles(fileIds) {
  let request;
  if (fileIds.length === 1) {
    request = axios.delete(`${ROOT_URL}files/${fileIds[0]}`);
  } else {
    request = axios.post(`${ROOT_URL}files/batch`, {
      action: 'delete',
      fileIds: fileIds
    });
  }

  return (dispatch) => {
    return request.then(() => {
      dispatch(filesDeleted());
    });
  };
}

function fetchingFiles() {
  return {
    type: FETCH_FILE_LIST
  }
}

function filesFetched(response) {
  return {
    type: FILES_FETCHED,
    payload: response.data
  }
}

function filesDeleted() {
  return {
    type: FILES_DELETED
  }
}