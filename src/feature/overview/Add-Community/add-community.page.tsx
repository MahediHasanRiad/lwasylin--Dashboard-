import { AddCommunityDialog } from "./components/add-community-dialog";
import SearchPart from "./components/search-bar";
import TableViewField from "./components/table-view";

const tableDataMock = [
  {
    id: "1",
    communityName: "Little Pine Community",
    locationName: "SK",
    units: 740,
    houseManager: "Jerome Bell",
    status: "Suspend",
  },
];

function AddCommunity() {
  return (
    <section>
      {/* top bar  */}
      <section className="flex justify-between">
        <div>
          <h1 className="text-lg lg:text-3xl font-semibold font-secondary">
            Dashboard Overview
          </h1>
          <p className="text-md md:text-lg">
            Welcome back! Here's yours system overview
          </p>
        </div>
        {/* add community button */}
        <div>
          <AddCommunityDialog />
        </div>
      </section>

      {/* search part  */}
      <section className="mt-10">
        <SearchPart
          value={""}
          onChange={""}
          onFilterClick={""}
          placeholder="Search by name, location"
        />
      </section>

      {/* table part  */}
      <section className="w-full mt-4">
        <TableViewField
          data={tableDataMock}
        />
      </section>
    </section>
  );
}

export default AddCommunity;
