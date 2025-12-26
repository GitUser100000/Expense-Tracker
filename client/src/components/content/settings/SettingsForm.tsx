
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import ThemeToggle from "./ThemeToggle"
import CurrencySelect from "./CurrencySelect"

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
              <CurrencySelect />
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
