interface ButtonFieldType {
    handleSubmit: any;
    text: string;
    contentData?: string;
}
interface PendingBtnType {
    handleSubmit: any;
    text: string;
}

export function ButtonField({handleSubmit, text, contentData}: ButtonFieldType) {
  return (
    <button
      onClick={handleSubmit}
      disabled={contentData === '' ? true : false}
      className={`${contentData === '' ? 'bg-gray-400 hover:bg-gray-500' : 'bg-secondary-0 hover:bg-secondary-0'}  text-black text-[12px] px-2 py-1.5 md:text-sm font-bold md:px-8 md:py-3 rounded-lg transition-transform active:scale-95`}
    >
      {text}
    </button>
  );
}
export function PendingBtn({handleSubmit, text}: PendingBtnType) {
  return (
    <button
      onClick={handleSubmit}
      className={`bg-gray-500 text-white/80 px-3 py-4  [a]:hover:bg-primary/80 cursor-pointer rounded-md text-sm`}
    >
      {text}
    </button>
  );
}

