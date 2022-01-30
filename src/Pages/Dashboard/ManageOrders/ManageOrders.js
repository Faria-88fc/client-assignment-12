import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("");
    const handleStatus = (e) => {
        setStatus(e.target.value);
    };

    useEffect(() => {
        fetch('https://desolate-scrubland-90880.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    })

    const handleUpdate = (id) => {
        fetch(`https://desolate-scrubland-90880.herokuapp.com/updatestatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status })
        })

    }
    return (
        <div className='container '>
            <table className="table table-dark table-hover table-responsive-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Order Id</th>
                        <th>Order Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((od, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{od?.name}</td>
                            <td>{od?.email}</td>
                            <td>{od?._id}</td>
                            {/* <td>{od?.status}</td> */}
                            <td><input onChange={handleStatus} type="text" defaultValue={od?.status} /></td>
                            <td><button onClick={() => handleUpdate(od?._id)} className='btn btn-success border-0 '>update</button></td>
                        </tr>
                    </tbody>
                )
                )}

            </table>
        </div>
    );
};

export default ManageOrders;