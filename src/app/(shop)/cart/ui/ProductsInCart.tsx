'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/store"
import { QuantitySelector } from "@/components";
import Link from "next/link";

export const ProductsInCart = () => {

  const updateProductQuantity = useCartStore(state => state.updateProductQuantity);
  const removeProduct = useCartStore(state => state.removeProduct);
  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore(state => state.cart);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if(!loaded) {
    return <p>Loading...</p>
  }

  return (
    <>
      {
        productsInCart.map( product => (
          <div key={`${product.slug}-${product.size}`} className="flex mb-5">
            <Image
              src={`/products/${ product.image }`}
              width={ 100 }
              height={ 80 }
              alt={ product.title }
              className="mr-5"
            />
            <div>
              <Link
              className="hover:underline cursor-pointer"
                href={`/product/${product.slug}`}
              >
                { product.title }
              </Link>
              <p>${ product.price }</p>

              <QuantitySelector 
                quantity={product.quantity} 
                onQuantityChanged={value => updateProductQuantity(product, value)}
              />
              <button 
                className="underline mt-3"
                onClick={() => removeProduct(product)}
              >Remover</button>
            </div>
          </div>
        ))
      }
    </>
  )
}