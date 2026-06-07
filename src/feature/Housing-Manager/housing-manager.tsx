import { Plus } from "lucide-react";
import TopBar from "../Add-Community/components/top-bar";
import { AddManagerDialog } from "./components/add-manager-dialog";
import SearchPart from "../Add-Community/components/search-bar";
import HousingManagerViewField from "./components/table-view";
import { managerData } from "./data/housing-manager-data";
import { PaginationField } from "@/shared/pagination";


function HousingManager() {
  

  const onChangeHandler = (data) => {
    console.log(data);
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
          <div>
            {/* <PendingBtn
              handleSubmit={handleSubmit}
              text="Pending Request"
            /> */}
          </div>
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
        <SearchPart onChange={onChangeHandler} value={""} />

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
          data={managerData}
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
