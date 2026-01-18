import { gerProducts } from "@/Server/Products";
import { loadSearchParams } from "@/components/search-params";
import type { SearchParams } from "nuqs/server";
import ProductCard from "@/components/product-card";
import ProductFilter from "@/components/product-filter";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

async function page({ searchParams }: PageProps) {
  const { search, perpage } = await loadSearchParams(searchParams);

  const products = await gerProducts({ search, perpage });
  return (
    <main className="flex flex-col gap-10 justify-center max-w-6xl mx-auto px-4">
      <h1 className="text-2xl">Filter Next.js</h1>
      <ProductFilter />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default page;
