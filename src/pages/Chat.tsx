import { useState } from "react";
import './page_css/Chat.css';
import * as React from "react";

function Chat() {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.trim() === "") return;
        setMessages([...messages, input]);
        setInput("");
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Chat header */}
            <div className="bg-indigo-600 text-white px-4 py-3 text-lg font-bold shadow">
                Messenger Clone
            </div>

            {/* Message area */}
            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className="bg-white px-4 py-2 rounded-lg shadow max-w-md self-end"
                    >
                        {msg}
                    </div>
                ))}
            </div>

            {/* Message input */}
            <form onSubmit={sendMessage} className="flex p-4 border-t bg-white">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 border rounded-l-md px-4 py-2 outline-none"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-500"
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default Chat;