import { PriorityItemsProp } from "@/lib/definitions";

export default function PriorityItems({ value }: PriorityItemsProp) {
  return <option value={value}>{value}</option>;
}
