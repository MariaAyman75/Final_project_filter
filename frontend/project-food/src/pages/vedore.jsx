import React ,{useState,useEffect}from "react";
import axios from "axios";
import Product_component from '../component/vendors/vendor';
import SearchFilter from './filters'

import './home.css'


function Vendor_p(){
    const [products,setproducts] = useState([]);
    const [cart,setcart]=useState([]);
    const [error, setError] = useState(false);
// -------------------------filter---------------
    const [query, setQuery] = useState('');
      const [category, setCategory] = useState('');
      const [country, setCountry] = useState('');

    // useEffect(()=>{
    //     axios.get('http://localhost:8000/product_api/products/')
    //         .then((res)=>{
    //             console.log(res.data)
    //            setproducts(res.data)
    //     })
    //         .catch(() => {
    //         setError(true);
    //       })

    //     },[query, category, country]);
    
    useEffect(() => {
      fetchItems();
    }, [query, category, country]);

  
  const fetchItems = async () => {
      try {
        const params = {
          search: query,
          category: category,
          country: country
        };
        const response = await axios.get('http://127.0.0.1:8000/product_api/products/', { params });
        setproducts(response.data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

 useEffect(()=>{
        axios.get('http://localhost:8080/cart_api/carts/?format=json')
            .then((res)=>{
                console.log('cart data',res.data)
               setcart(res.data)
        })
            .catch(() => {
            setError(true);
          })

        },[]);

        


// http://localhost:8080/cart_api/carts/?format=json
    return(
        <>
          <SearchFilter 
            query={query} 
            setQuery={setQuery} 
            category={category} 
            setCategory={setCategory} 
            country={country} 
            setCountry={setCountry} 
      />
        <h1>page of vendors</h1>
         <div
          className=" container bg-light "
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1px",
          }}>
      {products.map((product) => (
                    <Product_component key={product.id} {...product} />
                ))}
      </div>
        </>
    )

}
export default Vendor_p;