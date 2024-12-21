"use client";

import React, { useState } from "react";

const ChatNot = () => {
  const [userMessage, setUserMessage] = useState(""); // State for user message
  const [chatHistory, setChatHistory] = useState<string[]>([]); // State to store chat history
  const [suggestions, setSuggestions] = useState<string[]>([]); // State for suggestions

  // List of possible suggestions based on keywords
  const suggestionList = [
    "gadgets",
    "appliance",
    "furniture",
    "jewelry",
    "recommend",
    "budget",
    "compare",
    "reviews",
    "shipping",
    "returns"
  ];

  // Handle sending message
  const handleSendMessage = () => {
    if (userMessage.trim() !== "") {
      setChatHistory((prev) => [...prev, `You: ${userMessage}`]);
      setUserMessage(""); // Clear input field after sending
      setSuggestions([]); // Clear suggestions after sending

      // Simulate chatbot response based on user message
      setTimeout(() => {
        let aiResponse = "AI: Hello, how can I assist you today?";
        
        if (userMessage.toLowerCase().includes("gadgets")) {
          aiResponse = "AI: I can help you choose the perfect gadget! What type of gadget are you looking for?";
        } else if (userMessage.toLowerCase().includes("appliance")) {
          aiResponse = "AI: Need help with appliances? I can guide you to the best options. What are you interested in?";
        } else if (userMessage.toLowerCase().includes("furniture")) {
          aiResponse = "AI: Let me assist you in finding the best furniture for your space. Do you have a particular style in mind?";
        } else if (userMessage.toLowerCase().includes("jewelry")) {
          aiResponse = "AI: I can help you find the perfect piece of jewelry. What type of jewelry are you looking for?";
        } else if (userMessage.toLowerCase().includes("recommend")) {
          aiResponse = "AI: I can recommend products based on your preferences. What kind of items are you looking for today?";
        } else if (userMessage.toLowerCase().includes("budget")) {
          aiResponse = "AI: I can help you stay within your budget. What's your price range for the item you're interested in?";
        } else if (userMessage.toLowerCase().includes("compare")) {
          aiResponse = "AI: I can compare products for you. Let me know the items you're deciding between!";
        } else if (userMessage.toLowerCase().includes("reviews")) {
          aiResponse = "AI: I can provide reviews for any product you're interested in. Just tell me which product!";
        } else if (userMessage.toLowerCase().includes("shipping")) {
          aiResponse = "AI: Need information about shipping? I can help with delivery times and shipping costs. Where are you located?";
        } else if (userMessage.toLowerCase().includes("returns")) {
          aiResponse = "AI: I can guide you through the return process. Let me know the product you'd like to return.";
        }

        setChatHistory((prev) => [...prev, aiResponse]);
      }, 500);
    }
  };

  // Handle input change and show suggestions
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setUserMessage(inputValue);

    // Display suggestions based on user input
    const filteredSuggestions = suggestionList.filter((suggestion) =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  // Handle Enter key press for sending message
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-green-50 text-white">
      {/* Header Section */}
      <div className="w-full p-4 bg-secondary flex justify-between items-center text-white border-b-2 border-green-800">
        <div className="text-xl text-dark font-semibold">Wingman - AI Shopping Assistant</div>
        <div className="flex items-center gap-2">
          <div className="text-sm text-dark font-semibold">User</div>
          <div className="w-8 h-8 rounded-full bg-primary flex justify-center items-center text-white">
            U
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-grow bg-grey-500 p-12 rounded-b-lg shadow-lg max-h-[700px] overflow-y-auto bg-green-100">
        <div className="flex-grow space-y-4 overflow-y-auto px-4 py-2">
          {/* Display chat history */}
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`p-2 ${message.startsWith("You") ? "bg-secondary text-dark w-fit flex justify-end rounded-lg" : "bg-primary text-secondary w-fit flex justify-start rounded-lg"}`}
            >
              <div className={`${message.startsWith("You") ? "text-right" : "text-left"}`}>
                {message}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input and Send Button */}
      <div className="flex items-center mt-4 w-full max-w-3xl mx-auto bg-white p-3 rounded-lg shadow-md">
        <div className="relative w-full">
          <input
            type="text"
            value={userMessage}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className="w-full p-3 border border-grey-300 rounded-lg text-primary focus:outline-none"
          />
          <div className="absolute w-full bg-white shadow-md mt-1 rounded-lg">
            {suggestions.length > 0 && (
              <ul className="max-h-32 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="p-2 text-sm text-dark cursor-pointer bg-gray-100 hover:bg-gray-200" onClick={() => setUserMessage(suggestion)}>
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <button
          onClick={handleSendMessage}
          className="bg-primary text-white p-3 rounded-lg ml-2 hover:bg-green-950 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatNot;
