import React from 'react';
import { useParams } from '@remix-run/react';
import { redirect } from '@remix-run/cloudflare';
import type { LoaderFunction, LoaderFunctionArgs } from '@remix-run/cloudflare';
import DeviceDetector from "device-detector-js";

export const loader: LoaderFunction = async ({ params, context, request }: LoaderFunctionArgs) => {
    const { shortid }: any = params;
    const { env }: any = context.cloudflare;
    const userAgent: any = request.headers.get('user-agent')
    const deviceDetector: any = new DeviceDetector()
    const platform: any = deviceDetector.parse(userAgent)
    const urlData = await env.DB.prepare("SELECT * FROM dynamiclinks WHERE short_link = (?)").bind(shortid).first();
    const urlParams: any = new URL(urlData?.['link'])
    console.log("urlData", urlData, platform, urlParams.host);
    if (platform?.device?.type?.toLowerCase() === 'smartphone') {
        if (platform?.os?.name?.toLowerCase() === 'android') {
            return redirect(`intent://www.${urlParams.host}/path#Intent;scheme=https;package=${urlData?.['android_app_id']};end`)
            // return redirect(`https://play.google.com/store/apps/details?id=${urlData?.['android_app_id']}`)
        } else if (platform?.os?.name?.toLowerCase() === 'ios') {
            return redirect(`https://${urlParams.host}/path/to/content`)
            // return redirect(`https://apps.apple.com/in/app/aadhan-breaking-short-news/id${urlData?.['apple_app_id']}`)
        }
    } else {
        return redirect(urlData?.['link'])
    }
}

const ShortIdIndex = () => {
    const { shortid }: any = useParams()
    return (
        <div>ShortIdIndex - {shortid}</div>
    )
}

export default ShortIdIndex