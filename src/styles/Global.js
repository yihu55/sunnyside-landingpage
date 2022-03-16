import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./styledComponents";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
    width: 100%;
    padding: 0;
   
}
body{
    //font-family: 'Barlow', sans-serif;
    //font-family: 'Fraunces', serif;
    
    border:1px solid black;
    margin:0;
   
}
/* img{
    max-width: 100%;
} */
h1{
    text-transform:uppercase;
    font-size:42px;
    letter-spacing: 0.5rem;
    text-align: center;
    margin-top:70px;
    
    font-family: ${fonts.frauncesFont};
    font-weight:bolder;
    color:${colors.textColor}
    
}
h2{
    font-family:${fonts.barlowFont};
    font-weight:900;
    font-size:28px;

}
h3{
    font-family:${fonts.frauncesFont};
    color:${colors.veryDarkGrayish};
    font-weight: 900;
}
h4{
    font-family: ${fonts.barlowFont};
    font-weight:900;
    font-size: 28px;
    color:${colors.darkDesaturatedCyan}
}
p{
    font-family:${fonts.barlowFont}; 
    color:${colors.darkGrayish}
}
.thumbnail{
    width:50px;
    height:50px;
    border-radius: 50%;

}
.imageGallery{
    display:flex;
    img{
        width:25%;
    }
}
a{
    text-decoration:none;
    font-family: ${fonts.barlowFont};
    font-weight: 600;
    color:${colors.darkModerateCyan}
}
.icon{
    height:30px;
    width:30px;
    border-radius: 20%;
    margin:15px;
    
  
}
.icons{
    padding-top:80px;
}
.contacts a{
    padding:30px;
    margin:40px;
}

`;
export default GlobalStyles;
