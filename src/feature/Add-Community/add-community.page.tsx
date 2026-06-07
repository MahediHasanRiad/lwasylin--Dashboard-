import { Plus } from "lucide-react";
import { AddCommunityDialog } from "./components/add-community-dialog";
import TableViewField from "./components/table-view";
import { PaginationField } from "@/shared/pagination";
import TopBar from "@/feature/Add-Community/components/top-bar";
import SearchPart from "./components/search-bar";
import { communityData } from "./data/community-data";

// const HeadersData = ['Community name', 'Location name', 'Units', 'House manager', 'Statues', 'Actions']


function AddCommunity() {
  return (
    <section className="p-4 overflow-hidden">
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
          <TableViewField data={communityData} />
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
