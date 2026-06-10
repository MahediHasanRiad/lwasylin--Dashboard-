interface HouseDetailsItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function HouseDetailsItem({ icon, title, description }: HouseDetailsItemProps) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
      <span className="flex items-center gap-2 text-sm text-gray-500">
        {icon}
        {title}
      </span>
      <span className="text-sm font-medium text-gray-900">{description}</span>
    </div>
  );
}