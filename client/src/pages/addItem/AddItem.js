import React, { useState } from "react";
import axios from "axios";
import "./addItemStyle.css";

export default function AddItem() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);

    async function submitItem() {
        try {
            const data = await axios.post('/admin/add-item', { title, price, description, images: [{ src: "https://cdn.shopify.com/s/files/1/1672/7095/products/CSH01E2_720x.png?v=1661039920", order: 0 }] });
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id="accountFlex">
            <div id="admin">
                <div id="adminArea">
                    <div>
                        add item
                    </div>
                    <div>
                        title
                    </div>
                    <div>
                        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    </div>
                    <div>
                        price
                    </div>
                    <div>
                        <input value={price} onChange={(e) => setPrice(e.target.value)}></input>
                    </div>
                    <div>
                        description
                    </div>
                    <div>
                        <input value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    </div>
                    <div>
                        images
                    </div>
                    <div>
                        <input></input>
                    </div>

                    <div id="submitItem" onClick={() => submitItem()}>
                        create
                    </div>
                </div>
            </div>
        </div>
    );
}