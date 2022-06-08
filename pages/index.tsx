import type { NextPage } from "next";
import { useMarkdownStore } from "../store/markdown";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";

const Home: NextPage = () => {
  const mkd = useMarkdownStore(state => state.markdown);
  const setMkd = useMarkdownStore(state => state.setMarkdown);

  useEffect(() => {
    if (window?.localStorage?.getItem("markdown")) {
      setMkd(window?.localStorage?.getItem("markdown")!);
    }
  }, [setMkd]);

  const handleMarkdownInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMkd(e.currentTarget.value);
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
          value={mkd}
          onChange={handleMarkdownInput}
        ></textarea>
      </section>
      <section className="bg-main-dark">
        <header className="flex h-11 w-full items-center justify-between bg-main-gray px-4">
          <h2 className="text-sm font-medium">PREVIEW</h2>
        </header>
        <div className="prose prose-invert h-full w-full p-4">
          <ReactMarkdown>{mkd}</ReactMarkdown>
        </div>
      </section>
    </main>
  );
};

export default Home;
