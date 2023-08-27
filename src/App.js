import React, {useState,useEffect} from 'react';
import fetchApi from './api';
import Header from "./components/header";
import TitleTab from "./components/TitleTab";
import LeftPanel from "./components/leftPanel";
import MainPanel from "./components/mainPanel";
import './App.css';

function App() {

  useEffect(() => {
    const fetchSomeData = async () => {
      try {
        const result = await fetchApi('https://dummyjson.com/products');

        const columnsData = [
            {
                name: 'Brand',
                selector: row => row.brand,
                sortable:true
            },
            {
                name: 'Category',
                selector: row => row.category,
                sortable:true
            },{
                name: 'Description',
                selector: row => row.description,
                sortable:true
            },{
                name: 'Discount Percentage',
                selector: row => row.discountPercentage,
                sortable:true
            },{
                name: 'Price',
                selector: row => row.price,
                sortable:true
            },{
                name: 'Rating',
                selector: row => row.rating,
                sortable:true
            },{
                name:"Stock",
                selector: row => row.stock,
                sortable:true
            },{
                name:"title",
                selector: row => row.title,
                sortable:true
            }
        ];
        setColumns(columnsData);
        setData(result.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSomeData();
  }, []);

  const [columns,setColumns] = useState([]);
  const [data,setData] = useState([]);
  const handleNewRequest = async (keyValue) => {
    try {
      const result = await fetchApi(`https://dummyjson.com/products/${keyValue}`);
      setData([result]);
    } catch (error) {
      console.error('Error adding data:', error);
    }
  }

  return (
    <div className="App">
      <Header />
      <TitleTab />
      <div className="panel-container">
        <LeftPanel triggerNewRequest={handleNewRequest} />
        <MainPanel columns={columns} data={data}/>
      </div>
    </div>
  );
}

export default App;
