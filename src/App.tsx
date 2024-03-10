import MarkdownEditor from "./components/markdown/editor";

export default function App() {
  return (
    <main className="w-full min-h-screen flex flex-col gap-4 items-center justify-center px-32 py-4 bg-[#FAFAFA]">
      <MarkdownEditor />
    </main>
  );
}
