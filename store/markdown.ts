import create from "zustand";

export const useMarkdownStore = create(set => ({
  markdown: "",
  setMarkdown: (input: string) => set(state => ({ markdown: input })),
  clearMarkdown: () => set({ markdown: "" }),
}));
