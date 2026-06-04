import { PendingBtn } from "@/shared/button";
import TopBar from "../Add-Community/components/top-bar";
import { Plus } from "lucide-react";
import { AddContractorDialog } from "./components/add-contractor-dialog";
import SearchPart from "../Add-Community/components/search-bar";
import { PaginationField } from "@/shared/pagination";
import { contractorData } from "./data/contractor-data";
import ContractorTableView from "./components/contractor-table-view";

function ContractorPage() {
  const handleSubmit = () => {
    console.log("this is handle submit");
  };

  return (
    <section>
      {/* top bar  */}
      <section className="flex justify-between">
        <div>
          <TopBar
            title="Dashboard Overview"
            description="Welcome back! Here's yours system overview"
          />
        </div>
        <div className="flex gap-4">
          <div>
            <PendingBtn handleSubmit={handleSubmit} text="Pending Request" />
          </div>
          <div>
            <AddContractorDialog
              title={"Add Contractor"}
              variant={"custom"}
              Icon={Plus}
            />
          </div>
        </div>
      </section>

      {/* table view  */}
      <section className="p-4 bg-[#e6eaef] rounded-[20px] mt-6">
        {/* search & filter  */}
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
          <ContractorTableView
            data={contractorData}
            headersData={[
              "Vendor",
              "Contact",
              "Email",
              "Skill / Service",
              "Status",
              "Actions",
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

export default ContractorPage;
