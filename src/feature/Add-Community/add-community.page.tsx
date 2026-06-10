import { Plus } from "lucide-react";
import { AddCommunityDialog } from "./components/add-community-dialog";
import TableViewField from "./components/table-view";
import { PaginationField } from "@/shared/pagination";
import TopBar from "@/feature/Add-Community/components/top-bar";
import SearchPart from "./components/search-bar";
import { communityData } from "./data/community-data";
<<<<<<< HEAD
import { useState } from "react";

function AddCommunity() {

  const [filter, setFilter] = useState("");
  const [filterdData, setFilterdData] = useState(communityData.allCommunities);

  
  // search handler
  const handleSearchChange = (e) => {
    const targetValue = e.target.value;
    setFilter(targetValue);

    const filteredValue = communityData.allCommunities.filter((item) =>
      item.name.toLowerCase().includes(targetValue.toLowerCase()),
    );
    setFilterdData(filteredValue);
  };

  // filter by status
  const handleStatus = (data) => {
    const filter = communityData.allCommunities.filter(item => item.isActive === data)
    setFilterdData(filter)
  }


  console.log(communityData.allCommunities);
=======

// const HeadersData = ['Community name', 'Location name', 'Units', 'House manager', 'Statues', 'Actions']


function AddCommunity() {
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
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
<<<<<<< HEAD
            value={filter}
            onChange={handleSearchChange}
            handleStatus={handleStatus}
=======
            value={""}
            onChange={""}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
            placeholder="Search by name, location"
          />
        </section>

        {/* table part  */}
        <section className="w-full mt-4">
<<<<<<< HEAD
          <TableViewField data={filterdData} />
=======
          <TableViewField data={communityData} />
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
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
