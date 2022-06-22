import React from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
    // console.log(props);
    const { id } = useParams();
    const data = props.data[id - 1];

    return (
        <div>
            <h2>상세보기</h2>
            <p>{id}</p>
            <img src={data.imgUrl} alt="" />
            <p>{data.title}</p>
            <p>{data.content}</p>
        </div>
    );
};

export default Detail;
