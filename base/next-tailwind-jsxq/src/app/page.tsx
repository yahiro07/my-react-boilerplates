/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div q="w-screen h-screen text-gray-700 p-5 flex flex-col gap-3 border-4 border-red-400">
      <img src="/logo.png" q="w-72" alt="logo" />
      <div q="text-blue-400 text-6xl">Hello world!!</div>
    </div>
  );
}
