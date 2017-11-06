import React, {Component} from 'react';
import Table from './Table';
import ModalDialog from './ModalDialog';
import FileUploadContainer from '../containers/FileUploadContainer';
import _ from 'lodash';

const noDataText = 'No files found.';

const columns = [
  {title: 'File Name', isKey: true, sort: true, field: 'name'},
  {title: 'Size', sort: true, field: 'size'},
  {title: 'Type', sort: true, field: 'type'},
  {title: 'Updated Time', sort: true, field: 'updateTime'}
];

class FileList extends Component {
  componentDidMount() {
    this.props.fetchFiles();
  }

  componentDidUpdate() {
    if (this.props.filesDeleted) {
      this.props.fetchFiles();
    }
  }

  onDeleteRow = (rows) => {
    let fileIds = [];
    _.each(this.props.files, function (fileInfo) {
      if (_.includes(rows, fileInfo.name)) {
        fileIds.push(fileInfo.guid);
      }
    });
    this.props.deleteFiles(fileIds);
  }

  onModalOpen = () => {
    this.props.openUploadDialog();
  }

  onModalClose = () => {
    this.props.closeUploadDialog();
  }

  render() {
    let files = this.props.files;
    // let files = [
    //   {
    //     "guid": "8eff3b2f-f930-47ae-a988-92ab516e9d6b",
    //     "name": "ad",
    //     "size": "401 KB",
    //     "updateTime": "2014-01-17T01:18:44 +08:00",
    //     "type": "csv"
    //   },
    //   {
    //     "guid": "edf2221b-c74e-4580-86c0-b1153fb04f64",
    //     "name": "eu",
    //     "size": "205 KB",
    //     "updateTime": "2016-12-17T05:53:12 +08:00",
    //     "type": "csv"
    //   },
    //   {
    //     "guid": "9dd3c619-e8ef-49cf-a388-ada928e6b9b1",
    //     "name": "velit",
    //     "size": "175 MB",
    //     "updateTime": "2014-02-11T05:49:47 +08:00",
    //     "type": "zip"
    //   },
    //   {
    //     "guid": "c526c205-acb3-40ab-8f14-8c2acbef8e15",
    //     "name": "dolor",
    //     "size": "62 KB",
    //     "updateTime": "2014-07-01T05:07:01 +07:00",
    //     "type": "pdf"
    //   },
    //   {
    //     "guid": "cf7da6e6-ae1f-4d20-80af-1ced574f355a",
    //     "name": "minim",
    //     "size": "658 MB",
    //     "updateTime": "2016-02-27T11:16:44 +08:00",
    //     "type": "csv"
    //   },
    //   {
    //     "guid": "b8df6acd-8fd6-4bbb-affa-877150010d6d",
    //     "name": "eu",
    //     "size": "279 MB",
    //     "updateTime": "2014-12-10T04:10:37 +08:00",
    //     "type": "zip"
    //   },
    //   {
    //     "guid": "2a9be1d6-27ed-412d-9fd8-ca953b562b9a",
    //     "name": "aute",
    //     "size": "917 KB",
    //     "updateTime": "2016-04-23T01:56:10 +07:00",
    //     "type": "csv"
    //   },
    //   {
    //     "guid": "4ce53a39-cf97-4094-944a-8eb91f77b6ee",
    //     "name": "aliqua",
    //     "size": "657 MB",
    //     "updateTime": "2015-12-22T04:57:24 +08:00",
    //     "type": "zip"
    //   },
    //   {
    //     "guid": "af1f9ac5-bb82-45bf-9565-67fd98bb90d1",
    //     "name": "consequat",
    //     "size": "853 KB",
    //     "updateTime": "2016-08-01T06:38:54 +07:00",
    //     "type": "csv"
    //   },
    //   {
    //     "guid": "25a8d41b-ad94-47f4-8cb4-82fc449dcc45",
    //     "name": "amet",
    //     "size": "33 MB",
    //     "updateTime": "2016-12-16T10:10:15 +08:00",
    //     "type": "pdf"
    //   },
    //   {
    //     "guid": "c966a3b3-bdd8-43e0-bc9c-ba2523ae5950",
    //     "name": "enim",
    //     "size": "179 MB",
    //     "updateTime": "2015-11-22T09:34:11 +08:00",
    //     "type": "csv"
    //   },
    //   {
    //     "guid": "9526c175-ef32-4e0a-bd29-8c11e3dbec24",
    //     "name": "Lorem",
    //     "size": "780 MB",
    //     "updateTime": "2014-06-27T08:20:44 +07:00",
    //     "type": "zip"
    //   },
    //   {
    //     "guid": "618e9c6b-8f47-4826-9a0e-36c7bf32a0ae",
    //     "name": "veniam",
    //     "size": "581 MB",
    //     "updateTime": "2017-03-08T06:17:01 +08:00",
    //     "type": "pdf"
    //   },
    //   {
    //     "guid": "1e9523b5-9e86-4c7f-a435-f2e3a18cbad5",
    //     "name": "aliquip",
    //     "size": "782 KB",
    //     "updateTime": "2014-05-05T07:07:04 +07:00",
    //     "type": "zip"
    //   },
    //   {
    //     "guid": "c8cecbea-d317-4313-812c-d1ce13ae7216",
    //     "name": "et",
    //     "size": "394 KB",
    //     "updateTime": "2015-06-14T05:43:51 +07:00",
    //     "type": "csv"
    //   },
    //   {
    //     "guid": "9209c8bb-a180-4464-ab05-2ed661ecaee8",
    //     "name": "nulla",
    //     "size": "862 MB",
    //     "updateTime": "2016-02-01T04:01:51 +08:00",
    //     "type": "csv"
    //   },
    //   {
    //     "guid": "7cb1ce32-8a9f-4dcc-8261-dd6a96a38a40",
    //     "name": "esse",
    //     "size": "261 KB",
    //     "updateTime": "2016-03-23T12:24:22 +07:00",
    //     "type": "csv"
    //   },
    //   {
    //     "guid": "3aef53eb-3acd-4b48-9a09-21664414cedf",
    //     "name": "officia",
    //     "size": "666 MB",
    //     "updateTime": "2016-09-10T09:58:00 +07:00",
    //     "type": "pdf"
    //   },
    //   {
    //     "guid": "66b41e1d-1c7d-454f-b5f0-ceee3f86724a",
    //     "name": "exercitation",
    //     "size": "757 KB",
    //     "updateTime": "2017-02-02T11:53:12 +08:00",
    //     "type": "zip"
    //   },
    //   {
    //     "guid": "0b926273-e769-46bd-831c-b1e7acaf99a8",
    //     "name": "eiusmod",
    //     "size": "170 KB",
    //     "updateTime": "2016-09-20T08:50:37 +07:00",
    //     "type": "csv"
    //   },
    //   {
    //     "guid": "d1d7b681-075e-453d-b81c-5bf7da5a2aaf",
    //     "name": "magna",
    //     "size": "331 KB",
    //     "updateTime": "2016-12-30T05:02:02 +08:00",
    //     "type": "pdf"
    //   },
    //   {
    //     "guid": "3ed03a79-c6ec-4821-8feb-6c320c899625",
    //     "name": "Lorem",
    //     "size": "160 MB",
    //     "updateTime": "2016-04-20T02:18:50 +07:00",
    //     "type": "pdf"
    //   },
    //   {
    //     "guid": "3d199f46-e48e-423f-9e6c-34c6c97d8594",
    //     "name": "duis",
    //     "size": "163 MB",
    //     "updateTime": "2016-02-04T07:16:30 +08:00",
    //     "type": "csv"
    //   },
    //   {
    //     "guid": "6ef3091f-a7f1-48a4-b499-f7ac43413ee6",
    //     "name": "exercitation",
    //     "size": "511 MB",
    //     "updateTime": "2015-10-29T08:37:00 +07:00",
    //     "type": "pdf"
    //   },
    //   {
    //     "guid": "c43d7731-881b-47b2-9c3c-2e8259137c69",
    //     "name": "aliquip",
    //     "size": "460 KB",
    //     "updateTime": "2015-01-20T10:36:21 +08:00",
    //     "type": "zip"
    //   }
    // ];
    const numOfFiles = files.length;
    const message = this.props.message ? (<p>{this.props.message}</p>) : '';

    let modalContent = '';
    if (this.props.showModal) {
      modalContent = (<FileUploadContainer/>);
    }

    return (
      <div>
        {message}
        <div className="header-row">
          <p>There are {numOfFiles} data files.</p>
          <div onClick={this.onModalOpen}>
            <span className="glyphicon glyphicon-plus-sign"></span>
          </div>
        </div>

        <Table columns={columns}
               data={files}
               noDataText={noDataText}
               pagination={true}
               search={true}
               deleteRow={true}
               onDeleteRow={this.onDeleteRow}
        />
        <ModalDialog show={this.props.showModal} onModalClose={this.onModalClose}>
          {modalContent}
        </ModalDialog>
      </div>
    );
  }

}

FileList.propTypes = {
  fetchFiles: React.PropTypes.func.isRequired,
  deleteFiles: React.PropTypes.func.isRequired,
  openUploadDialog: React.PropTypes.func.isRequired,
  files: React.PropTypes.array.isRequired,
  message: React.PropTypes.string,
  filesDeleted: React.PropTypes.bool,
  showModal: React.PropTypes.bool
};

export default FileList;