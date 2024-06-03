import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useState } from 'react'
import { Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'
import { useCreateBlogsMutation } from '../../redux/feature/blogs/blogsAPI';

const AddBlogs = () => {
  const [blogs, setBlogs] = useState("")
  const [image, setImage] = useState("")
  const [createBlogs] = useCreateBlogsMutation()


  const handleSubmit = (e) => {
    e.preventDefault()
    createBlogs({ blog: blogs, imageLink: image})
  }


  return (
    <div className="container max-w-7xl mx-auto mt-12 bg-white-100 p-12 h-[80vh]">
      <h1 className="text-3xl font-bold text-gray-800 mb-12">Add Blogs</h1>
      <Field className="mb-8 w-full">
        <Label className="text-sm/6 font-medium text-black">Image Link</Label>
        <Input
          type="text"
          placeholder="Image Link"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className={clsx(
            'mt-3 block w-full rounded-lg border bg-black/5 py-1.5 px-3 text-sm/6 text-black',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        />
      </Field>
      <h3 className='mb-2 font-semibold'>Blog</h3>
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
      
      <button
        onClick={handleSubmit}
        className="mt-8 bg-black text-white py-2 px-4 rounded-lg"
      >
        Submit
      </button>

    </div>

  )
}

export default AddBlogs