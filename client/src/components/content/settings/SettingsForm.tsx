import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ThemeToggle from "./ThemeToggle"

export function SettingsForm() {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Adjust Settings</FieldLegend>
            <FieldDescription>
              ...
            </FieldDescription>
            <FieldGroup>
              <div className="">
                <Field>
                  <FieldLabel htmlFor="currency">
                    Currency
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="AUD" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01">AUD</SelectItem>
                      <SelectItem value="02">USD</SelectItem>
                      <SelectItem value="03">EUR</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
            </FieldGroup>
            <FieldGroup>
              <Field>
                  <ThemeToggle />
                </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
        </FieldGroup>
      </form>
    </div>
  )
}
