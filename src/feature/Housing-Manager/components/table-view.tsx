import { MoreVertical } from "lucide-react"; // Elegant action dots icon
import { HousingManagerActionBtn } from "./housing-manager-action";

export default function HousingManagerViewField({
  data,
  headersData,
}: {
  data: any;
  headersData: string[];
}) {
  const selectHandler = (rowData: any) => {
    console.log("Selected housing manager:", rowData);
  };

  return (
    <div className="w-full overflow-hidden border border-[#e2e8f0] rounded-[20px] bg-white shadow-sm">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse table-auto">
          {/* Table Header Row */}
          <thead>
            <tr className="bg-[#f4f7fa] border-b border-[#e2e8f0] text-md">
              {headersData?.map((item, i) => (
                <th
                  key={i}
                  className={`p-4 font-secondary font-medium tracking-wide text-[#1e293b] uppercase ${
                    item.toLowerCase() === "actions" ||
                    item.toLowerCase() === "action"
                      ? "text-center pr-6"
                      : "pl-6"
                  }`}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-[#e2e8f0]">
<<<<<<< HEAD
            {data?.map((row) => (
=======
            {data?.allManagers?.map((row) => (
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
              <tr
                key={row.id}
                className="hover:bg-[#f8fafc] transition-colors duration-150"
              >
                <td className="p-4 pl-6 text-[15px] font-medium text-[#475569]">
                  {row.user?.name}
                </td>
                <td className="p-4 text-[15px] text-[#475569]">
                  {row.user?.phone || "N/A"}
                </td>
                <td className="p-4 text-[15px] text-[#475569]">
                  {row.user?.email}
                </td>

                {/* House Manager Community */}
                <td className="p-4 pl-6 text-[15px] text-[#475569]">
                  {row.community?.name || "Unassigned"}
                </td>

                {/* Status Pills Block */}
                <td className="p-4">
                  <span
                    className={`inline-flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-full border ${
<<<<<<< HEAD
                      row.user.status === "ACTIVE"
=======
                      row.status === "ACTIVE"
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
                        ? "bg-[#dcfce7] text-[#15803d] border-[#bbf7d0]"
                        : "bg-[#fef9c3] text-[#ca8a04] border-[#fef08a]"
                    }`}
                  >
<<<<<<< HEAD
                    {row.user.status}
=======
                    {row.status}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
                  </span>
                </td>

                <td className="p-4 pr-6">
                  <div className="flex items-center justify-center w-full -translate-y-1/12">
                    <HousingManagerActionBtn
                      Icon={MoreVertical}
                      onValueChange={() => selectHandler(row)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
