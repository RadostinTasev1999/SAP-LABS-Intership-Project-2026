import { PriorityItems } from '@/lib/definitions'

export default function PriorityItems({
    text,
    value
}: PriorityItems){

    return (
        <option value={value}>
            {text}
        </option>
    )
}