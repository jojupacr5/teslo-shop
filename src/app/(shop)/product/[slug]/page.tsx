export const revalidate = 604800;

import { notFound } from "next/navigation";

import { ProductsMobileSlideshow, ProductsSlideshow, QuantitySelector, SizeSelector, StockLabel } from "@/components";
import { titleFont } from "@/config/fonts";
import { getProductBySlug } from "@/actions";
import { Metadata, ResolvingMetadata } from "next";
import { AddToCart } from "./ui/AddToCart";

interface Props {
  params: {
    slug: string;
  }
}


export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug
 
  // fetch data
  const product = await getProductBySlug(slug)
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product?.title ?? '',
    description: product?.description ?? '',
    openGraph: {
      title: product?.title ?? '',
      description: product?.description ?? '',
      images: [`/products/${product?.images[1]}`],
    },
  }
}


export default async function ProductPage({ params }: Props) {

  const { slug } = params;

  const product = await getProductBySlug(slug) ;
  console.log("🚀 ~ ProductPage ~ product:", product)

  if( !product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">

        {/* Mobile Slideshow */}
        <ProductsMobileSlideshow
          title={ product.title }
          images={ product.images }
          classname="block md:hidden"
        />

        {/* Desktop Slideshow */}
        <ProductsSlideshow 
          title={ product.title }
          images={ product.images }
          classname="hidden md:block"
        />
      </div>

      {/* Details */}
      <div className="col-span-1 px-5">

        <StockLabel slug={product.slug} />
        
        <h1 className={`${titleFont.className} antialised font-bold text-xl`}>
          { product.title }
        </h1>
        <p className="text-lg mb-5">
          ${ product.price}
        </p>

        <AddToCart product={ product } />

        <h3 className="font-bold text-sm">
          Descripción
        </h3>
        <p className="font-light">
          { product.description }
        </p>
      </div>
    </div>
  )
}