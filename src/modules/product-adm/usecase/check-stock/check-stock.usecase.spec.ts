import Id from "../../../@shared/domain/value-object/id.value-object"
import Product from "../../domain/product.entity"
import CheckStockUseCase from "./check-stock.usecase"

const product = new Product({
  id: new Id('1'),
  name: 'Product',
  description: 'product description',
  purchasePrice: 10,
  stock: 10
})

const MockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(product))
  }
}

describe("Check Stock usecase unit test", () => {

  it("Should check stock", async () => {
    const ProductRepository = MockRepository();
    const usecase = new CheckStockUseCase(ProductRepository);
    const input = {
      productId: "1"
    };

    const result = await usecase.execute(input);

    expect(ProductRepository.find).toHaveBeenCalled();
    expect(result.productId).toBe("1");
    expect(result.stock).toBe(10);
  });

});
