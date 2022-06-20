import Component from "react";
import AddItem from "./addItem";
import DispalyTransaction from "./DispalyTransaction";


function Home(props)
{

    return(
        <div className="container">
            <DispalyTransaction list={props.list} />
            <AddItem add={props.add} />

        </div>
    );
}

export default Home;