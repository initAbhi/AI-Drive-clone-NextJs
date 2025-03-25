import { CldUploadWidget } from 'next-cloudinary'
import React from 'react'

const Sidebar = ({onHandleNewUpload}) => {
  return (
  <article className="side-bar">
    <CldUploadWidget uploadPreset='drive_clone' onSuccess={(result) => {
        console.log(result)
        onHandleNewUpload(result.info)
    }} onQueuesEnd={(result, {widget}) => {
        widget.close()
    }} >{({open}) => {
        function handleOnClick() {
            open()
        }
        return (
        
        <button onClick={handleOnClick} className="flex items-center justify-center px-8 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-5 w-50 ">+ Upload</button>)
    }}</CldUploadWidget>
    {/* <ul>
        <li>Home</li>
        <li>Activity</li>
        <li>Workspaces</li>
        <br />
        <li>My Drive</li>
        <li>Shared Drives</li>
        <br />
        <li>Shared with me</li>
        <li>Recent</li>
        <li>Starred</li>
        <br />
        <li>Spam</li>        
        <li>Trash</li>        
        <li>Storage</li>        
    </ul> */}
  </article>
  )
}

export default Sidebar
