import * as React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Button } from "../components/ui/button";

interface WrongPinAlertProps {
  dialogOpen: any;
  setDialogOpen: any;
  onClose: any;
}

const WrongPinAlert = ({ dialogOpen, setDialogOpen, onClose }: WrongPinAlertProps) => (
  <div className="w-1/2">
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button onClick={onClose} className="opacity-0 absolute h-0 w-0 overflow-hidden">
          Wrong PIN! Try Again
        </Button>
      </DialogTrigger>
      <DialogContent className="w-2/3 md:w-full rounded-lg md:p-6 md:pb-8">
        <DialogHeader>
          <DialogTitle className="text-rose-600">Invalid PIN</DialogTitle>
          <DialogDescription>The PIN you entered is incorrect. Please try again.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  </div>
);

export default WrongPinAlert;
