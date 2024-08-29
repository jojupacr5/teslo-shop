import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { ProductGrid, Title } from "@/components";
import { Product, Category } from "@/interfaces";

const products = initialData.products;

interface Props {
  params: {
    id: Category;
  }
}

export default function CategoryPage({ params }: Props) {

  const { id } = params;
  
  // if ( id === 'kids' ) {
  //   notFound();
  // }
  const genderProducts = products.filter((product) => product.gender === id );

  const labes: Record<Category, string> = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'Todos'
  }

  return (
    <>
      <Title
        title={`Articulos para ${(labes as any)[id]}`}
        subtitle="Todos los productos"
        clasName="mb-2"
      /> 

      <ProductGrid products={genderProducts} />
    </>
  )
}