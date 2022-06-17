import type { NextPage } from "next";
import { useDocumentStore } from "../store/document";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
import MarkdownEditor from "../components/MarkdownEditor";

const Home: NextPage = () => {
  const mkd = useDocumentStore(state => state.markdown);
  const setMkd = useDocumentStore(state => state.setMarkdown);

  useEffect(() => {
    if (window?.localStorage?.getItem("markdown")) {
      setMkd(window?.localStorage?.getItem("markdown")!);
    }
  }, [setMkd]);

  return (
    <main className="grid h-[calc(100vh-4rem)] w-full grid-cols-2 gap-[2px] bg-main-extralight text-neutral-400">
      <MarkdownEditor />
      <section className="bg-main-dark">
        <header className="flex h-11 w-full items-center justify-between bg-main-gray px-4">
          <h2 className="text-sm font-medium">PREVIEW</h2>
        </header>
        <div className="prose prose-invert w-full p-4">
          <ReactMarkdown>{mkd}</ReactMarkdown>
        </div>
      </section>
    </main>
  );
};

export default Home;
