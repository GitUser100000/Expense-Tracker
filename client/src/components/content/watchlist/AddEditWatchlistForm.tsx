import { Button } from "@/components/ui/button"
import { Field, FieldLabel, FieldSeparator } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import React from "react"
import { createWatchlistItem, editWatchlistItemById } from "@/api/watchlist"
import type { NewWatchlistItem, WatchlistItem } from "@/context/types"
import { toast } from "sonner"
import { useDataContext } from "@/context/data/DataContext"

export type AddEditWatchlistFormProps = {
  setOpen: (bool: boolean) => void,
  watchlistItem?: WatchlistItem
}

export function AddEditWatchlistForm({ watchlistItem, setOpen }: AddEditWatchlistFormProps) {
  const [name, setName] = React.useState<string>(watchlistItem?.name ?? "");
  const [url, setUrl] = React.useState<string>(watchlistItem?.url ?? "");
  const { addWatchlistItem, updateWatchlistItem } = useDataContext();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!name) {
      toast.error("Name is required");
      return;
    }

    const body: NewWatchlistItem = {
      name,
      url: url || null,
    };

    if (watchlistItem) {
      try {
        const updated = await editWatchlistItemById(watchlistItem.id, body);
        updateWatchlistItem(updated);
        toast(`${watchlistItem.name} successfully updated`);
        setOpen(false);
      } catch (err) {
        if (err instanceof Error) toast.error(err.message);
        else toast.error(`Unknown Error: ${err}`);
      }
    } else {
      try {
        const newItem = await createWatchlistItem(body);
        addWatchlistItem(newItem);
        toast(`${name} successfully added`);
        setOpen(false);
      } catch (err) {
        if (err instanceof Error) toast.error(err.message);
        else toast.error(`Unknown Error: ${err}`);
      }
    }
  }

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input 
              placeholder="Netflix" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required
            />
          </Field>

          <Field>
            <FieldLabel>URL (optional)</FieldLabel>
            <Input 
              type="url"
              placeholder="https://netflix.com/pricing" 
              value={url} 
              onChange={(e) => setUrl(e.target.value)}
            />
          </Field>
        </div>

        <FieldSeparator className="my-8" />

        <div className="flex justify-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  )
}

