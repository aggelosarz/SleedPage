import React from "react";
import {useNavigate} from "react-router-dom"

function Results(){

    const navigate = useNavigate();
    return(
        <div className="results">
            <div className="subresults">
            <h3 className="title">Υποβληθέντα στοιχεια</h3>
             <div className="stoixeia">
                <p className="span">{localStorage.getItem("onoma")}</p>
                <p className="span">{localStorage.getItem("epitheto")}</p>
                <p className="span">{localStorage.getItem("email")}</p>
                <p className="span">{localStorage.getItem("paragelia")}</p>
             </div>

             <div className="message">
               <h3 className="telikoMnm">Μήνυμα</h3>
                <p className="textarea2">{localStorage.getItem("minima")}</p>
                </div>

                <button className="epistrofi" onClick={() =>navigate("/")}>Επιστροφή</button>
            </div>

            <footer className="footer2">
               
                    
               <p>© 2022 All rights reserved.</p>
               <p>Designed & Developed by Sleed</p>
               <div className="ab">
               <p className="underline">Terms of Use</p>
               <p className="span2">|</p>
               <p className="underline">Privacy Policy</p>
             
           </div>

       </footer>
            
        </div>
    )
}

export default Results;