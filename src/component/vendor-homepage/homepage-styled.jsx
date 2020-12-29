import styled from 'styled-components'

export const HomeStyled = styled.section `
    .Background {
        background-image: linear-gradient(180deg, rgba(153, 41, 234, 1) 0%, rgba(88, 8, 251, 0) 100%), url(./img/background.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

   .Vector {    
    margin-top:90px;
    }

   .Header {                    <img src="/img/logo.svg" alt="3reenshop logo" />

    font-family: MADE TOMMY;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    
    color: #FFFFFF;
   }
   
   .Button-div {
     width: 300px;
    height:89px;
    background: #FFFFFF;
    border-radius: 50px;
    font-size: 30px;
    font-weight: 700;
    border: none
   }
   
.input {

    /* Primary / Main */
    border: 1px solid rgba(0, 0, 0, 0.87);
    box-sizing: border-box;
    border-radius: 50px;
    height: 30px;
    margin: 70px;

background: #FEF5FF;

}
.content-div {
    display:flex;
    flex-direction: column;
    width: auto;
    align-items:center;
    justify-content:center;
}
.Button {
    margin:40px;
}

.Footer-div {
    margin: 120px;
}
@media (max-width: 600px) {
    .Button {
        margin: 18px;
    }
    .Footer-div {
        margin: 10px;
    }
}


`