import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import ShortUniqueId from 'short-unique-id';

const DynamicLinks = ({ urlorigin }) => {
  const urlList = [
    { url: "https://aadhan.in", short_url: "qzEmnLtL", clicks: 0 }
  ]
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const uid = new ShortUniqueId({ lenght: 10 })

  const onSubmit = (data) => {
    console.log("data", data)
    const urlListEntity = {
      url: data?.urlinput,
      short_url: uid?.rnd(),
      clicks: 0
    }
    setUrlData(prev => [...prev, urlListEntity])
  }
  const [urlData, setUrlData] = useState(urlList)
  return (
    <div className='dynamic-link grid_center bg-[#fafafa] w-full h-full'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center items-center'>
        <input
          type="text"
          {...register("urlinput", { required: true })}
          className='p-1 border-[0.5px] border-solid border-black'
        />
        <button className='p-1 border-[0.5px] border-solid border-black'>Genearte</button>
      </form>
      <div className='url_list_container'>
        <table className='border-[0.5px] border-solid border-black my-2 text-center'>
          <thead>
            <tr>
              <th>Url</th>
              <th>ShortUrl</th>
              <th>Clicks</th>
            </tr>
          </thead>
          <tbody>
            {urlData?.map((u) => {
              return (
                <tr key={u?.['short_url']}>
                  <td><a className='text-blue-500 hover:underline' href={u?.['url']}>{u?.['url']}</a></td>
                  <td><a className='text-blue-500 hover:underline' href={`${urlorigin}/${u?.['short_url']}`}>{urlorigin + '/' + u?.['short_url']}</a></td>
                  <td>{u?.['clicks']}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DynamicLinks