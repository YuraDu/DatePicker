import React, { useState } from "react";
import { useSelector } from "react-redux";
import Options from "./Options";

export default function Select() {
    const [opened, setOpened] = useState(false);

    return (
        <div
            name="departureMonth"
            id="departureMonth"
            className={opened ? "month__select" : "month__select--closed"}
            onClick={() => setOpened(!opened)}
        >
            <div className="select__icon">&#8964;</div>
            <div className="select__title">2022 August</div>
            <Options opened={opened} />
        </div>
    );
}
