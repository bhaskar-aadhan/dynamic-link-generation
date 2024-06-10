import React from 'react';
import ShortUniqueId from 'short-unique-id';


export const loader = async({ context }) => {
    const { env, cf, ctx } = context.cloudflare; 
    const uid = new ShortUniqueId({ length: 10 });
    // const dBQuery = await env.DB.prepare("DROP TABLE dynamiclinks").run();
    const dBQuery = await env.DB.prepare("SELECT * FROM dynamiclinks").all();
    console.log("dBQuery",dBQuery)
    // const dBData = await env.DB.prepare("INSERT INTO dynamiclinks(link, short_link, clicks) VALUES (?1, ?2, ?3)").bind('https://aadhan.in', `${uid.rnd()}`, 3).run();
    // console.log("dbData", dBData)
    return ""
}

const ShortUrlIndex = () => {
  return (
    <div>ShortUrlIndex</div>
  )
}

export default ShortUrlIndex