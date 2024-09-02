import { Size } from "@/interfaces";
import clsx from "clsx";

interface Props {
  selectedSize?: Size;
  availableSized: Size[];

  onSizeChanged: ( size: Size) => void
}

export const SizeSelector = ({selectedSize, availableSized, onSizeChanged}: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>

      <div className="flex">
        {
          availableSized.map( size => (
            <button 
              key={size} 
              onClick={() => onSizeChanged(size)}
              className={
                clsx(
                  "mx-2 hover:underline hover:font-medium text-lg",
                  {
                    'underline font-medium': size === selectedSize
                  }

                )
              }
            >
              { size }
            </button>
          ))
        }
      </div>

    </div>
  )
}