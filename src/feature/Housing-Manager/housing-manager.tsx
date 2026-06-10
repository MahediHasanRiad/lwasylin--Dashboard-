import { Plus } from "lucide-react";
import TopBar from "../Add-Community/components/top-bar";
import { AddManagerDialog } from "./components/add-manager-dialog";
import SearchPart from "../Add-Community/components/search-bar";
import HousingManagerViewField from "./components/table-view";
import { managerData } from "./data/housing-manager-data";
import { PaginationField } from "@/shared/pagination";
<<<<<<< HEAD
import { useState } from "react";

function HousingManager() {
  const [filter, setFilter] = useState("");
  const [filterData, setFilterData] = useState(managerData.allManagers);

  const onChangeHandler = (e) => {
    const filterValue = e.target.value;
    const responseData = managerData.allManagers.filter((item) =>
      item.user.name.toLowerCase().includes(filterValue),
    );
    setFilter(filterValue)
    setFilterData(responseData);
  };

  const handleStatus = (data) => {
    const responseData = managerData.allManagers.filter(
      (item) => item.user.status === data,
    );

    setFilterData(responseData);
=======


function HousingManager() {
  

  const onChangeHandler = (data) => {
    console.log(data);
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
  };

  return (
    <section>
      {/* top bar  */}
      <section className="flex justify-between p-4">
        <div>
          <TopBar
            title="Dashboard Overview"
            description="Welcome back! Here's yours system overview"
          />
        </div>
        <div className="flex gap-4 p-4">
<<<<<<< HEAD
          <div></div>
=======
          <div>
            {/* <PendingBtn
              handleSubmit={handleSubmit}
              text="Pending Request"
            /> */}
          </div>
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
          <div>
            <AddManagerDialog
              title={"Add Manager"}
              variant={"custom"}
              Icon={Plus}
            />
          </div>
        </div>
      </section>

      {/* table */}
      <section className="p-4 bg-[#e6eaef] rounded-[20px] mt-10 space-y-4">
        {/* search  */}
<<<<<<< HEAD
        <SearchPart
          handleStatus={handleStatus}
          onChange={onChangeHandler}
          value={filter}
          filterValue={[
            { label: "ACTIVE", value: "ACTIVE" },
            { label: "PENDING", value: "PENDING" },
          ]}
        />
=======
        <SearchPart onChange={onChangeHandler} value={""} />
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1

        {/* table  */}
        <HousingManagerViewField
          headersData={[
            "House Manager",
            "Contact",
            "Mail",
            "Request of Community",
            "Status",
            "Actions",
          ]}
<<<<<<< HEAD
          data={filterData}
=======
          data={managerData}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
        />

        <PaginationField
          currentPage={1}
          totalPages={3}
          onPageChange={(val) => console.log(val)}
        />
      </section>
    </section>
  );
}

export default HousingManager;
