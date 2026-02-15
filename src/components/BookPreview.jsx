import { useEffect, useState } from "react";
import Preview from "../components/Preview"; 
import "../styles/App.scss";

function BookPreview() {
const [bookData, setBookData]= useState({});

useEffect(()=> {
const saved= localStorage.getItem("myBook");
if (saved) {
    setBookData(JSON.parse(saved)); 
}
}, []);
 

return (
<div className="preview-name"> 
<Preview bookData={bookData}/>
</div>
);
}

export default BookPreview; 