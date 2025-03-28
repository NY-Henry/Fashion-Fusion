interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const ProductsPage = () => {
  // Product data with online image URLs
  const products: Product[] = [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Comfortable cotton t-shirt",
      category: "Clothing",
    },
    {
      id: 2,
      name: "Stylish Hoodie",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Warm and cozy hoodie",
      category: "Clothing",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Lightweight running shoes",
      category: "Footwear",
    },
    {
      id: 4,
      name: "Leather Wallet",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Genuine leather wallet",
      category: "Accessories",
    },
    {
      id: 5,
      name: "Smart Watch",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Feature-rich smart watch",
      category: "Electronics",
    },
    {
      id: 6,
      name: "Bluetooth Headphones",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Wireless Bluetooth headphones",
      category: "Electronics",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Our Products</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="relative h-64">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
              <p className="mb-2 text-gray-600">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500">
                  {product.category}
                </span>
              </div>
              <button className="mt-4 w-full cursor-pointer rounded-md bg-gray-900 px-4 py-2 text-white transition-colors duration-300 hover:bg-gray-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
