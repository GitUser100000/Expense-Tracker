import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ModalProps = {
  button?: React.ReactElement
  children: React.ReactNode;
  title: string;
  description: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean
};

export function Modal({
  button,
  children,
  title,
  description,
  open,
  setOpen,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {button && (
        <DialogTrigger asChild>
          {button}
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        {/* <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={onSave}>Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
