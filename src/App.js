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
        const result = await fetchApi('http://localhost:4000/companiesData', 'post', {
          userText: ''
        });

        const columnsData = [
            {
                name: 'Company Name',
                selector: row => row.companyName,
                sortable:true
            },
            {
                name: 'Company Industry',
                selector: row => row.companyIndustry,
                sortable:true
            },{
                name: 'Company Revenue',
                selector: row => row.companyRevenue,
                sortable:true
            },{
                name: 'Company Employees',
                selector: row => row.companyEmployees,
                sortable:true
            },{
                name: 'Company Country',
                selector: row => row.companyCountry,
                sortable:true
            },{
                name: 'Created Date',
                selector: row => row.createdAtDate,
                sortable:true
            },{
                name:"Intent Level",
                selector: row => row.intentLevel,
                sortable:true
            },{
                name:"URL Visited",
                selector: row => row.urlVisited,
                sortable:true
            },{
              name:"IP Location",
              selector: row => row.ipLocation,
              sortable:true
          },{
            name:"IP Type",
            selector: row => row.ipType,
            sortable:true
        }
        ];
        setColumns(columnsData);
        setData(result);
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
      const result = await fetchApi(`http://localhost:4000/companiesData`, 'post', {
        userText: keyValue
      });
      setData(result);
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
