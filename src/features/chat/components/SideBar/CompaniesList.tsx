"use client";

import { getCompanies } from "@/services/company";
import { Company } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

const CompaniesList = () => {
  const { data, isSuccess } = useQuery<{ companies: Company[] }>({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });
  if (!isSuccess) {
    return null;
  }
  const companies = data.companies;
  return (
    <div className="flex flex-col mt-8">
      <div className="flex flex-row items-center justify-between text-xs">
        <span className="font-bold">Active Conversations</span>
        <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
          {companies.length}
        </span>
      </div>
      <div className="flex flex-col space-y-1 mt-4 -mx-2  overflow-y-auto">
        {companies.map((company) => {
          return (
            <button
              key={company.id}
              className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
            >
              <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                {company.name[0].toUpperCase()}
              </div>
              <div className="ml-2 text-sm font-semibold">{company.name}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CompaniesList;
