export const OPEN_UPLOAD_DIALOG = 'openUploadDialog';
export const CLOSE_UPLOAD_DIALOG = 'closeUploadDialog';

export function openUploadDialog() {
  return {
    type: OPEN_UPLOAD_DIALOG
  }
}

export function closeUploadDialog() {
  return {
    type: CLOSE_UPLOAD_DIALOG
  }
}