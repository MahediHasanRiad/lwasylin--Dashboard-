export interface HouseFormData {
  houseName: string;
  houseLocation: string;
  propertyId: string;
  tenantName: string;
  tenantNumber: string;
  householdItems: string;
  nationName: string;
  houseManager: string;
  photos: File[];
}

export interface HouseDatabaseDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
<<<<<<< HEAD
  defaultValues?: any;
=======
  defaultValues?: Partial<HouseFormData>;
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
  nationOptions?: string[];
  managerOptions?: string[];
  onSubmit?: (data: HouseFormData) => void;
}