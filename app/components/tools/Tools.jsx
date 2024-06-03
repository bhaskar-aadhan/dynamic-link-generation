import React from 'react';
import { NavLink } from '@remix-run/react';

const Tools = () => {
  return (
    <div className='tools_container w-full h-full'>
      <div className='tools_content_container w-full h-full'>
        <NavLink to={'/dynamic-links'}>Dynamic Links</NavLink>
      </div>
    </div>
  )
}

export default Tools