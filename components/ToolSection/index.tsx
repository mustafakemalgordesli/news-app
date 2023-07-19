import Currency from "./Currency";
import Weather from "./Weather";

export default function ToolSection() {
    return <div className="max-w-screen-xl p-4 flex flex-col sm:flex-row gap-5">
        <Currency />
        <Weather />
    </div>
}