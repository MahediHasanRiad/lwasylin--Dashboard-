import { Plus } from "lucide-react";
import TopBar from "../Add-Community/components/top-bar";
import { AddIssue } from "./components/add-issue-dialog";
import SearchPart from "../Add-Community/components/search-bar";
import { PaginationField } from "@/shared/pagination";
<<<<<<< HEAD
import { useState } from "react";
import IssueTableViewField from "./components/issue-table-view";

const IssueData = [
  { issue: "Plumbing", status: "ACTIVE" },
  { issue: "Electricians", status: "PENDING" },
  { issue: "Engineer", status: "PENDING" },
];

function IssuePage() {
  
  const [filter, setFilter] = useState("");
  const [filterdData, setFilterdData] = useState(IssueData);


  const handleChange = (e) => {
    const targetValue = e.target.value;
    setFilter(targetValue);
    const filterData = IssueData.filter((item) =>
      item.issue.toLowerCase().includes(targetValue),
    );
    setFilterdData(filterData);
  };

  const handleStatus = (data) => {
    const filterStatus = IssueData.filter((item) => item.status === data);
    setFilterdData(filterStatus);
  };

=======
import HousingTableViewField from "../House-Database(Assets)/components/housing-table-view";

function IssuePage() {
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
  return (
    <section className="p-4">
      {/* top bar  */}
      <div className="flex justify-between items-center">
        <TopBar
          title="Issue"
          description="welcome back! here your system overview"
        />
        <AddIssue variant={"custom"} Icon={Plus} text="Add Issue" />
      </div>

      {/* table view  */}
      <section className="p-4 bg-[#e6eaef] rounded-[20px]">
        <div>
          {/* search  */}
          <section className="mt-10 ">
            <SearchPart
<<<<<<< HEAD
              value={filter}
              onChange={handleChange}
              handleStatus={handleStatus}
              filterValue={[
                { label: "Active", value: "ACTIVE" },
                { label: "Pending", value: "PENDING" },
              ]}
=======
              value={""}
              onChange={""}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
              placeholder="Search by name, location"
            />
          </section>
        </div>

        {/* table view  */}
        <section className="w-full mt-4">
<<<<<<< HEAD
          <IssueTableViewField
            data={filterdData}
            headersData={["Issue Name", "Status", "Actions"]}
=======
          <HousingTableViewField
            data={[{issue: 'Plumbing', status: 'Active'}, {issue: 'Plumbing', status: 'Pending'}]}
            headersData={['Issue Name', 'Status', 'Actions']}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
          />
        </section>

        {/* pagination  */}

        <section>
          <PaginationField
            currentPage={1}
            totalPages={3}
            onPageChange={(val) => console.log(val)}
          />
        </section>
      </section>
    </section>
  );
}

export default IssuePage;
