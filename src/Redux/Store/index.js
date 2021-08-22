import { configureStore } from "@reduxjs/toolkit";
import OverAllStats from "../Features/OverAllStats";


export default configureStore ({
    reducer:{
        allStatss :  OverAllStats,
      
    }
})