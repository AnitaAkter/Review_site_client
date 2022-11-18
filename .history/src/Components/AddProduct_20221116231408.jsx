
import swal from 'sweetalert';
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";


const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const handelAddItem = (e) => {
        e.preventDefault();
        const name = user?.displayName;
        const email = user.email;
        const productName = e.target.productName.value;
        const quantity = parseInt(e.target.quantity.value);
        const pricePerItem = parseFloat(e.target.pricePerItem.value);
        const supplierName = e.target.supplierName.value;
        const description = e.target.description.value;
        const imgLink = e.target.imgLink.value;

        const item = {
            name,
            email,
            productName,
            quantity,
            pricePerItem,
            supplierName,
            description,
            imgLink,
        };
        console.log(item);

        // send data to the server
        fetch("https://newserver-mu.vercel.app/add", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(item),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                swal("Item Added!");
            });

        e.target.reset();
    };
    return (
        <section className="p-6 bg-gray-600 text-gray-50">
            <form onSubmit={handelAddItem} action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Add Your Services</p>
                        <p className="text-xs">Are You an Expert on a specific Field? Join with Us. </p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label for="title" className="text-sm">Product Name</label>
                            <input id="title" name='productName' type="text" required placeholder="Product Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-600" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="quantity" className="text-sm">Quantity</label>
                            <input id="title" name='quantity' type="text" placeholder="quantity" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-600" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="supplierName" className="text-sm">Supplier Name</label>
                            <input id="supplierName" name='supplierName' type="text" placeholder="Supplier Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-600" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="imgLink" className="text-sm">Image Link</label>
                            <input id="imgLink" type="text" name='imgLink' required placeholder="https://... (Products's Image Link)" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-600" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="pricePerItem" className="text-sm">Price Per Item</label>
                            <input id="pricePerItem" type="text" name='pricePerItem' required placeholder="Enter Your Product Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-600" />
                        </div>
                        <div className="col-span-full">
                            <label for="description" className="text-sm">Description</label>
                            <textarea id="description" name='description' required placeholder="Your Product description" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-600"></textarea>
                        </div>
                        <div className="text-right">
                            <button className="py-2 px-6 btn btn-primary text-white font-bold">Add</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddProduct;


