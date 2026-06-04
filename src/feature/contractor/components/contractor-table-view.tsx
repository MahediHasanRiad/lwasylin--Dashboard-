import { HousingActionBtn } from "@/feature/House-Database(Assets)/components/housing-action-btn";
import { MoreVertical } from "lucide-react"; // Elegant action dots icon
import { ContractorActionBtn } from "./contractor-action-btn";

export default function ContractorTableView({
  data,
  headersData,
}: {
  data: any;
  headersData: string[];
}) {
  const selectHandler = (data) => {
    console.log(data);
  };

  console.log("contractor data", data.allContractors);
  return (
    <div className="w-full overflow-hidden border border-[#e2e8f0] rounded-[20px] bg-white shadow-sm">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* Table Header Row */}
          <thead>
            <tr className="bg-[#f4f7fa] border-b border-[#e2e8f0] text-md">
              {headersData.map((item, i) => (
                <th
                  key={i}
                  className="p-4 pl-6 font-secondary font-medium tracking-wide text-[#1e293b] uppercase"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-[#e2e8f0]">
            {data?.allContractors?.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-[#f8fafc] transition-colors duration-150"
              >
                <td className="p-4 pl-6 text-[15px] font-medium text-[#475569]">
                  {row.user.name}
                </td>
                <td className="p-4 text-[15px] text-[#475569]">
                  {row.user.phone}
                </td>

                {/* Units */}
                <td className="p-4 text-[15px] text-[#475569]">
                  {row.user.email}
                </td>

                {/* House Manager */}
                <td className="p-4 text-[15px] text-[#475569]">
                  {row.specialty}
                </td>

                {/* Status Pills Block */}
                <td className="p-4">
                  <span
                    className={`inline-flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-full border ${
                      row.user.status === "ACTIVE"
                        ? "bg-[#dcfce7] text-[#15803d] border-[#bbf7d0]"
                        : "bg-[#fef9c3] text-[#ca8a04] border-[#fef08a]"
                    }`}
                  >
                    {row.user.status}
                  </span>
                </td>

                {/* Action Row Interactions Button */}
                <td className="p-4 pr-6 text-center">
                  <ContractorActionBtn
                    Icon={MoreVertical}
                    // defaultValue={""}
                    onValueChange={selectHandler}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
