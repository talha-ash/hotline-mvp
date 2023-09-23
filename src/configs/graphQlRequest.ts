import { API_SERVER_URL } from "@/constants/constants";
import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(API_SERVER_URL);
