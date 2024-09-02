'use client'
import { GetStockBySlug } from "@/actions";
import { titleFont } from "@/config/fonts"
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {

  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    const inStock = await GetStockBySlug(slug)
    setStock(inStock);
    setIsLoading(false);
  }

  return (
    <>
      {
        isLoading
        ? (
          <div className={`${titleFont.className} antialised font-bold text-lg animate-pulse bg-gray-200`}>
            &nbsp;
          </div>
        ) : (
          <div className={`${titleFont.className} antialised font-bold text-lg`}>
            Stock: { stock }
          </div>
        )    
      }
    </>
  )
}