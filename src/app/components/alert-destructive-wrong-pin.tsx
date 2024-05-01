import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";

interface AlertDestructiveWrongPinProps {
  title: string;
  description: string;
}

export function AlertDestructiveWrongPin(props: AlertDestructiveWrongPinProps) {
  return (
    <Alert variant="destructive" className="p-6 flex flex-col">
      {/* <div className="flex flex-row"> */}
      <AlertCircle className="h-8 w-8 flex flex-col pt-2" />
      <AlertTitle className="text-lg">{props.title}</AlertTitle>
      <AlertDescription className="text-md">{props.description}</AlertDescription>
      {/* </div> */}
    </Alert>
  );
}
