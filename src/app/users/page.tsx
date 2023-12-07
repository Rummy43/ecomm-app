"use client";
import { useEffect, useState } from "react"

export default function User(){

    const [userList, setUserList] = useState<any[]>([]);
    const fetchUsersList = () => {
        fetch("http://localhost:8081/api/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUserList(data)
            })
            .catch(error => {
                console.error("Fetch error:", error);
              });
    }
    useEffect(() => {
        fetchUsersList()
    }, [])

    return (
    <>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">User List</h1>
                {userList.length > 0 ? (
                <ul className="space-y-4">
                    {userList.map((user) => (
                    <li
                        key={user.id}
                        className="flex flex-col bg-gray-100 p-4 rounded mb-4"
                    >
                        <h2 className="text-xl font-semibold mb-2">{user.userName}</h2>
                        <p className="text-gray-600">{user.email}</p>
                    </li>
                    ))}
                </ul>
                ) : (
                <p className="text-gray-600">No users found</p>
                )}
            </div>
        </div>
    </>
    )
}