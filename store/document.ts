import create from "zustand";

type DocumentState = {
  title: string;
  markdown: string;
  setTitle: (input: string) => void;
  setMarkdown: (input: string) => void;
  clearMarkdown: () => void;
  saveDocument: () => void;
};

export const useDocumentStore = create<DocumentState>((set, get) => ({
  title: "",
  markdown: "",
  setTitle: (input: string) => set(() => ({ title: input })),
  setMarkdown: (input: string) => set(() => ({ markdown: input })),
  clearMarkdown: () => {
    set({ markdown: "" });
    localStorage.removeItem("markdown");
  },
  saveDocument: () => {
    get().title && localStorage.setItem("title", get().title);
    localStorage.setItem("markdown", get().markdown);
  },
}));
