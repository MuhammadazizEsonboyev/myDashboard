import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ClassIcon from '@mui/icons-material/Class';

const int = (iconName) =>   {
    const icons = {
        "/": <HomeIcon  sx={{color: "#9FA2B4"}}/>,
        "/product": <CategoryIcon  sx={{color: "#9FA2B4"}}/>,
        "/product-list": <ClassIcon  sx={{color: "#9FA2B4"}}/>,
    };
    return icons[iconName];

}
export default int