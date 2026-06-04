import { DollarSign, House, ListTodo, Map } from "lucide-react";
import OverviewCard from "./components/overview-card";
import HouseCard from "./components/house-card";
import image from '../../../public/house.png'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { overviewAsyncThunk } from "./redux/overview.thunk";

function OverviewPage() {

  const {isError, isLoading, data} = useSelector((state: RootState) => state.overview)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(overviewAsyncThunk()).unwrap()
  }, [])

  if(isError) <div>{isError}</div>
  if(isLoading) <div>Loading...</div>

  return (
    <section className="p-4">
      {/* top bar  */}
      <div className="w-full p-8 h-50 bg-primary-0 rounded-2xl">
        <h1 className="font-Oswald text-3xl md:text-[48px] font-semibold">
          Dashboard overview
        </h1>
        <p className="text-xl md:text-2xl">Welcome back! Here's your system overview.</p>
      </div>

      {/* overview  */}
      <section className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 mt-10">
        <OverviewCard
          Icon={Map}
          title="Active nations"
          value={data?.activeCommunities}
          comparisonLabel="vs last 30d"
          percentage="+8.8%"
        />
        <OverviewCard
          Icon={House}
          title="Total House"
          value={data?.totalProperties}
          comparisonLabel="vs last 30d"
          percentage="+8.8%"
        />
        <OverviewCard
          Icon={ListTodo}
          title="Open work Order"
          value={data?.openWorkOrders}
          comparisonLabel="vs last 30d"
          percentage="+8.8%"
        />
        <OverviewCard
          Icon={DollarSign}
          title="Monthly Subscription Sales"
          value={data?.monthlyRevenue  }
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

        <section className="grid md:grid-cols-2 lg:grid-cols-3 mt-4">
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
