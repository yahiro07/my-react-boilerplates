import { FC } from "react";

export const App: FC = () => {
  return (
    <div q="w-screen h-screen text-gray-700 p-5 flex flex-col gap-3 border-4 border-green-500">
      <img src="/logo.png" q="w-72" />
      <div q="text-blue-400 text-6xl">Hello world!!</div>
    </div>
  );
};
