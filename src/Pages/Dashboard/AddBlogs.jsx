import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useState } from 'react'

const AddBlogs = () => {
  const [blogs, setBlogs] = useState("")



  return (
    <div className="container max-w-7xl mx-auto mt-12 bg-white-100 p-12 h-[80vh]">

      <h1 className="text-3xl font-bold text-gray-800 mb-12">Add Blogs</h1>
      <div>

      <input type="file"/>
      <CKEditor
        id={"blogs"}
        editor={ClassicEditor}
        onReady={(editor) => { }}
        data={blogs}
        onChange={(event, editor) => {
          setBlogs(editor.getData());
        }}
        onBlur={(event, editor) => { }}
        onFocus={(event, editor) => { }}
        />
        </div>
    </div>
  )
}

export default AddBlogs