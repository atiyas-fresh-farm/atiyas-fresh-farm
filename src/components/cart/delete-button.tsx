"use client";

import { TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const DeleteBtn = ({ index, deleteRow }: { index: number, deleteRow: (i: number) => void }) => {
  return (
    <Button className="col-span-1" variant="outline" size="icon" onClick={() => deleteRow(index)}>
      <TrashIcon size={24} />
    </Button>
  );
}

export { DeleteBtn };