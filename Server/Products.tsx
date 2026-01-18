"use server";

import { Product } from "@/components/shared/types";

interface GetProductParams {
  search?: string;
  perpage?: number;
}

export async function gerProducts({
  search,
  perpage,
}: GetProductParams): Promise<Product[]> {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/?title=${search}&offset=0&limit=${perpage}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
