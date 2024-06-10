import React from 'react';
import { json } from '@remix-run/cloudflare';
import type { LoaderFunctionArgs, LoaderFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import ShortUniqueId from 'short-unique-id';

interface Env {
    dynamiclinks: KVNamespace;
    DB: D1Database;
}

export const loader:LoaderFunction = async({ context }: LoaderFunctionArgs) => {
    const { env, cf, ctx } = context.cloudflare;
    const uid = new ShortUniqueId({ length: 10 });
    const kvD = await env?.['dynamiclinks']?.get("cool")
    console.log("kvD", kvD)


    return json({ env, sid: uid.rnd() })
};

const ShortUrlIndex = () => {
    const { env, sid } = useLoaderData()
    console.log("cflContextData", env, sid)
    return (
        <div>ShortUrlIndex</div>
    )
}

export default ShortUrlIndex