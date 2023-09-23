import { User } from "@/types/types";

const UserInfo = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
      <div className="h-20 w-20 rounded-full border overflow-hidden">
        <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl">
          <div className="flex items-center justify-center h-20 w-20 bg-indigo-200 rounded-full">
            {user.username.slice(0,2).toUpperCase()}
          </div>
        </button>
      </div>
      <div className="text-sm font-semibold mt-2">{user.username}</div>

      {/* <div className="flex flex-row items-center mt-3">
        <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
          <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
        </div>
        <div className="leading-none ml-1 text-xs">Active</div>
      </div> */}
    </div>
  );
};

export default UserInfo;
