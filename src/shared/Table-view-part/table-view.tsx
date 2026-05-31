import { MoreVertical } from "lucide-react"; // Elegant action dots icon
import { ActionBtnField } from "../../feature/Add-Community/components/action-btn";

// Example data array matching your image structure
const actionData = [
  { value: "active", label: "Active" },
  { value: "suspend", label: "Suspend" },
  { value: "edit", label: "Edit" },
];

export default function TableViewField({ data }) {
  const selectHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full overflow-hidden border border-[#e2e8f0] rounded-[20px] bg-white shadow-sm">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* Table Header Row */}
          <thead>
            <tr className="bg-[#f4f7fa] border-b border-[#e2e8f0] text-md">
              <th className="p-4 pl-6 font-secondary font-medium tracking-wide text-[#1e293b] uppercase">
                Community name
              </th>
              <th className="p-4 font-secondary font-medium tracking-wide text-[#1e293b] uppercase">
                Location name
              </th>
              <th className="p-4 font-secondary font-medium tracking-wide text-[#1e293b] uppercase">
                Units
              </th>
              <th className="p-4 font-secondary font-medium tracking-wide text-[#1e293b] uppercase">
                House manager
              </th>
              <th className="p-4 font-secondary font-medium tracking-wide text-[#1e293b] uppercase">
                Statues
              </th>
              <th className="p-4 pr-6 font-secondary font-medium tracking-wide text-[#1e293b] uppercase text-center w-24">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#e2e8f0]">
            {data.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-[#f8fafc] transition-colors duration-150"
              >
                {/* Community Name */}
                <td className="p-4 pl-6 text-[15px] font-medium text-[#475569]">
                  {row.communityName}
                </td>

                {/* Location Name */}
                <td className="p-4 text-[15px] text-[#475569]">
                  {row.locationName}
                </td>

                {/* Units */}
                <td className="p-4 text-[15px] text-[#475569]">{row.units}</td>

                {/* House Manager */}
                <td className="p-4 text-[15px] text-[#475569]">
                  {row.houseManager}
                </td>

                {/* Status Pills Block */}
                <td className="p-4">
                  <span
                    className={`inline-flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-full border ${
                      row.status === "Suspend"
                        ? "bg-[#fef9c3] text-[#ca8a04] border-[#fef08a]"
                        : "bg-[#dcfce7] text-[#15803d] border-[#bbf7d0]"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>

                {/* Action Row Interactions Button */}
                <td className="p-4 pr-6 text-center">
                  <ActionBtnField
                    Icon={MoreVertical}
                    defaultValue={""}
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
