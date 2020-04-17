import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Books = () => {
    const [data, setData] = useState({ books: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:5000/books',
            );
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-10">
                    <h1>Books</h1>
                    <button type="button" className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Add Book</button>
                    <table className="tabl-auto">
                        <thead>
                            <tr>
                                <th class="w-1/2 px-4 py-2" scope="col">Title</th>
                                <th class="w-1/2 px-4 py-2" scope="col">Author</th>
                                <th class="w-1/2 px-4 py-2" scope="col">Read?</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {data.books.map(book => (
                                <tr key={book.index}>
                                    <td >{book.author}</td>
                                    <td>{book.title}</td> <td>
                                        {book.read ?
                                            (<span >Yes</span>) :
                                            (<span >No</span>)
                                        }
                                    </td> <td>
                                        <div className="inline-flex" role="group">
                                            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Update</button>
                                            <button type="button" className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Delete</button>
                                        </div>
                                    </td>
                                </tr>

                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Books
