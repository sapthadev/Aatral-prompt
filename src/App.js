import React, { useState, useEffect } from 'react';
import fetchApi from './api';
import Header from "./components/header";
import TitleTab from "./components/TitleTab";
import LeftPanel from "./components/leftPanel";
import MainPanel from "./components/mainPanel";
import './App.css';

function App() {

  useEffect(() => {
    fetchSomeData();
  }, []);

  const columnsData = [
    {
      name: 'Company Name',
      selector: row => row.companyName,
      sortable: true
    },
    {
      name: 'Company Industry',
      selector: row => row.companyIndustry,
      sortable: true
    }, {
      name: 'Company Revenue',
      selector: row => row.companyRevenue,
      sortable: true
    }, {
      name: 'Company Employees',
      selector: row => row.companyEmployees,
      sortable: true
    }, {
      name: 'Company Country',
      selector: row => row.companyCountry,
      sortable: true
    }, {
      name: 'Created Date',
      selector: row => row.createdAt,
      sortable: true
    }, {
      name: "Intent Level",
      selector: row => row.intentLevel,
      sortable: true
    }, {
      name: "URL Visited",
      selector: row => row.urlVisited,
      sortable: true
    }, {
      name: "IP Location",
      selector: row => row.ipLocation,
      sortable: true
    }, {
      name: "IP Type",
      selector: row => row.ipType,
      sortable: true
    }
  ];

  // const [columns, setColumns] = useState(columnsData);
  const [data, setData] = useState([]);
  const greetingMessage = { text: "Hello there, please type your message", style:"bubble" };
  const [chatMessages, setChatMessages] = useState([greetingMessage]);

  const fetchSomeData = async () => {
    try {
      const result = await fetchApi('http://localhost:4000/companiesData', 'post', {
        userText: ''
      });


      // setColumns(columnsData);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateChatConversation = (text,style) => {
    setChatMessages(prev => [...prev,{text,style}]);
  }

  const handleNewRequest = async (chatSentance) => {
    updateChatConversation(chatSentance,"bubble-sent");
    try {
      const result = await fetchApi(`http://localhost:4000/companiesData`, 'post', {
        userText: chatSentance
      });
      setData(result);
      updateChatConversation("Your filter is applied successfully","bubble");
    } catch (error) {
      updateChatConversation("Appologies, something went wrong","bubble");
      console.error('Error adding data:', error);
    }
  }

  const handleReset = () => {
    fetchSomeData();
    setChatMessages([greetingMessage])
  }

  return (
    <div className="App">
      <Header />
      <TitleTab data={data} onReset={handleReset} />
      <div className="panel-container">
        <LeftPanel chatMessages={chatMessages} triggerNewRequest={handleNewRequest} />
        <MainPanel columns={columnsData} data={data} />
      </div>
    </div>
  );
}

export default App;
