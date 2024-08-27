'use client'
import Link from "next/link"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"
import { useUIStore } from "@/store"
import { titleFont } from "@/config/fonts"

export const TopMenu = () => {
  const openMenu = useUIStore( state => state.openSideMenu);

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
          href="/category/men"
        >Hombres</Link>
        <Link 
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/women"
        >Mujeres</Link>
        <Link 
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/kids"
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
          href="/cart"
        >
          <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">3</span>
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