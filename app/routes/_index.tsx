import type { MetaFunction } from "@remix-run/cloudflare";
import { Tools } from '../components/tools';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <Tools />
  );
}
