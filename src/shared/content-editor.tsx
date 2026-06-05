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
