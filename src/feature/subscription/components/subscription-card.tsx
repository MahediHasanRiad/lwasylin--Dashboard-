import { PenLine, Trash } from "lucide-react";
import { PackagesDialog } from "./create-package-dialog";

interface SubscriptionCardType {
  title: string;
  price: number;
  duration: string;
  benefits: string[];
}

function SubscriptionCard({
  title,
  price,
  duration,
  benefits,
}: SubscriptionCardType) {
  return (
    <section className="bg-[#f5faff] rounded-lg p-8">
      <section className="flex justify-between">
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <span>
            ${price}/{duration}
          </span>
        </div>
        <div className="flex items-center">
          {/* <PenLine color="#1e2832" size={20} /> */}
          <PackagesDialog Icon={PenLine} title="Edit Packages" variant={'customOutline'} />
          <Trash color="#ff383c" size={22} />
        </div>
      </section>

      {/* benefits  */}
      <section className="mt-4">
        <h1 className="text-xl my-4">What Benefit</h1>
        <table>

        {benefits.map((item, i) => (
          <tr key={i}>-{" "}{item}</tr>
        ))}
        </table>
      </section>
    </section>
  );
}

export default SubscriptionCard;
