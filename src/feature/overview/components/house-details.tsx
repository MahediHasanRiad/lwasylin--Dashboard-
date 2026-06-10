// house-details.tsx
import {
  User,
  Phone,
  CalendarSearch,
  MapPin,
  Shield,
  ClipboardList,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import HouseDetailsItem from "../utils/house-details-item";
import HouseDatabaseDialogField from "@/feature/House-Database(Assets)/components/house-database-dialog";
import { useState } from "react";

export function HouseDetails({ open, setOpen, houseDetails }) {
  const [editOpen, setEditOpen] = useState(false);

  console.log("house details", houseDetails);

  return (
    <Dialog open={open} onOpenChange={setOpen} key={houseDetails?.id}>
      {houseDetails?.map((houseDetails) => (
        <DialogContent
          className="sm:max-w-[30%] p-0 overflow-hidden"
          key={houseDetails.id}
        >
          <DialogDescription className="sr-only">
            Property details For {houseDetails.name}
          </DialogDescription>

          {/* Image */}
          <div className="relative w-full aspect-video bg-gray-100 flex items-center justify-center">
            <img
              src={houseDetails.images[0].image ?? "/empty-image-2.png"}
              alt="Property"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-5 py-4">
            <DialogHeader className="mb-4 text-left">
              <div className="flex items-start justify-between">
                <div>
                  <DialogTitle className="text-lg">
                    {houseDetails?.name}
                  </DialogTitle>
                  <p className="text-sm text-gray-400 mt-0.5">
                    {houseDetails?.propertyCode}
                  </p>
                </div>
                <Badge className=" bg-amber-100 text-amber-800 hover:bg-amber-100">
                  {houseDetails?.type}
                </Badge>
              </div>
            </DialogHeader>

            <div className="border-t border-gray-100 pt-1">
              <HouseDetailsItem
                icon={<Shield className="w-4 h-4" />}
                title="Manager"
                description={houseDetails?.manager?.name}
              />
              <HouseDetailsItem
                icon={<User className="w-4 h-4" />}
                title="Tenant name"
                description={houseDetails?.tenantName}
              />
              <HouseDetailsItem
                icon={<Phone className="w-4 h-4" />}
                title="Tenant number"
                description={houseDetails?.tenantNumber}
              />
              <HouseDetailsItem
                icon={<CalendarSearch className="w-4 h-4" />}
                title="Last inspection"
                description={'10-02-2026'}
              />
              <HouseDetailsItem
                icon={<MapPin className="w-4 h-4" />}
                title="Community"
                description={houseDetails?.communityName}
              />
              <HouseDetailsItem
                icon={<ClipboardList className="w-4 h-4" />}
                title="House Items"
                description={houseDetails?.items}
              />
            </div>

            <div className="flex gap-2 mt-4">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setEditOpen(true)}
              >
                Edit
              </Button>
              <Button variant="destructive" className="flex-1">
                Suspend
              </Button>
            </div>
          </div>
        </DialogContent>
      ))}

      <HouseDatabaseDialogField open={editOpen} onOpenChange={setEditOpen} defaultValues={houseDetails} />
    </Dialog>
  );
}
