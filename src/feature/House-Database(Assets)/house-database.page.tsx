import TopBar from "@/feature/Add-Community/components/top-bar";
import HouseDatabaseDialogField from "./components/house-database-dialog";
import { useState } from "react";
import AddButton from "@/shared/Add-button";
import SearchPart from "../Add-Community/components/search-bar";
import HousingTableViewField from "./components/housing-table-view";
import { PaginationField } from "@/shared/pagination";
import { propertyData } from "./data/property-data";


const headersData = [
  "Houses Name/ID",
  "House Location",
  "Household items",
  "Community Name",
  "Last Investigation",
<<<<<<< HEAD
  "Status",
=======
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
  "Actions",
];
export const houseDatabaseData = [
  {
    id: 1,
    name: "abc",
    locations: "Dhaka",
    items: ["mobile", "leptop"],
    communityName: "community Name",
    lastInvestigation: "01/05/2000",
  },
];

function HouseDatabase() {

  const [open, setOpen] = useState(false);
<<<<<<< HEAD
  const [filter, setFilter] = useState("");
  const [filterdData, setFilterdData] = useState(propertyData.allProperties);
=======
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1

  const onSubmit = (data) => {
    console.log("data", data);
  };

<<<<<<< HEAD
  const handleChange = (e) => {
    const targetValue = e.target.value;
    setFilter(targetValue);
    const filterData = propertyData.allProperties.filter(item => item.location.toLowerCase().includes(targetValue))
    setFilterdData(filterData)
  } 

  const handleStatus = (data) => {
    const filterStatus = propertyData.allProperties.filter(item => item.isActive === data)
    setFilterdData(filterStatus)
  }


=======
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
  return (
    <section>
      {/* top bar  */}
      <section className="flex justify-between my-8 items-center p-4">
        <TopBar
          title="Dashboard Overview"
          description="Welcome back! Here's yours system overview"
        />
        {/* add house database button */}
        <div className="p-4">
        <AddButton setOpen={setOpen} text="Add Houses" />
        <HouseDatabaseDialogField
          open={open}
          onOpenChange={setOpen}
          nationOptions={[
            "Cedar Lake Nation",
            "Silver Creek Nation",
            "Blue Ridge Nation",
          ]}
          managerOptions={["Dianne Russell", "John Smith", "Sarah Connor"]}
          onSubmit={onSubmit}
        />
        </div>
      </section>

      <section className="p-4 bg-[#e6eaef] rounded-[20px]">
        {/* search part  */}
        <section className="mt-10 ">
          <SearchPart
<<<<<<< HEAD
            value={filter}
            onChange={handleChange}
            handleStatus={handleStatus}
=======
            value={""}
            onChange={""}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
            placeholder="Search by name, location"
          />
        </section>

        {/* table view  */}
        <section className="w-full mt-4">
          <HousingTableViewField
<<<<<<< HEAD
            data={filterdData}
=======
            data={propertyData}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
            headersData={headersData}
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

export default HouseDatabase;
