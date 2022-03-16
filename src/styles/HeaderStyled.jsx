import styled from "styled-components";
import img from "../images/desktop/image-header.jpg";

export const HeaderStyled=styled.header`

background:url(${img}) no-repeat;
background-size:100%;
height:650px;
width:100%;
color:${({theme})=>theme.colors.textColor};

`