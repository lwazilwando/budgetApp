import React from 'react'

import '../css/display.css'
function DisplayTransaction(props){

    return(
        
        <div>
            {props.list.map((item)=>(
                <div>

                    {item.transactionType == "Expense" ? (

                        <div className="transaction-item">
                        <div>
                            <h4 style={{paddingLeft:'12px',paddingTop:"25px"}}>
                                {item.amount}
                                </h4>
                        </div>
                        <div>
                            <h4 style={{paddingLeft:"290px", paddingTop:"25px"}}>
                                {item.transactionType}
                                </h4>
                        </div>

                            <div className="expense-line"></div>

                        </div> ):
                        
                            (<div className="transaction-item">
                                <div>
                                    <h4 style={{paddingLeft:'12px',paddingTop:"25px"}}>
                                        {item.amount}
                                        </h4>
                                </div>
                                <div>
                                    <h4 style={{paddingLeft:"290px", paddingTop:"25px"}}>
                                        {item.transactionType}
                                        </h4>
                                </div>
                                <div className="income-line"></div>
                            </div>
                            )
                            
                        }
                    
                    
                </div>


            ))}


        </div>


    );




}
export default DisplayTransaction