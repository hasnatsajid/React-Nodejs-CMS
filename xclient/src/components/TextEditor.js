import React, { useRef, useState, useEffect } from 'react';
import DateTime from 'react-datetime';
import './editor.css';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const options = [
  { value: 'bootstrap', label: 'Bootstrap' },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '.5rem',
  }),

  multiValue: (provided) => ({
    ...provided,
    borderRadius: '.5rem',
  }),

  multiValueRemove: (provided) => ({
    ...provided,
    borderRadius: '.5rem',
  }),

  placeholder: (provided) => ({
    ...provided,
    borderRadius: '.5rem',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...provided,
      opacity,
      transition,
    };
  },
};

const animatedComponents = makeAnimated();

const TextEditor = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [text, setText] = useState('');

  const postSubmitHandler = (e) => {
    e.preventDefault();
    console.log(text, selectedOption);
  };

  // const onSelectChange = (e) => {
  //   console.log(e.target);
  //   console.log(selectValue);
  // };

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
                    <label htmlFor="first_name">Title</label>
                    <input className="form-control" id="first_name" type="text" placeholder="Enter post's category" required />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div>
                    <label htmlFor="first_name">Cover Image</label>
                    <input className="form-control" id="first_name" type="text" placeholder="Enter cover image" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div>
                    <label htmlFor="first_name">Category</label>
                    <input className="form-control" id="first_name" type="text" placeholder="Enter post's category" required />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div>
                    <label htmlFor="first_name">Tags</label>
                    {/* <Select options={options} /> */}
                    <Select
                      defaultValue={selectedOption}
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isMulti
                      options={options}
                      styles={customStyles}
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                          ...theme.colors,
                          primary25: '#61DAFB',
                          primary: '#61DAFB',
                        },
                      })}
                      onChange={setSelectedOption}
                    />
                  </div>
                </div>
              </div>

              <h2 className="h5 my-4">Description</h2>
              <div className="row">
                <div className="mb-3">
                  <div className="form-group">
                    {/* <label htmlFor="address">Content</label> */}
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Hello from Hassuu!</p>"
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        // console.log('Editor is ready to use!', editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        // console.log({ event, editor, data });
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
