import { DocumentIcon, MenuIcon, SaveIcon, TrashIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useDocumentStore } from "../store/document";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const title = useDocumentStore(state => state.title);
  const setTitle = useDocumentStore(state => state.setTitle);
  const clearCurrentMkd = useDocumentStore(state => state.clearMarkdown);
  const saveDocument = useDocumentStore(state => state.saveDocument);

  useEffect(() => {
    if (window?.localStorage?.getItem("title")) {
      setTitle(window?.localStorage?.getItem("title")!);
    }
  }, [setTitle]);

  return (
    <div className="min-h-screen bg-main-light text-white">
      <header className="bg-header-dark flex h-16 w-full items-center justify-between">
        {/* Header left */}
        <div className="flex h-full items-center gap-6">
          <button
            type="button"
            className="flex h-full w-16 items-center justify-center bg-main-extralight"
          >
            <MenuIcon className="h-8 w-8" />
          </button>
          <div className="flex items-center space-x-6 divide-x-[1px] divide-neutral-600">
            <h1 className="text-sm font-semibold tracking-[0.3rem]">MARKDOWN</h1>
            <div className="flex items-center gap-6">
              <DocumentIcon className="ml-6 h-5 w-5 text-neutral-400" />
              <div className="text-sm">
                <p className="text-neutral-400">Document Name</p>
                <input
                  type="text"
                  value={title}
                  placeholder="New Document"
                  className="bg-transparent outline-none"
                  onChange={e => setTitle(e.currentTarget.value)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Header right */}
        <div className="flex items-center gap-4 px-4">
          <button type="button" className="p-2" onClick={clearCurrentMkd}>
            <TrashIcon className="h-6 w-6 text-neutral-400" />
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded bg-main-orange px-4 py-2 text-sm text-white"
            onClick={saveDocument}
          >
            <SaveIcon className="h-5 w-5" />
            Save changes
          </button>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
