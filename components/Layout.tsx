import { DocumentIcon, MenuIcon, SaveIcon, TrashIcon } from "@heroicons/react/outline";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-main-dark text-white">
      <header className="flex h-16 w-full items-center justify-between bg-header-dark">
        {/* Header left */}
        <div className="flex h-full items-center gap-6">
          <button className="flex h-full w-16 items-center justify-center bg-header-light">
            <MenuIcon className="h-8 w-8" />
          </button>
          <div className="flex items-center space-x-6 divide-x-[1px] divide-neutral-600">
            <h1 className="text-sm font-semibold tracking-[0.3rem]">MARKDOWN</h1>
            <div className="flex items-center gap-6">
              <DocumentIcon className="ml-6 h-5 w-5 text-neutral-400" />
              <div className="text-sm">
                <p className="text-neutral-400">Document Name</p>
                <p>welcome.md</p>
              </div>
            </div>
          </div>
        </div>
        {/* Header right */}
        <div className="flex items-center gap-4 px-4">
          <button className="p-2">
            <TrashIcon className="h-6 w-6 text-neutral-400" />
          </button>
          <button className="flex items-center gap-2 rounded bg-main-orange px-4 py-2 text-sm text-white">
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
