import { useRef } from "react";
export default function LoadingSpinner() {
  const modal = useRef<HTMLDialogElement | null>(null); 
  return (
    <dialog ref={modal}>Loading...</dialog>
  )
}