'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"
import { useCartStore, useUIStore } from "@/store"
import { titleFont } from "@/config/fonts"


export const TopMenu = () => {
  const openMenu = useUIStore( state => state.openSideMenu);
  const totalItemsInCart = useCartStore( state => state.getTotalItems() );

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link
          href="/"  
        >
          <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden md:block">
        <Link 
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/men"
        >Hombres</Link>
        <Link 
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/women"
        >Mujeres</Link>
        <Link 
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/kid"
        >Niños</Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Link 
          className="mx-2 p-2"
          href="/search"
        >
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link 
          className="relative mx-2"
          href={
            ((totalItemsInCart === 0) && loaded)
            ? "/empty"
            : "/cart"
          }
        >
          { 
            ( loaded && totalItemsInCart > 0) && (
              <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                { totalItemsInCart }
              </span>
            )
          }
          
          <IoCartOutline className="w-5 h-5" />
        </Link>

        <button 
          onClick={() => openMenu()}
          className="mx-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Menu
        </button>
      </div>
    </nav>
  )
}