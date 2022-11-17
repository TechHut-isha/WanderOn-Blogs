import { useEffect, useState,createContext } from "react";

const BlogContext = createContext();
export default function Context(props) {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function myFetch() {
      fetch("https://api.npoint.io/f89acb9ee900ca95b8dc")
        .then((res) => res.json())
        .then((data) => setBlogs(data));
    }
    myFetch();
  }, []);

  return (
    <BlogContext.Provider value={{Blogs}}>
        {props.children}
    </BlogContext.Provider>
  );
}

export {BlogContext};
