import Image from "next/image";
import Sidebar from "../sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      <div className="md:col-span-1 bg-[#ffffff] p-4 text-black">
        <Sidebar />
      </div>
      <div className="md:col-span-4 bg-[#f4f6fe] p-4">
        {children ? children : "kono ek navigation e click koro"}
      </div>
    </div>
  );
}
