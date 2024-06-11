import React from 'react';
import { useLoaderData, Form } from '@remix-run/react';
import { redirect, json } from '@remix-run/cloudflare';
import type { ActionFunction, ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs } from '@remix-run/cloudflare';
import ShortUniqueId from 'short-unique-id';

export const loader: LoaderFunction = async ({ request, context }: LoaderFunctionArgs) => {
  const { env } = context.cloudflare;
  const { results } = await env.DB.prepare("SELECT * FROM dynamiclinks").all()
  const url = new URL(request.url);
  return json({ origin: url.origin, urlList: results })
}

export const action: ActionFunction = async ({ request, context }: ActionFunctionArgs) => {
  const { env } = context.cloudflare;
  const uid = new ShortUniqueId({ length: 10 })
  const body = await request.formData();
  const result = await env.DB.prepare("INSERT INTO dynamiclinks(link, short_link, android_app_id, apple_app_id, clicks) VALUES(?1, ?2, ?3, ?4, ?5)").bind(body.get("urlinput"), uid.rnd(), body.get("androidid"), body.get("appleid"), 0).run()
  console.log("formData", body, result)
  return redirect('/dynamic-links')
}

const DynamicLinksIndex = () => {
  const { origin, urlList }: any = useLoaderData()
  return (
    <div className='dynamic-link grid_center bg-[#fafafa] w-full h-full'>
      <Form method='post' className='flex flex-col justify-center items-start gap-3 border-[1px] border-solid border-blue-700 p-5 rounded-md'>
      <div className='flex gap-2 justify-center items-center'>
        <label className='font-semibold' htmlFor="urlinput">Link: </label>
        <input
          type="text"
          id='urlinput'
          name='urlinput'
          placeholder='Enter/ paste your url'
          className='p-1 border-[0.5px] border-solid border-black'
          required
        />
      </div>
      <div className='flex gap-2 justify-center items-center'>
        <label className='font-semibold' htmlFor="androidid">Android App Id: </label>
        <input
          type="text"
          id='androidid'
          name='androidid'
          placeholder='Enter/ paste your android app id'
          className='p-1 border-[0.5px] border-solid border-black'
          required
        />
      </div>
      <div className='flex gap-2 justify-center items-center'>
        <label className='font-semibold' htmlFor="appleid">Apple App Id: </label>
        <input
          type="text"
          id='appleid'
          name='appleid'
          placeholder='Enter/ paste your apple app id'
          className='p-1 border-[0.5px] border-solid border-black'
          required
        />
      </div>
        <button className='p-1 border-[0.5px] border-solid border-black'>Genearte</button>
      </Form>
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
            {urlList?.map((u: any) => {
              return (
                <tr key={u?.['short_link']}>
                  <td><a className='text-blue-500 hover:underline' target='_blank' rel="noreferrer" href={u?.['link']}>{u?.['link']}</a></td>
                  <td><a className='text-blue-500 hover:underline' target='_blank' rel="noreferrer" href={origin + '/' + u?.['short_link']}>{origin + '/' + u?.['short_link']}</a></td>
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

export default DynamicLinksIndex
