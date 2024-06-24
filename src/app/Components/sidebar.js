import Link from "next/link";

const Sidebar = () => {
  return (
    <div className=" text-black h-screen flex flex-col p-4">
      <Link className="my-4" href="/members">
        <span className="mb-4 p-2 hover:bg-gray-700 rounded my-4">
          Members
        </span>
      </Link>
      <Link className="my-4" href="/visitors">
        <span className="mb-4 p-2 hover:bg-gray-700 rounded my-4">
          Visitors
        </span>
      </Link>
    </div>
  );
};

export default Sidebar;
