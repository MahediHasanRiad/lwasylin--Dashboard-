<<<<<<< HEAD
=======



>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
export default function JobsTableViewField({
  data,
  headersData,
}: {
  data: any;
  headersData: string[];
}) {
<<<<<<< HEAD
=======

  
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
  console.log("jobs data", data);
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
<<<<<<< HEAD
            {data?.map((row) => (
=======
            {data?.allJobs?.map((row) => (
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
              <tr
                key={row.id}
                className="hover:bg-[#f8fafc] transition-colors duration-150"
              >
                <td className="p-4 pl-6 text-[15px] font-medium text-[#475569]">
                  {row.issueId}
                </td>
<<<<<<< HEAD
                <td className="p-4 text-[15px] text-[#475569]">{row.title}</td>
=======
                <td className="p-4 text-[15px] text-[#475569]">
                  {row.title}
                </td>
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1

                <td className="p-4 text-[15px] text-[#475569]">
                  {row.description}
                </td>

                <td className="p-4 text-[15px] text-[#475569]">
                  {row.manager}
                </td>

                <td className="p-4 text-[15px] text-[#475569]">
                  {row?.assignedTo?.companyName}
                </td>

                {/* Status Pills Block */}
                <td className="p-4">
                  <span
<<<<<<< HEAD
                    className={`inline-flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-full border
                       ${row.status === "COMPLETED" && "bg-[#dcfce7] text-[#15803d] border-[#bbf7d0]"} 
                       ${row.status === "CANCELLED" && "bg-red-200 text-red-400 "}
                       ${row.status === "IN_PROGRESS" && "bg-blue-200 text-blue-400 "}
                       ${row.status === "PENDING" && "bg-yellow-200 text-yellow-400 "}

                      `}
                  >
                    {row.status}
=======
                    className={`inline-flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-full border ${
                      row.isActive === true
                        ? "bg-[#dcfce7] text-[#15803d] border-[#bbf7d0]"
                        : "bg-[#fef9c3] text-[#ca8a04] border-[#fef08a]"
                    }`}
                  >
                    {row.isActive === true ? "Active" : "Suspend"}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
                  </span>
                </td>

                {/* Action Row Interactions Button */}
                <td className="p-4 text-[15px] text-[#475569]">
                  {row?.createdAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
