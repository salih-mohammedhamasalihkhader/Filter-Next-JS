import { createLoader, parseAsInteger, parseAsString } from "nuqs/server";

export const coordinatesSearchParams = {
  search: parseAsString.withDefault(""),
  perpage: parseAsInteger.withDefault(10),
};

export const loadSearchParams = createLoader(coordinatesSearchParams);
