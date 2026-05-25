import { DollarSign, House, ListTodo, Map } from "lucide-react";
import OverviewCard from "./components/overview-card";
import HouseCard from "./components/house-card";
import image from '../../../public/house.png'

function OverviewPage() {
  return (
    <section>
      {/* top bar  */}
      <div className="w-full p-8 h-50 bg-primary-0 rounded-2xl ">
        <h1 className="font-Oswald text-[48px] font-semibold">
          Dashboard overview
        </h1>
        <p className="text-2xl">Welcome back! Here's your system overview.</p>
      </div>

      {/* overview  */}
      <section className="grid grid-cols-4 gap-4 mt-10">
        <OverviewCard
          Icon={Map}
          title="Active nations"
          value={47}
          comparisonLabel="vs last 30d"
          percentage="+8.8%"
        />
        <OverviewCard
          Icon={House}
          title="Active nations"
          value={47}
          comparisonLabel="vs last 30d"
          percentage="+8.8%"
        />
        <OverviewCard
          Icon={ListTodo}
          title="Active nations"
          value={47}
          comparisonLabel="vs last 30d"
          percentage="+8.8%"
        />
        <OverviewCard
          Icon={DollarSign}
          title="Active nations"
          value={47}
          comparisonLabel="vs last 30d"
          percentage="+8.8%"
        />
      </section>

      {/* recent add houses  */}
      <section className="mt-20">
        {/* title  */}
        <div>
          <h1 className="font-secondary text-[40px]">Recent Add House</h1>
        </div>

        <section className="grid grid-cols-3 mt-4">
          <HouseCard
            imageUrl={image}
            propertyId="#NH204"
            location="124 Maple Street, Springfield"
            beds={3}
            baths={2}
          />
          <HouseCard
            imageUrl={image}
            propertyId="#NH204"
            location="124 Maple Street, Springfield"
            beds={3}
            baths={2}
          />
          <HouseCard
            imageUrl={image}
            propertyId="#NH204"
            location="124 Maple Street, Springfield"
            beds={3}
            baths={2}
          />
        </section>
      </section>
    </section>
  );
}

export default OverviewPage;
