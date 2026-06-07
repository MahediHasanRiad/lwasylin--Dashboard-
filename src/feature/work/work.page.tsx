import { PaginationField } from "@/shared/pagination";
import SearchPart from "../Add-Community/components/search-bar";
import TopBar from "../Add-Community/components/top-bar";
import JobsTableViewField from "./components/jobs-table-view";
import { jobsData } from "./data/jobs-data";

function WorkPage() {
  const onChangeHandler = () => {};

  return (
    <section >
      {/* top bar  */}
      <section className="p-4">
        <TopBar
          title="Dashboard Overview"
          description="Welcome back! Here's yours system overview"
        />
      </section>

      {/* table part  */}
      <section className="p-4 bg-[#e6eaef] rounded-[20px] mt-10 space-y-4">
        {/* search / filter  */}
        <section>
          <SearchPart
            onChange={onChangeHandler}
            onFilterClick={""}
            value={""}
          />
        </section>

        {/* table view  */}
        <section className="w-full mt-4">
          <JobsTableViewField
            data={jobsData}
            headersData={[
              "ID",
              "Issue title",
              "Issue description",
              "Community",
              "Assign to",
              "Status",
              "Create Data",
            ]}
          />
        </section>

        {/* pagination  */}
        <section>
          <PaginationField
            currentPage={1}
            totalPages={2}
            onPageChange={(val) => console.log(val)}
          />
        </section>
      </section>
    </section>
  );
}

export default WorkPage;
