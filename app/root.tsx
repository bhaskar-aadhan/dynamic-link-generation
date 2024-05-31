import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from '@remix-run/cloudflare';
import globalCss from './style.css?url';
import { Navbar } from './components/tools';
import { SideBar } from './components/tools';

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalCss },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="stylesheet" href="https://use.typekit.net/twe3ijo.css"></link>
      </head>
      <body className="font_proximanova">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="layout_container h-[100dvh] w-full">
      <Navbar />
      <div className="outlet_conatiner w-full px-5" style={{ height: "calc(100dvh - 60px )" }}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}
