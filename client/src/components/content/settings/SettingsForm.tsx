import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import ThemeToggle from "./ThemeToggle"
import CurrencySelect from "./CurrencySelect"
import { signOutUser } from "@/services/auth.service"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export function SettingsForm() {
  const navigate = useNavigate();

  async function handleLogout() {
    const error = await signOutUser();
    if (error) {
      toast.error("Failed to logout");
      return;
    }
    navigate("/login");
  }

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
          <FieldGroup>
            <Button 
              type="button" 
              variant="destructive" 
              className="w-full"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </FieldGroup>
        </FieldGroup>
      </form>
    </div>
  )
}
