import React from "react";
import {useNavigate} from "react-router-dom"

function Main() {

    const[click,setClick] = React.useState(false);
    const navigate = useNavigate();

    const clickButton = () => {
        setClick(true);
        if(document.getElementById("onoma").value==="" || document.getElementById("epitheto").value==="" || document.getElementById("email").value==="" || document.getElementById("paragelia").value==="" ) {
            
        }
    }

    const submit = () => {
       
        var firstName=document.getElementById("onoma").value;
        var lastName=document.getElementById("epitheto").value;
        var email=document.getElementById("email").value;
        var paragelia=document.getElementById("paragelia").value;
        var mnm=document.getElementById("minima").value;
        localStorage.setItem("onoma",firstName);
        localStorage.setItem("epitheto",lastName);
        localStorage.setItem("email",email);
        localStorage.setItem("paragelia",paragelia);
        localStorage.setItem("minima",mnm);

        if(firstName!=="" && lastName!=="" && email!=="" && mnm!=="" ) {
            navigate("/results");
            setClick(false);
        }
        else{
            console.log("Ολα τα πεδια ειναι υποχρεωτικα")
       
        }
    }
    return(
        <div >
            {
            
            click===false ? 
            <div className="heroBanner">
                
            <div className="tranparentBox">
              
                    <p className="season2022">SEASON 2022</p>
                    <h2 className="contactUs">Επικοινώνησε μαζί μας</h2>
                    <button onClick={() => setClick(true)}className="submitButton">Συμπλήρωσε τη φόρμα </button>
            
                </div>
            </div> :   <div className="heroBanner2">
                
                </div> }


        {click===false && 
         <div className="main2">
            <div className="submain">
                <h3 className="photoGallery">PHOTO GALLERY</h3>
                <div className="images">
            <img src="images/komitis.png" className="komitis" alt=""/> 
            <img src="images/earth.png" className="earth" alt=""/> 
            </div>
            </div>
               
               <div className="submain1">
               <button onClick={()=>setClick(true)} className="submitButton2">Συμπλήρωσε τη φόρμα </button>
               </div>
        
            </div>   }


{click===false && 
          <div className="main3">
            <img src="images/Group 9.png" className="main3Images" alt=""/> 
            <img src="images/Component.png" className="main3Images" alt=""/> 
          </div>   }

        



{click===false && 
          <div className="footer">
            <div className="footer1">
           <div className="column">
              <p>Τρόποι Παραγγελίας</p>
              <p>Τρόποι Αποστολής</p>
              <p>Επιστροφές & αλλαγές</p>
              <p>Τρόποι Πληρωμής</p>
              <p>Προστασία Δεδομένων</p>
              <p>Όροι Χρήσης</p>
              <p>Ρυθμίσεις & Πολιτική</p>
              <p>Cookies</p>
           </div>

           <div className="column">
           <p>Η Εταιρεία</p>
              <p>Club 9</p>
              <p>Καταστήματα</p>
              <p>Συχνές Ερωτήσεις</p>
              <p>Newsletter Sign Up</p>
              <p>Εταιρική Πολιτική</p>
            </div >

            <div className="column">
            <p>Η Επικοινωνία</p>
              <p>Συνεργάτες</p>
              <p>Κεντρικά Γραφεία</p>
              <p>Θέσεις Εργασίας</p>
            </div>

            </div>
            </div> }


            {click && 
            <div className="form">
                <h2 className="title">Φόρμα Επικοινωνίας</h2>
                <div className="subForm">
                <select>
                    <option>Επικοινωνία με το τμήμα προσωπικού</option>
                </select>

                <div className="inputs">
                   <input className="input" type="text" placeholder="Όνομα*"  id="onoma"></input>
                   <input className="input" type="text" placeholder="Eπώνυμο*"  id="epitheto"></input>
                </div>

                <div className="inputs">
                <input className="input" type="text" placeholder="Email*" id="email"></input>
                   <input className="input" type="text" placeholder="Κωδικός παραγγελίας*"  id="paragelia"></input>
                </div>

                <h4 className="minima">Μήνυμα</h4>
                <input className="textarea" id="minima" placeholder="Γράψε μας..."></input>
                <div className="y">
                <span className="upoxreotika">*Όλα τα πεδία είναι υποχρεωτίκα</span>
                <input className="checkBox" type="checkbox" id="box" name="apodexomai" ></input>
                <label htmlFor="box" className="apodexomai"> Αποδέχομαι τους Όρους Χρήσης</label>
                </div>
                <button onClick={() => submit()} className="ipovoli">Υποβολή</button>
            </div>
            </div> }

            <footer className={click ?"footer2" : "f2"}>
               
                    
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

export default Main;