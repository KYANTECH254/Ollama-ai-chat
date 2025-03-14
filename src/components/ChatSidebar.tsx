"use client"

import Link from "next/link";

type Chat = {
    name: string;
    id: number;
    url: string;
    content?: string;
    createdAt?: string;
}

const ChatSidebar = () => {
    const chats: Chat[] = [
        {
            name: "Hello greeting Hello what may i do for you",
            id: 1,
            url: '3bb34-34bnb-345n34-ertbe',
            content: "Hello what may i do for you",
            createdAt: '',
        },
        {
            name: "How to build an ai using python",
            id: 2,
            url: '3bb34-34bnsd-345n34-ertbe',
            content: "Hello what may i do for you",
            createdAt: '',
        }
    ]
    return (
        <div className="chat-sidebar">
            <div className="flex flex-row items-center gap-2 justify-between">
                <h2 className="text-lg font-semibold mb-4 mt-4">My Chats</h2>
                <div title="New Chat" className="text-xl border-2 cursor-pointer border-white p-1 w-6 h-6 font-bold flex items-center justify-center rounded-md hover:bg-white/20">+</div> 
            </div>


            <ul className="flex flex-col gap-2">
                {chats.length > 0 ? (chats.map(chat => (
                    <Link key={chat.id} href={`/?chat=${chat.url}`}>
                        <li className="h-10 w-full p-2 flex items-center bg-gray-500/30 rounded-md cursor-pointer">
                            <div className="text-sm truncate">{chat.name}</div>
                        </li>
                    </Link>
                ))) : (
                    <div className="text-sm">No chats available</div>
                )}

            </ul>
        </div>
    );
};

export default ChatSidebar;