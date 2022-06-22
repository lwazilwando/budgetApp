import React,{useState} from "react"
import App from "../App"
import "../css/add.css"

import {db} from '../config/firebase';

import {addDoc, collection} from 'firebase/firestore'


function AddItem(props){





    const [amount,setAmount]= useState('')
    const[item,setItem]=useState("");
    const[transactionType, setTransactionType]=useState("");

    
   


    const add = (()=>{

        const collectionRef = collection(db, "transaction");

        const transaction = {
            item:item,
            amount:amount,
            transactionType:transactionType,
        };

        addDoc(collectionRef, transaction).then(()=>{
            alert("added successfully")
        }).catch((err)=>{
            console.log(err);
        })

        props.add(amount,item,transactionType);
    })

    return(
        <div>
            <h1 style={{paddingTop:"5px"}}>Add Transactions</h1>
            <input placeholder="Enter item" onChange={(e)=> setItem(e.target.value)} />{" "}<br/><br/>
            <input placeholder="Enter amount" onChange={(e)=> setAmount(e.target.value)} />{" "}<br/><br/>
            
            <select onChange={(e)=> setTransactionType(e.target.value)}>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>{" "}<br/><br/>
            <button id="btn" onClick={add}>ADD</button>
        </div>
    )
}

export default AddItem;