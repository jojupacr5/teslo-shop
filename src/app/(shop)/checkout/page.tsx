import Link from "next/link"
import Image from "next/image"

import { initialData } from "@/seed/seed"
import { QuantitySelector, Title } from "@/components"

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        
        <Title title="Verificar orden" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href="/cart" className="underline mb-5" >
              Editar carrito
            </Link>
          

          {/* Items */}
          {
            productsInCart.map( product => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${ product.images[0] }`}
                  width={ 100 }
                  height={ 80 }
                  alt={ product.title }
                  className="mr-5"
                />
                <div>
                  <p>{ product.title }</p>
                  <p>${ product.price } x 3</p>
                  <p className="font-bold">Subtotal: ${ product.price * 3 }</p>
                  <button className="underline mt-3">Remover</button>
                </div>
              </div>
            ))
          }
          </div>

          {/* Checkout - Resumen de orden */}
          <div className="bg-white shadow-xl p-7 h-fit">

            <h2 className="text-2xl mb-2 font-bold">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Fernando Herrera</p>
              <p>Av. Siempre viva 123</p>
              <p>Col. Centro</p>
              <p>Alcaldia Cuauhtémoc</p>
              <p>Ciudad de México</p>
              <p>CP 123123</p>
              <p>123.123.123</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 bg-gray-200 mb-10"></div>

            <h2 className="text-2xl mb-2 font-bold">Resumen de orden</h2>
            
            <div className="grid grid-cols-2">
              
              <span>No. Productis</span>
              <span className="text-right">3 articulos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">3 articulos</span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="mt-5 text-2xl text-right">$ 200</span>

            </div>

            <div className="mt-5 mb-2 w-full">
              <p className="mb-5">
                Al hacer clien en &quot;Colocar orden&quot;, aceptas nuestros <a className="underline text-blue-700" href="#">términos y condiciones</a> y <a className="underline text-blue-700" href="#">políticas de privacidad</a>
              </p>
              <Link 
                className="flex btn-primary justify-center"
                href="/orders/123"
              >Colocar orden</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}