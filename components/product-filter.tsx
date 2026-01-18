"use client";
import { parseAsInteger, useQueryState } from "nuqs";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ProductFilter() {
  const [search, setsearch] = useQueryState("search", { defaultValue: "" }); // to string filter
  const [perpage, setperpage] = useQueryState(
    "perpage",
    parseAsInteger.withDefault(10),
  ); // to integer filter

  return (
    <div className="flex items-center justify-between">
      <div>
        <Input
          className="w-full"
          placeholder="search"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
      </div>
      <div>
        <Select
          value={perpage.toString()}
          onValueChange={(Value) => setperpage(Number(Value))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Per Page" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="30">30</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="60">60</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default ProductFilter;
