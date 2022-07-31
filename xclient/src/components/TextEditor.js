import React, { useRef, useState, useEffect } from 'react';
import DateTime from 'react-datetime';
import './editor.css';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const TextEditor = () => {
  const [text, setText] = useState('');

  const postSubmitHandler = (e) => {
    e.preventDefault();
    console.log('doen');
  };
  return (
    <>
      <div className="row mt-5">
        <div className="col-12 col-xl-8">
          <div className="card card-body border-0 shadow mb-4">
            <h2 className="h5 mb-4">Post information</h2>
            <form onSubmit={postSubmitHandler}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div>
                    <label htmlFor="first_name">Category</label>
                    <input className="form-control" id="first_name" type="text" placeholder="Enter post's category" required />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="birthday">Date</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg className="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <DateTime timeFormat={false} value="mm/dd/yyyy" id="createdAt" />
                  </div>
                </div>
              </div>

              <h2 className="h5 my-4">Description</h2>
              <div className="row">
                <div className="mb-3">
                  <div className="form-group">
                    <label htmlFor="address">Content</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Hello from Hassuu!</p>"
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setText(data);
                      }}
                      onBlur={(event, editor) => {
                        // console.log('Blur.', editor);
                      }}
                      onFocus={(event, editor) => {
                        // console.log('Focus.', editor);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <button className="btn btn-gray-800 mt-2 animate-up-2" type="submit">
                  Save all
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextEditor;
