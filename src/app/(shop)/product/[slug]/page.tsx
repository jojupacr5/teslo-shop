import { notFound } from "next/navigation";

import { initialData } from "@/seed/seed";
import { ProductsSlideshow, QuantitySelector, SizeSelector } from "@/components";
import { titleFont } from "@/config/fonts";

interface Props {
  params: {
    slug: string;
  }
}

export default function ProductPage({ params }: Props) {

  const { slug } = params;
  const product = initialData.products.find( product => product.slug === slug );

  if( !product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">
        <ProductsSlideshow 
          title={ product.title }
          images={ product.images }
        />
      </div>

      {/* Details */}
      <div className="col-span-1 px-5">
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