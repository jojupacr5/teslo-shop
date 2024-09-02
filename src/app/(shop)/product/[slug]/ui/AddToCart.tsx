'use client'
import { useState } from "react"
import { Product, Size } from "@/interfaces"
import { QuantitySelector, SizeSelector } from "@/components"


interface Props {
  product: Product
}

export const AddToCart = ({ product }: Props) => {

  const [size, setSize] = useState<Size|undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {
    setPosted(true);
    if(!size) return;
    // console.log(size, quantity, product)
    // Todo: Add to cart
  }

  return (
    <>
      {
        posted && !size && (
          <span className="mt-1 text-red-700 fade-in">Debe de seleccionar una talla*</span>
        )
      }

      {/* Selector de tallas */}
      <SizeSelector 
        selectedSize={ size }
        availableSized={ product.sizes }
        onSizeChanged={ size => setSize(size)}
      />

      {/* Selector de cantidad */}
      <QuantitySelector
        quantity={quantity}
        onQuantityChanged={ quantity => setQuantity(quantity)} 
      />

      <button 
        onClick={addToCart}
        className="btn-primary my-5"
      >
        Agregar al carrito
      </button>
    </>
  )
}