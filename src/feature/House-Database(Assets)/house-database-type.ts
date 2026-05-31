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
  defaultValues?: Partial<HouseFormData>;
  nationOptions?: string[];
  managerOptions?: string[];
  onSubmit?: (data: HouseFormData) => void;
}