import React from "react";
import { forwardRef } from "react";
import { Button } from "../ui/button";

const AddButton = forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>((props, ref) => {
  return <Button className="bg-green-500 text-white w-40 h-10 cursor-pointer" ref={ref} {...props}>Add New</Button>
}); 


export default AddButton; 

