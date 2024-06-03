import React, { useState } from 'react'
import { Description, Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'
import clsx from 'clsx'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Button } from '@headlessui/react'
import { useCreateProjectsMutation } from '../../redux/feature/projects/projectsAPI';

const AddProject = () => {
  const [title, setTitle] = useState("")
  const [technology, setTechnology] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [github, setGithub] = useState("")
  const [live, setLive] = useState("")

  const [createProjects] = useCreateProjectsMutation()

  const handleSubmit = (e) => {
    e.preventDefault()
    const project = {
      title,
      technology,
      description,
      imageLink: image,
      githubLink: github,
      liveLink: live
    }
    createProjects(project)


  }


  return (
    <div className="container max-w-7xl mx-auto mt-12 bg-white-100 p-12 h-[80vh]">
      <h1 className="text-3xl font-bold text-gray-800 mb-12">Add Project</h1>
      <div className="w-full px-4">

        <Fieldset className="space-y-6 rounded-xl bg-black/5 p-6 sm:p-10">
          <Field>
            <Label className="text-sm/6 font-medium text-black">Project Name</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
              )}
            />
          </Field>
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
          <Field>
            <Label className="text-sm/6 font-medium text-black">Technology Names</Label>
            <Input
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
              )}
            />
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-black">GitHub Link</Label>
            <Input
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
              )}
            />
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-black">Live link</Label>
            <Input
              value={live}
              onChange={(e) => setLive(e.target.value)}
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
              )}
            />
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-black">Description</Label>
            <CKEditor
              id={"description"}
              editor={ClassicEditor}
              onReady={(editor) => { }}
              data={description}
              onChange={(event, editor) => {
                setDescription(editor.getData());
              }}
              onBlur={(event, editor) => { }}
              onFocus={(event, editor) => { }}
            />
          </Field>
          <Button onClick={handleSubmit} className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            Save changes
          </Button>
        </Fieldset>

      </div>
    </div>
  )
}

export default AddProject