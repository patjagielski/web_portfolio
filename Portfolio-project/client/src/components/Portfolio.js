import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Axios from "axios";
import { setDashboardCV } from '../actions/dashboardInfo';
import ImageLoader from 'react-image-file';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Portfolio({getUid}){

    // const [userCV, setUserCV] = useState('');
    
        

    return(
    <div>
        <h1> This here is my Portfolio </h1>
        <Document
        file= {{url:`http://localhost:5000/startGetCV?id=${getUid}`}}
        onLoadSuccess={(()=>{
            console.log('success');
        })}
      >
        <Page pageNumber={1} />
      </Document>
        
    </div>
    );
};

const mapStateToProps = (state) => ({
    getUid: () => state.auth.uid
});

export default connect(mapStateToProps)(Portfolio);