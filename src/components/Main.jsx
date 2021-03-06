import React, { useEffect, useRef, useState } from "react";
import "./../style/main.css";
import "./../style/container.css";

const Main = () => {
    const listData = ["content01", "content02", "content03", "content04"];
    listData.unshift(listData[listData.length - 1]); // listData의 첫 번째 요소로 'content04'를 넣는다
    const [num, setNum] = useState(0);
    const checkRef = useRef("next");

    const fncClassAdd = (i) => {
        const on = i === num ? " on" : " on";
        const view = "view_";
        const textNum = "00000" + (i + 1);
        const viewText = view + textNum.slice(-2);

        return viewText + on;
    };

    const initialStyle = {
        position: "relative",
        left: "-100%",
        marginLeft: `${num * -100}%`,
    };

    const [slideStyle, setSlideStyle] = useState(initialStyle);

    const fncPrevStyle = () => {
        setSlideStyle({
            ...initialStyle,
            transition: num !== 3 ? "margin 500ms ease" : "none",
            animation: num === 3 ? "lastSlide 500ms ease 1" : "none",
        });
    };
    const fncNextStyle = () => {
        setSlideStyle({
            ...initialStyle,
            transition: num !== 0 ? "margin 500ms ease" : "none",
            animation: num === 0 ? "firstSlide 500ms ease 1" : "none",
        });
    };

    const fncPrevSlide = () => {
        setNum(num <= 0 ? 3 : num - 1);
        checkRef.current = "prev";
    };
    const fncNextSlide = () => {
        setNum(num >= 3 ? 0 : num + 1);
        checkRef.current = "next";
    };

    // 이후 버튼 클릭 -> fncNextSlide 호출
    // num => +1, check => next
    // useEffect를 사용해서 num이 변할 때마다 체크 상태 감지
    // next가 들어가 있으면 fncNextStyle 함수를 호출
    useEffect(() => {
        checkRef.current === "next" ? fncNextStyle() : fncPrevStyle();
    }, [num]);

    return (
        <div className="mainContainer">
            <h2>메인페이지</h2>
            <div className="viewBox">
                <div className="slideBtn">
                    <button type="button" onClick={fncPrevSlide}>
                        이전
                    </button>
                    <button type="button" onClick={fncNextSlide}>
                        이후
                    </button>
                </div>
            </div>
            <div className="viewContents">
                <ul style={slideStyle}>
                    {listData.map((list, index) => (
                        <li key={index} className={fncClassAdd(index)}>
                            {list}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Main;
