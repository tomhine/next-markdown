import { useRef } from "react";
import { useDocumentStore } from "../store/document";

const MarkdownEditor = () => {
  const mkd = useDocumentStore(state => state.markdown);
  const setMkd = useDocumentStore(state => state.setMarkdown);

  const textArea = useRef<HTMLTextAreaElement | null>(null);

  const handleHeadingButtonClick = () => {
    if (!textArea.current) return;

    const mkdArray = mkd.split("");
    const start = textArea.current.selectionStart;
    const end = textArea.current.selectionEnd;
    const selectionDiff = end - start;

    let prepend = "";
    let offset = 0;

    if (start === 0) {
      prepend = "# ";
      offset = 2;
    } else if (mkdArray[start - 2] === "#") {
      const headingCheckArray = mkd.substring(start - 7, start - 1).split("");
      let headingLevel = 0;
      headingCheckArray.forEach(h => h === "#" && headingLevel++);
      if (headingLevel === 6) {
        mkdArray.splice(start - 7, 7);
        prepend = "";
      } else {
        mkdArray.splice(start - 1, 1);
        prepend = "# ";
        offset = headingLevel + 1;
      }
    } else if (mkdArray[start - 1] !== "\n") {
      prepend = "\n# ";
      offset = 3;
    } else {
      prepend = "# ";
      offset = 2;
    }
    mkdArray.splice(start, 0, prepend);

    setMkd(mkdArray.join(""));
    textArea.current.focus();
    textArea.current.setSelectionRange(0, end + offset);
  };

  const handleMarkdownInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
