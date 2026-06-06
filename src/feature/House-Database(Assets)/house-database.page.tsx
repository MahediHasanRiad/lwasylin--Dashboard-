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

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <section>
      {/* top bar  */}
      <section className="flex justify-between my-8 items-center">
        <TopBar
          title="Dashboard Overview"
          description="Welcome back! Here's yours system overview"
        />
        {/* add house database button */}
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
      </section>

      <section className="p-4 bg-[#e6eaef] rounded-[20px]">
        {/* search part  */}
        <section className="mt-10 ">
          <SearchPart
            value={""}
            onChange={""}
            onFilterClick={""}
            placeholder="Search by name, location"
          />
        </section>

        {/* table view  */}
        <section className="w-full mt-4">
          <HousingTableViewField
            data={propertyData}
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
