"use server";

import { Product } from "@/components/shared/types";
import { unstable_cache } from "next/cache";

interface GetProductParams {
  search?: string;
  perpage?: number;
}

export const getProducts = unstable_cache(
  async (params: GetProductParams): Promise<Product[]> => {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/?title=${params.search}&offset=0&limit=${params.perpage}`,
    );
    const data = await response.json();
    return data;
  },
  ["products"],
  {
    tags: ["products"],
  },
);
