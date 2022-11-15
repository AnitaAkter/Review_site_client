import React, { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../Context/AuthProvider";


const AddReview = ({ productDetails }) => {
    const { user } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewUser = user?.displayName;
        const reviewerImage = user?.photoURL;

        const review = {
            title: e.target.title.value,
            details: e.target.details.value,
            serviceID: e.target.serviceID.value,
            reviewUser,
            reviewerImage,
        };

        fetch("https:/newserver-mu.vercel.app/addreview", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    swal("Thanks for your Precious Review");
                } else {
                    swal(data.error);
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <div className="mr-5">
            <section className="p-6 bg-gray-600 text-gray-50">
                <form
                    onSubmit={handleSubmit}
                    action=""
                    className="container flex flex-col mx-auto  ng-untouched ng-pristine ng-valid"
                >
                    <p className="font-medium text-md">How was your experience?</p>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">
                                Product Title
                            </label>

                            <input
                                defaultValue={productDetails?.productName}
                                id="title"
                                name="title"
                                type="text"
                                required
                                placeholder="Product Title"
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-500"
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="title" className="text-sm">
                                Service ID
                            </label>

                            <input
                                defaultValue={productDetails._id}
                                disabled
                                id="serviceID"
                                name="serviceID"
                                type="text"
                                required
                                placeholder="serviceID"
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-500"
                            />
                        </div>
                        <div className="col-span-full">
                            <label for="details" className="text-sm">
                                Review
                            </label>
                            <textarea
                                id="details"
                                name="details"
                                required
                                placeholder="Your Service Details"
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-500"
                            ></textarea>
                        </div>
                        <div className="text-right">
                            <button className="py-2 px-6 btn btn-primary text-white font-bold">
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddReview;