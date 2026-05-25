import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface AlertDialogFieldType {
  id: number;
  text: string;
  title: string;
  description: string;
  confirmHandler: (id: number) => void;
  btnNeed?: boolean;
}

interface AlertDialogFieldType {
  open?: boolean;
  onClose?: () => void;
}

export function AlertDialogField({
  id,
  text,
  title,
  description,
  confirmHandler,
  btnNeed = true,
  open,
  onClose,
}: AlertDialogFieldType) {

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      {btnNeed && (
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="border-red-500/60 text-red-400 bg-red-500/10">{text}</Button>
        </AlertDialogTrigger>
      )}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => confirmHandler(id)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
