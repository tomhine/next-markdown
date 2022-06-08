import create from "zustand";

type MarkdownState = {
  markdown: string;
  setMarkdown: (input: string) => void;
  clearMarkdown: () => void;
  saveMarkdown: () => void;
};

export const useMarkdownStore = create<MarkdownState>((set, get) => ({
  markdown: "",
  setMarkdown: (input: string) => set(() => ({ markdown: input })),
  clearMarkdown: () => {
    set({ markdown: "" });
    localStorage.removeItem("markdown");
  },
  saveMarkdown: () => localStorage.setItem("markdown", get().markdown),
}));
