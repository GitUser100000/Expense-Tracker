import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function SuccessAlert({ alertTitle, alertDescription }: { alertTitle: string, alertDescription: string}) {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>{alertTitle}</AlertTitle>
        <AlertDescription>
          {alertDescription}
        </AlertDescription>
      </Alert>
    </div>
  )
}

export function ErrorAlert({ alertTitle, alertDescription }: { alertTitle: string, alertDescription: string}) {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>{alertTitle}</AlertTitle>
        <AlertDescription>
          <p>{alertDescription}</p>
        </AlertDescription>
      </Alert>
    </div>
  )
}
