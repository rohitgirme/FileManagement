import _ from 'lodash';

export const UPLOAD_DONE ='uploadDone';
export const UPLOAD_PROGRESS ='uploadProgress';

export function uploadFiles(files) {
  let formData = _.reduce(
    files,
    function (formData, file) {
      formData.append("easyFiles", file);
      return formData;
    },
    new FormData()
  );

  return function (dispatch) {
    dispatch(uploadProgress());

    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        dispatch(uploadDone())
      }
    };
    let uri = "/files/upload";
    request.open("POST", uri, true);
    request.send(formData);
  }
}

function uploadProgress() {
  return {
    type: UPLOAD_PROGRESS
  }
}

function uploadDone() {
  return {
    type: UPLOAD_DONE
  }
}