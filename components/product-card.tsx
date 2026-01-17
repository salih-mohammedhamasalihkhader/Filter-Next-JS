import { Product } from "./shared/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingBasketIcon } from "lucide-react";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images[0].startsWith("http")
    ? product.images[0]
    : `https://cdn.pixabay.com/${product.images[0]}`;

  return (
    <Card key={product.id} className="p-0 relative">
      <CardHeader className="p-0">
        <Image
          src={imageUrl}
          alt={product.title}
          width={300}
          height={300}
          unoptimized
          className="w-full object-cover rounded-t-lg h-50"
        />
        <Badge variant="secondary" className="absolute m-2 rounded-sm">
          {product.category.name}
        </Badge>
        <div className="p-4">
          <CardTitle>{product.title}</CardTitle>
        </div>
        <CardDescription className="pl-4">
          {product.description.slice(0, 10)}...
        </CardDescription>
      </CardHeader>
      <CardFooter className="pb-4 flex justify-between items-center gap-2">
        <p className="text-xl font-bold">${product.price}</p>
        <Button className="cursor-pointer">
          {" "}
          <ShoppingBasketIcon /> Add To Card
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
