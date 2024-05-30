import React from "react";
import { useState } from 'react';
import Content from "./Content";


const Text = () =>{
    const [toggl, setToggl] = useState(false);
    return(
        <div className="text-toggl">

            <h1>Hello</h1>
            <p>Welcom</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui deserunt eaque exercitationem et, repellendus laborum quisquam, voluptas saepe distinctio, praesentium vel vitae doloribus ipsum. Pariatur doloremque obcaecati id iste praesentium.
            Quidem facere vel odit dignissimos quaerat. Praesentium, quia? Amet temporibus saepe illo est id? Repudiandae dicta et fugit mollitia, id ullam at earum, quod perspiciatis, officiis repellat possimus nulla aperiam.
            Quam assumenda veritatis minima ullam iusto quis? Delectus, vitae laborum totam aspernatur necessitatibus dolorum earum maxime. Quisquam qui corrupti non magni minus vitae. Ea facere, nihil similique fugit quia in.</p>
            <button onClick={() => setToggl(!toggl)}>
                show more
            </button>
            {toggl && <Content/>}
        </div>
    )
}

export default Text