import React, { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';

import 'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function FileUploader() {
  
  const [files, updateFiles] = useState([]);
  return(
    <div className="col">
      <FilePond
        files={ files }
        allowMultiple={ false }
        maxFiles={ 1 }
        onupdatefiles={ updateFiles }
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );

}

export default FileUploader;
