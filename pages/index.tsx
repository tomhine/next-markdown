import type { NextPage } from "next";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

const Home: NextPage = () => {
  const [input, setInput] = useState("");

  const handleMarkdownInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.currentTarget.value);
  };

  return (
    <main className="grid h-[calc(100vh-4rem)] w-full grid-cols-2 gap-[2px] bg-main-extralight text-neutral-400">
      <section className="bg-main-dark">
        <header className="flex h-11 w-full items-center justify-between bg-main-gray px-4">
          <h2 className="text-sm font-medium">MARKDOWN</h2>
        </header>
        <textarea
          name="markdown-input"
          className="h-full w-full resize-none bg-transparent p-4 font-mono outline-none"
          value={input}
          onChange={handleMarkdownInput}
        ></textarea>
      </section>
      <section className="bg-main-dark">
        <header className="flex h-11 w-full items-center justify-between bg-main-gray px-4">
          <h2 className="text-sm font-medium">PREVIEW</h2>
        </header>
        <div className="prose prose-invert h-full w-full p-4">
          <ReactMarkdown>{input}</ReactMarkdown>
        </div>
      </section>
    </main>
  );
};

export default Home;
