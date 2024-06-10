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
  const result = await env.DB.prepare("INSERT INTO dynamiclinks(link, short_link, clicks) VALUES(?1, ?2, ?3)").bind(body.get("urlinput"), uid.rnd(), 0).run()
  console.log("formData", body, result)
  return redirect('/dynamic-links')
}

const DynamicLinksIndex = () => {
  const { origin, urlList }: any = useLoaderData()
  return (
    <div className='dynamic-link grid_center bg-[#fafafa] w-full h-full'>
      <Form method='post' className='flex justify-center items-center'>
        <input
          type="text"
          id='urlinput'
          name='urlinput'
          placeholder='Enter/ paste your url'
          className='p-1 border-[0.5px] border-solid border-black'
          required
        />
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
                  <td><a className='text-blue-500 hover:underline' target='_blank' href={u?.['link']}>{u?.['link']}</a></td>
                  <td><a className='text-blue-500 hover:underline' target='_blank' href={origin + '/' + u?.['short_link']}>{origin + '/' + u?.['short_link']}</a></td>
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
