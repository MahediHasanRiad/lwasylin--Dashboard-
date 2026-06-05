import { Plus } from "lucide-react";
import TopBar from "../Add-Community/components/top-bar";
import { AddFAQ } from "./components/add-faq";
import FaqTableView from "./components/faq-table-view";
import { PaginationField } from "@/shared/pagination";
import { FAQdata } from "./data/faq-data";

function FAQpage() {
  return (
    <section>
      {/* top bar  */}
      <div>
        <TopBar
          title="FAQ"
          description="Welcome back! here your system overview"
        />
      </div>
      <section className="p-4 bg-[#e6eaef] rounded-[20px] mt-6">
        <div className="flex justify-between items-center bg-white rounded p-3">
          <h1 className="text-2xl">FAQ</h1>
          <AddFAQ Icon={Plus} text="Add FAQ"/>
        </div>
      </section>

      {/* table part  */}
      <section className="w-full mt-4">
        <FaqTableView
          data={FAQdata}
          headersData={["No", "Question", "Answer", "Status", "Action"]}
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
  );
}

export default FAQpage;
