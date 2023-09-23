import { getServerSession } from "next-auth";
import CompaniesList from "../components/SideBar/CompaniesList";
import UserInfo from "../components/SideBar/UserInfo";
import { authOptions } from "@/app/authOptions";
import { Session } from "@/types/types";
import getQueryClient from "@/app/getQueryClient";
import { getCompanies, getCompaniesQuery } from "@/services/company";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import request from "graphql-request";
import { API_SERVER_URL } from "@/constants/constants";

const SideBar = async () => {
  const session = (await getServerSession(authOptions as any)) as Session;
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["companies"], () =>
    request(
      API_SERVER_URL,
      getCompaniesQuery,
      {},
      { authorization: `Bearer ${session.accessToken}` }
    )
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
      <div className="flex flex-row items-center justify-center h-12 w-full">
        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
        </div>
        <div className="ml-2 font-bold text-2xl">QuickChat</div>
      </div>
      <UserInfo user={session.user} />
      <Hydrate state={dehydratedState}>
        <CompaniesList />
      </Hydrate>
    </div>
  );
};

export default SideBar;