import React, { useEffect, useState } from "react";
import axios from "axios";
import Order from "../../components/Order";
import "./editItemStyle.css";

export default function EditItem(props) {
    const [title, setTitle] = useState(" ");
    const [price, setPrice] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(" ");
    const [thumbnail, setThumbnail] = useState(0);
    const [itemOrders, setItemOrders] = useState([]);


    useEffect(() => {
        getItemData();
    }, []);

    useEffect(() => {
        if (thumbnail > images.length - 1) {
            setThumbnail(0);
        }
    }, [thumbnail, images]);

    async function getItemData() {
        try {
            const data = await axios.get("/admin/item-data/" + props.match.params.id);
            const { item } = data.data;
            console.log(item);
            setDescription(item.description);
            setTitle(item.title);
            setPrice(item.price);
            setImages(item.images);
            setThumbnail(item.thumbnail);
            setItemOrders(item.orders);
        } catch (error) {
            console.log(error);
        }
    }

    function handleImageSubmit(e) {
        setImages(images => [...images, currentImage]);
        setCurrentImage("");
        setThumbnail(thumbnail + 1);
        // setCurrentImage("");
    }

    function selectThumbnail(i) {
        setThumbnail(images.length - (i + 1))
    }

    function removeImage(i) {
        setImages(images.filter((image, index) => index !== images.length - (i + 1)));
    }

    async function updateItem() {
        try {
            if (title && price && !isNaN(price) && description && images.length > 0 && !isNaN(thumbnail)) {
                const data = await axios.post('/admin/update-item', { item: {title, price, description, images, thumbnail}, id: props.match.params.id });
                console.log(data);
                props.history.push("/admin")
            } else {
                if (!thumbnail) {
                    alert("please select a thubnail image");
                } else if (isNaN(price)) {
                    alert("please make sure price is correct");
                } else {
                    alert("please enter all info")
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id="accountFlex">
            <div id="admin">
                <div id="adminArea">
                    <div id="dashHeader">
                        <div id="dashTitle">
                            Edit Listing
                        </div>
                        <div id="add-itemBtns">
                            <div className="dashButton" id="btnGray" onClick={() => props.history.push("/admin")}>
                                cancel
                            </div>
                            <div className="dashButton" onClick={() => updateItem()}>
                                save
                            </div>
                        </div>
                        <div id="horLine">
                        </div>
                    </div>
                    <div id="adminBody">
                        <div id="createListingFlex">
                            <div id="createListing">
                                <div className="inputTitle">
                                    title
                                </div>
                                <div className="inputArea">
                                    <input placeholder="shirt" className="listingInput" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                                </div>
                                <div className="inputTitle">
                                    price
                                </div>
                                <div className="inputArea">
                                    <input placeholder="100" className="listingInput" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                                </div>
                                <div className="inputTitle">
                                    description
                                </div>
                                <div className="inputArea">
                                    <input placeholder="100% cotton" className="listingInput" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                                </div>
                                <div className="inputTitle">
                                    add image
                                </div>
                                <div className="inputArea">
                                    <input className="listingInput" id="imageInput" value={currentImage} onChange={(e) => setCurrentImage(e.target.value)}></input>
                                    <div id="addImage" onClick={() => handleImageSubmit()}>
                                        {">"}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div id="imagesArea">
                            {images.length > 0 ? images.map((img, index) => {
                                return <div onClick={() => selectThumbnail(index)} className="hoverImage"><div className="thumbNum">{index + 1}</div><div className="thumbLabel">{thumbnail === images.length - (index + 1) ? "thumbnail" : ""}</div><svg onClick={() => removeImage(index)} className="trashImage" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 7.75L7.59115 17.4233C7.68102 18.4568 8.54622 19.25 9.58363 19.25H14.4164C15.4538 19.25 16.319 18.4568 16.4088 17.4233L17.25 7.75"></path>
                                    <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 7.5V6.75C9.75 5.64543 10.6454 4.75 11.75 4.75H12.25C13.3546 4.75 14.25 5.64543 14.25 6.75V7.5"></path>
                                    <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 7.75H19"></path>
                                </svg>
                                    <img id={thumbnail === images.length - (index + 1) ? "thumbnailImage" : ""} src={images[images.length - (index + 1)]} className="imageSample"></img></div>
                            }) : <div id="addImageMessage">please add an image</div>}
                        </div>
                        {/* <div id="itemOrders">
                            {itemOrders.map((order) => {
                                return <Order 
                                    amountPayed={order.amountPayed}
                                    createdAt={order.createdAt}
                                    payerName={order.payerName}
                                    orderId={order.orderId}
                                    itemName={title}
                                    key={order.orderId}
                                />
                            })}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}