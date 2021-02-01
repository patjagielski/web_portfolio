import React from 'react';
import { connect } from 'react-redux';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Portfolio({getUid, getLang, getLiterals}){

    // const [userCV, setUserCV] = useState('');
    

    return(
    <div  className="content-container">
        <h1> {getLang === "en" ? (getLiterals.en.FL_contact_me):( getLang === "pl" ? (getLiterals.pl.FL_contact_me):(getLiterals.ru.FL_contact_me))}  </h1>
        <div className="content-container__portfolio">
        
        <Document
        file= {{url:`http://localhost:5000/startGetCV?id=${getUid}`}}
        onLoadSuccess={(()=>{
            console.log('success');
        })}
      >
        <Page pageNumber={1} />
      </Document>
      </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    getUid: state.auth.uid,
    getLiterals: state.literals,
    getLang: state.lang.lang
});

export default connect(mapStateToProps)(Portfolio);