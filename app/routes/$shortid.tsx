import React from 'react';
import { useParams } from '@remix-run/react';
import { redirect } from '@remix-run/cloudflare';
import type { LoaderFunction, LoaderFunctionArgs } from '@remix-run/cloudflare';

export const loader: LoaderFunction = async ({ params, context }: LoaderFunctionArgs) => {
    const { shortid }: any = params;
    const { env }: any = context.cloudflare;
    const urlData = await env.DB.prepare("SELECT * FROM dynamiclinks WHERE short_link = (?)").bind(shortid).first();
    console.log("urlData", urlData);
    return redirect(urlData?.['link'])
}

const ShortIdIndex = () => {
    const { shortid }: any = useParams()
    return (
        <div>ShortIdIndex - {shortid}</div>
    )
}

export default ShortIdIndex