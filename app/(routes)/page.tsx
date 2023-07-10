import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import Productlist from "@/components/Product-List";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("880e4812-4587-4c4a-983c-4593ada101fe");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <Productlist title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
