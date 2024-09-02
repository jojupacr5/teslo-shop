'use client'
import { useState } from "react"
import { CartProduct, Product, Size } from "@/interfaces"
import { QuantitySelector, SizeSelector } from "@/components"
import { useCartStore } from "@/store"


interface Props {
  product: Product
}

export const AddToCart = ({ product }: Props) => {

  const addProductToCart = useCartStore( state => state.addProductToCart );

  const [size, setSize] = useState<Size|undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {
    setPosted(true);
    if(!size) return;
    // console.log(size, quantity, product)

    //Create a cartProduct
    const CartProduct:CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0]
    }

    //add created product to cart
    addProductToCart(CartProduct);
    setPosted(false);
    setQuantity(1);
    setSize(undefined);
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