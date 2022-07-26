import DateTime from 'react-datetime';
import './editor.css';
// import 'react-datetime/css/react-datetime.css';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Editor = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-12 col-xl-8">
          <div className="card card-body border-0 shadow mb-4">
            <h2 className="h5 mb-4">General information</h2>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div>
                    <label htmlFor="first_name">Category</label>
                    <input className="form-control" id="first_name" type="text" placeholder="Enter your first name" required />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="birthday">Birthday</label>
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
                    <DateTime timeFormat={false} id="birthday" />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6 mb-3">
                  <label htmlFor="birthday">Birthday</label>
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
                    <input data-datepicker="" className="form-control" id="birthday" type="text" placeholder="dd/mm/yyyy" required />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="gender">Gender</label>
                  <select className="form-select mb-0" id="gender" aria-label="Gender select example">
                    <option defaultValue="0">Gender</option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" id="email" type="email" placeholder="name@company.com" required />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input className="form-control" id="phone" type="number" placeholder="+12-345 678 910" required />
                  </div>
                </div>
              </div>
              <h2 className="h5 my-4">Location</h2>
              <div className="row">
                <div className="col-sm-9 mb-3">
                  <div className="form-group">
                    <label htmlFor="address">Content</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Create your post now :)</p>"
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                      }}
                      onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                      }}
                      onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-3 mb-3">
                  <div className="form-group">
                    <label htmlFor="number">Number</label>
                    <input className="form-control" id="number" type="number" placeholder="No." required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 mb-3">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input className="form-control" id="city" type="text" placeholder="City" required />
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="form-group">
                    <label htmlFor="zip">ZIP</label>
                    <input className="form-control" id="zip" type="tel" placeholder="ZIP" required />
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
      <h2>Create new post </h2>
      <form>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Create your post now :)</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
        <button className="btn btn-gray-800 mt-2 animate-up-2" type="submit">
          Save all
        </button>
      </form>
    </>
  );
};

export default Editor;
