import React, { useEffect } from "react";
import axios from "axios";
import "./editItemStyle.css";

export default function EditItem(props) {

    useEffect(() => {
        getItemData();
    }, []);

    async function getItemData() {
        try {
            const data = await axios.get("/admin/item-data/" + props.match.params.id);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {props.match.params.id}
        </div>
    );
}