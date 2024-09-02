export const revalidate = 604800;

import { notFound } from "next/navigation";

import { ProductsMobileSlideshow, ProductsSlideshow, QuantitySelector, SizeSelector, StockLabel } from "@/components";
import { titleFont } from "@/config/fonts";
import { getProductBySlug } from "@/actions";

interface Props {
  params: {
    slug: string;
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

        {/* Selector de tallas */}
        <SizeSelector 
          selectedSize={ product.sizes[0] }
          availableSized={ product.sizes }
        />

        {/* Selector de cantidad */}
        <QuantitySelector
          quantity={2}
        />

        <button className="btn-primary my-5">
          Agregar al carrito
        </button>

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