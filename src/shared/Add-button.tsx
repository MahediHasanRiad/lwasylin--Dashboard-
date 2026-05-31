import { Plus } from "lucide-react";

function AddButton({ setOpen, text }) {
  return (
    <section>
      <button
        className="flex justify-center bg-primary-0 px-4 py-1 rounded-lg cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Plus className="w-5 h-5 mr-2" /> {text}
      </button>
    </section>
  );
}

export default AddButton;
