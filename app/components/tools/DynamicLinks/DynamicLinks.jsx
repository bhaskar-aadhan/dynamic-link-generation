import React from 'react'

const DynamicLinks = () => {
  return (
    <div className='dynamic-link grid_center bg-[#fafafa] w-full h-full'>
      <ul className='stepper'>
        <li>
          <span>1</span>
          <p>This is step1</p>
        </li>
        <li>
          <span>2</span>
          <p>This is step2</p>
        </li>
        <li>
          <span>3</span>
          <p>This is step3</p>
        </li>
      </ul>
    </div>
  )
}

export default DynamicLinks


{/* <div className='dynamic-link__stepper-items'>
          <div className='dynamic-link__stepper-header flex gap-3 items-center justify-start'>
            <div className='dynamic-link__stepper-nob flex_center w-6 h-6 rounded-full bg-red-500 border-[1px] border-solid border-black'>1</div>
            <div>Information</div>
          </div>
          <div className='dynamic-link__stepper-info ps-[1.7rem]'>
            <div className='dynamic-link__stepper-body grid_center border-[1px] border-solid border-black'>
              <ul style={{ listStyleType: "disc" }}>
                <li>cool</li>
                <li>bro</li>
                <li>!</li>
              </ul>
            </div>
            <div className='dynamic-link__stepper-buttons flex gap-2'>
              <button className='border-[1px] border-solid border-black p-1 my-2 bg-[#d3d3d3]'>Previous</button>
              <button className='border-[1px] border-solid border-black p-1 my-2 bg-[#d3d3d3]'>Next</button>
            </div>
          </div>
        </div> */}