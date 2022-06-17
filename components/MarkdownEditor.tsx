import { useRef } from "react";
import { useDocumentStore } from "../store/document";

const MarkdownEditor = () => {
  const mkd = useDocumentStore(state => state.markdown);
  const setMkd = useDocumentStore(state => state.setMarkdown);

  const textArea = useRef<HTMLTextAreaElement | null>(null);

  const handleHeadingButtonClick = () => {
    console.log(textArea?.current?.selectionStart);
  };

  const handleMarkdownInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.currentTarget.selectionStart);
    setMkd(e.currentTarget.value);
  };

  return (
    <section className="relative bg-main-dark">
      <header className="flex h-11 w-full items-center gap-16 bg-main-gray px-4">
        <h2 className="text-sm font-medium">MARKDOWN</h2>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="h-8 w-8 rounded bg-main-extralight font-semibold text-white"
            onClick={handleHeadingButtonClick}
          >
            H
          </button>
        </div>
      </header>
      <textarea
        name="markdown-input"
        ref={textArea}
        className="h-[calc(100%-theme(space.12))] w-full resize-none bg-transparent p-4 font-mono outline-none"
        value={mkd}
        onChange={handleMarkdownInput}
      ></textarea>
      <div className="absolute flex w-full items-center gap-4 bg-main-extralight px-4"></div>
    </section>
  );
};

export default MarkdownEditor;
