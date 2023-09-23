import { graphQLClient } from "@/configs/graphQlRequest";
import { API_SERVER_URL } from "@/constants/constants";
import { Company } from "@/types/types";
import { gql } from "graphql-request";

export const getCompaniesQuery = gql`
  query Companies {
    companies {
      id
      name
    }
  }
`;
console.log("API_SERVER_URL", API_SERVER_URL);
export const getCompanies = async (): Promise<{ companies: Company[] }> => {
  return graphQLClient.request(getCompaniesQuery);
};
