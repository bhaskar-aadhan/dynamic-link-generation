import React from 'react'
import { NavLink } from '@remix-run/react'

const ToolsContent = () => {
  return (
    <div className='tools_content_container w-full h-full border-[1px] border-solid border-black'>
      <NavLink to={'/dynamic-links'}>Dynamic Links</NavLink>
    </div>
  )
}

export default ToolsContent