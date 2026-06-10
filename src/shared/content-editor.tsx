<<<<<<< HEAD
import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

function ContentEditorQuill() {
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const quill = new Quill(editorRef.current, {
      theme: "snow",
      placeholder: "Write something...",
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
      },
    });

    quill.on("text-change", () => {
      console.log(quill.root.innerHTML);
    });

    return () => {
      quill.off("text-change");
    };
  }, []);

  return (
    <section className=" mx-auto p-4">
      <div
        ref={editorRef}
        style={{ minHeight: "300px" }}
      >
        text
      </div>
    </section>
  );
}

export default ContentEditorQuill;
=======
import { Editor } from "@tinymce/tinymce-react";

export default function ContentEditor({ onChangeHandler }) {


  return (
    <Editor
      onEditorChange={(content) => onChangeHandler(content)}
      apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
      init={{
        promotion: false, // Removes the premium trial button
        branding: false, // Removes the "Build with TinyMCE" branding tag

        plugins: [
          "advlist",
          "autolink",
          "link",
          "image",
          "lists",
          "charmap",
          "preview",
          "anchor",
          "pagebreak",
          "searchreplace",
          "wordcount",
          "visualblocks",
          "visualchars",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "emoticons",
          "help",
        ],
        toolbar:
          "undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | " +
          "bullist numlist outdent indent | link image | print preview media fullscreen | " +
          "forecolor backcolor emoticons | help",

        tinycomments_mode: "embedded",
        tinycomments_author: "Author name",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
      }}
      //   initialValue="Welcome to TinyMCE!"
    />
  );
}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
