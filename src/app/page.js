import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold"> Static Site Generation, Incremental Static Regeneration, Server Side Rendering, Data Fetching, Caching & Revalidation</h1>
      <div>Different Rendering Options in Next Js - SSG (Static Site Generation), ISR (Incremental Static Regeneration), SSR (Server Side Rendering), Data Fetching, Caching & Revalidation</div>
    </div>
  );
}
