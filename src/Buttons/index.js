import React from "react";
import "./style.css";

const Buttons = (tasks) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__button">
                    {tasks.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;