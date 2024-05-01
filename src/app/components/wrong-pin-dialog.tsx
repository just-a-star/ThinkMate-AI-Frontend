"use client";
import * as React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Button } from "../components/ui/button";

const WrongPinDialog = ({ onClose }: { onClose: any }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button onClick={onClose} className="opacity-0 absolute h-0 w-0 overflow-hidden">
        Wrong PIN! Try Again
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Invalid PIN</DialogTitle>
        <DialogDescription>The PIN you entered is incorrect. Please try again.</DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

export default WrongPinDialog;

