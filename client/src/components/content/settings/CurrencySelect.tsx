import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Field,
  FieldLabel,
} from "@/components/ui/field"
import { useAppContext } from "@/context/appsettings/AppContext"
import type { Currency } from "@/context/types";
import { editUserSettings } from "@/api/users";

export default function CurrencySelect() {
  const { appSettings, setCurrency } = useAppContext(); 
  const { currency } = appSettings; 
  function handleSelect(currency: Currency) {
    try {
      setCurrency(currency); 
      editUserSettings({currency}); 
    } catch(err) {
      console.log(err); 
    }
  }
  return (
    <div className="">
      <Field>
        <FieldLabel htmlFor="currency">
          Currency
        </FieldLabel>
        <Select defaultValue="" onValueChange={handleSelect}>
          <SelectTrigger id="currency">
            <SelectValue placeholder={currency}/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="AUD">AUD</SelectItem>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="EUR">EUR</SelectItem>
          </SelectContent>
        </Select>
      </Field>
    </div>
  )
}