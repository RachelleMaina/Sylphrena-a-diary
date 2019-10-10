import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const AddEntry = () => (
  <Editor
    wrapperClassName="editor-wrapper"
    editorClassName="editor"
    toolbarClassName="toolbar"
    placeholder="Dear Diary,"
    // toolbar={{
    //   inline: { inDropdown: true },
    //   list: { inDropdown: true },
    //   textAlign: { inDropdown: true },
    //   link: { inDropdown: true }
    // }}
    toolbar={{
      options: [
        'inline',
        'image',
        'link',
        'textAlign',
        'list',
        'emoji',
        'colorPicker'
      ],
      inline: {
        options: ['bold', 'italic', 'underline', 'strikethrough']
      },
      list: { inDropdown: true },
      textAlign: { inDropdown: true },
      link: { inDropdown: true },
      history: { inDropdown: true },
      image: {
        // uploadCallback: uploadImageCallBack,
        previewImage: true,
        alt: { present: true, mandatory: true }
      }
    }}
  />
);

export default AddEntry;
