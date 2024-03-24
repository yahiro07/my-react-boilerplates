import { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div q="flex flex-col gap-2 items-start p-4">
      <h1 q="text-xl font-bold">Hello, Hono with React!</h1>
      <h2>Example of useState()</h2>
      <Counter />
      <h2>Example of API fetch()</h2>
      <ClockButton />
      <div className="text-red-500">foo</div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)} q="bg-red-200 p-2">
      You clicked me {count} times
    </button>
  );
}

const ClockButton = () => {
  const [response, setResponse] = useState<string | null>(null);

  const handleClick = async () => {
    const response = await fetch("/api/clock");
    const data = await response.json();
    const headers = Array.from(response.headers.entries()).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {}
    );
    const fullResponse = {
      url: response.url,
      status: response.status,
      headers,
      body: data,
    };
    setResponse(JSON.stringify(fullResponse, null, 2));
  };

  return (
    <div>
      <button onClick={handleClick} q="bg-blue-200 p-2">
        Get Server Time
      </button>
      {response && <pre>{response}</pre>}
    </div>
  );
};

const domNode = document.getElementById("root")!;
const root = createRoot(domNode);
root.render(<App />);
