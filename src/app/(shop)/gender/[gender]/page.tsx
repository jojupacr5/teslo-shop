import { notFound, redirect } from "next/navigation";
import { Pagination, ProductGrid, Title } from "@/components";
import { getPaginatedProductsWithImages } from "@/actions";
import { Gender } from "@prisma/client";

interface Props {
  params: {
    gender: string;
  },
  searchParams : {
    page?: string;
  }
}

export default async function  CategoryPage({ params, searchParams }: Props) {

  const { gender } = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ 
    page, 
    gender: gender as Gender 
  });

  if( products.length === 0 ){
    redirect(`/gender/${gender}`);
  }
  
  // if ( id === 'kids' ) {
  //   notFound();
  // }
  

  const labes: Record<string, string> = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'Todos'
  }

  return (
    <>
      <Title
        title={`Articulos para ${(labes as any)[gender]}`}
        subtitle="Todos los productos"
        clasName="mb-2"
      /> 

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  )
}