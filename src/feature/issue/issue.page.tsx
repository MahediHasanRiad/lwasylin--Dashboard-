import { Plus } from "lucide-react";
import TopBar from "../Add-Community/components/top-bar";
import { AddIssue } from "./components/add-issue-dialog";
import SearchPart from "../Add-Community/components/search-bar";
import { PaginationField } from "@/shared/pagination";
import HousingTableViewField from "../House-Database(Assets)/components/housing-table-view";

function IssuePage() {
  return (
    <section>
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
              value={""}
              onChange={""}
              onFilterClick={""}
              placeholder="Search by name, location"
            />
          </section>
        </div>

        {/* table view  */}
        <section className="w-full mt-4">
          <HousingTableViewField
            data={[{issue: 'Plumbing', status: 'Active'}, {issue: 'Plumbing', status: 'Pending'}]}
            headersData={['Issue Name', 'Status', 'Actions']}
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
