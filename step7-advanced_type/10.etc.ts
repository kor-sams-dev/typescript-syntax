{
  type Product = "cat" | "dog";

  type NewProduct = Capitalize<Product>; // "Cat" | "Dog"
}
