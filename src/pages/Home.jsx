import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    setLoading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setPosts(data);
    } catch (e) {
      console.error("Error fetching products:", e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="  flex flex-col gap-y-2 lg:grid grid-cols-4 max-w-7xl mx-auto space-x-6 p-2   ">
          {posts.map((post) => (
            <Product key={post.id} post={post} />


            
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
