import { PaginationField } from "@/shared/pagination";
import SearchPart from "../Add-Community/components/search-bar";
import TopBar from "../Add-Community/components/top-bar";
import JobsTableViewField from "./components/jobs-table-view";
import { jobsData } from "./data/jobs-data";
<<<<<<< HEAD
import { useState } from "react";

function WorkPage() {
  const [filter, setFilter] = useState("");
  const [filterData, setFilterData] = useState(jobsData.allJobs);

  const onChangeHandler = (e) => {
    const filterValue = e.target.value;
    const responseData = jobsData.allJobs.filter((item) =>
      item.title.toLowerCase().includes(filterValue),
    );
    setFilter(filterValue);
    setFilterData(responseData);
  };

  const handleStatus = (data) => {
    const responseData = jobsData.allJobs.filter(
      (item) => item.status === data,
    );

    setFilterData(responseData);
  };

  return (
    <section>
=======

function WorkPage() {
  const onChangeHandler = () => {};

  return (
    <section >
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
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
<<<<<<< HEAD
            value={filter}
            handleStatus={handleStatus}
            filterValue={[
              { label: "CANCELLED", value: "CANCELLED" },
              { label: "COMPLETED", value: "COMPLETED" },
              { label: "IN_PROGRESS", value: "IN_PROGRESS" },
              { label: "PENDING", value: "PENDING" },
            ]}
=======
            value={""}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
          />
        </section>

        {/* table view  */}
        <section className="w-full mt-4">
          <JobsTableViewField
<<<<<<< HEAD
            data={filterData}
=======
            data={jobsData}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
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
