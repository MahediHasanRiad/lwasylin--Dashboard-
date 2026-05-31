import { Plus } from "lucide-react";
import { AddCommunityDialog } from "../../shared/Table-view-part/add-community-dialog";
import SearchPart from "../../shared/Table-view-part/search-bar";
import TableViewField from "../../shared/Table-view-part/table-view";
import { PaginationField } from "@/shared/pagination";
import TopBar from "@/shared/Table-view-part/top-bar";

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
      <section className="flex justify-between my-8">
        <TopBar
          title="Dashboard Overview"
          description="Welcome back! Here's yours system overview"
        />
        {/* add community button */}
        <div>
          <AddCommunityDialog
            variantType={"custom"}
            Icon={Plus}
            text="Open Dialog"
          />
        </div>
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

        {/* table part  */}
        <section className="w-full mt-4">
          <TableViewField data={tableDataMock} />
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

export default AddCommunity;
