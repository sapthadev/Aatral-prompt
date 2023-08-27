import React, { useState } from "react";

import "./style.css";

const LeftPanel = ({triggerNewRequest}) => {

    const [isLeftTabActive, setIsLeftTabActive] = useState(true);
    const [chatMessages, setChatMessages] = useState([]);
    const [typedMessage,setTypedMessage] = useState('');

    const handleTabButtonClick = () => {
        setIsLeftTabActive((prev) => !prev)
    }

    const handleOnChange = (e) => setTypedMessage(e.target.value);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setChatMessages(prev => [...prev,typedMessage]);
            triggerNewRequest(typedMessage);
            setTypedMessage("");
        }
      };
    

    const renderFilterFields = () => (
        <div className="filter-container">
            <div className="filter-field">
                <label>Domain Name</label>
                <input type="text" className='searchfield' name="search" placeholder="Search for companies,contacts,etc." />
            </div>

            <div className="filter-field">
                <label>Company Name</label>
                <input type="text" className='searchfield' name="search" placeholder="Enter country name" />
            </div>

            <div className="filter-field">
                <label>Location</label>
                <input type="text" className='searchfield' name="search" placeholder="Country, State or City" />
            </div>
        </div>
    );

    const renderChatWidget = () => (
        <div className="chat-widget">
            <div className="chat-messages">
                {
                    chatMessages.map((message, index) => (
                        <p className="bubble">{message}</p>
                    ))
                }

            </div>
            <input type="text" value={typedMessage} onChange={handleOnChange} onKeyDown={handleKeyPress} className='searchfield chat-input' name="search" placeholder="Type your filter" />
        </div>
    );

    return (
        <div className="left-panel">
            <div className="tab-container">
                <button onClick={handleTabButtonClick} className={`tab-button left ${isLeftTabActive && "tab-active"}`}>Select filters</button>
                <button onClick={handleTabButtonClick} className={`tab-button right ${!isLeftTabActive && "tab-active"}`}>Filter by chat</button>
            </div>
            <div className="tab-content">
                {isLeftTabActive && renderFilterFields()}
                {!isLeftTabActive && renderChatWidget()}
            </div>
        </div>
    )
}

export default LeftPanel;