function MenuWithImage({ image, email, role }) {
  return (
    <div className="w-full inline-flex items-center gap-4 p-4 rounded-xl font-sans">
      <div className="relative w-12 h-12 shrink-0 rounded-full border-2 border-[#3b82f6] overflow-hidden">
        <img
          src={image}
          alt={email}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="flex flex-col min-w-0">
        <h2 className="text-xl font-semibold text-[#0f172a] tracking-tight leading-tight truncate">
          {role}
        </h2>
        <span className=" text-[#475569] break-all">{email}</span>
      </div>
    </div>
  );
}

export default MenuWithImage;
