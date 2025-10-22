"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Test</p>",
    immediatelyRender: false,
  });

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
