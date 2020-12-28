import style from 'styled-components'

export const FooterStyled = style.footer`
.search {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
  
  .searchTerm {
    width: 80%;
    border-right: none;
    padding: 8px;
    height: 20px;
    border-radius: 30px 30px 30px 30px ;
    outline: none;
    color: #9DBFAF;
    border: none;
    top: 300px;
  }
  
  .searchTerm:focus{
    color: #00B4CC;
  }
  
  .searchButton {
    position: absolute;
    width: 2.6rem;
    height: 2.3rem;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items:center;
    background: rgba(0, 0, 0, 0.95);
    text-align: center;
    border: none;
    color: #fff;
    border-radius: 50px 45px 45px  50px;;
    cursor: pointer;
    font-size: 20px;
  }

  
  /*Resize the wrap to see the search bar change!*/
  .wrap{
    width: 100%;
  margin-top: 30px;
  position: sticky;
  }

.Footer .Search .SearchBtn {
    width:5.5rem;
    height:5rem;
    background-color: #590a5b;
    border-radius: 5rem;
    color: white;
    position: absolute;
    right: 0;
    top: 0;
    display: grid;
    place-items: center;
}

.Footer .Nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    list-style: none;
}

.Footer .Nav a {
    color: inherit;
    text-decoration: none;
}

.Footer .Nav a:hover {
    text-decoration: underline;
}

.Footer .Socials {
}

.Footer .Socials > img {
    margin-top: 2.5rem;
    margin-left: 7rem;
}
.Footer .Socials .Nav {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
}

// medium screen

@media (min-width: 601px) and (max-width: 1024px) {
    .Footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .Footer .Search {
        padding: 2rem;
        font-weight: bold;
        border-radius: 5rem;
        background: #ffffff;
        box-shadow: 0px 4px 5px rgba(79, 0, 81, 0.1);
        position: relative;
    }
    .Footer .Search input {
        margin-bottom:30px
    }

    .Footer .Search input[type='text'] {
        width: 100%;
        border:none;
    }

    .Footer .Search input[placeholder] {
        font-size: 1.6rem;
        color: #878787;
        font-weight: bold;
    }

    .Footer .Search .SearchBtn {
        width: 6.4rem;
        height: 5.2rem;
        background-color: #590a5b;
        border-radius: 5rem;
        color: white;
        position: absolute;
        right: 0;
        top: 0;
        display: grid;
        place-items: center;
    }
    .Footer .Socials {
    }

    .Footer .Socials > img {
        margin-top: 2.5rem;
        margin-left: 2rem;
    }
    .Footer .Socials .Nav {
        margin-top: 1.5rem;
        display: flex;
        flex-direction: row;
    }

    .Footer .Nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        list-style: none;
    }

    .Footer .Nav a {
        color: inherit;
        text-decoration: none;
    }

    .Footer .Nav a:hover {
        text-decoration: underline;
    }
}

//large screens
@media (min-width: 1025px) {
    .Footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .Footer .Search {
        // width: 38rem;
        // width: 90%;
        height: 10px;
        padding: 1rem;
        font-weight: bold;
        border-radius: 5rem;
        background: #ffffff;
        box-shadow: 0px 4px 5px rgba(79, 0, 81, 0.1);
        position: relative;
    }

    .Footer .Search input[type='text'] {
        border: none;
    }

    .Footer .Search input[placeholder] {
        color: #878787;
        font-weight: bold;
        display;flex;
        justify-content:center;
    }

    .Footer .Search .SearchBtn {
        width: 3.4rem;
        height: 3.2rem;
        background-color: #590a5b;
        border-radius: 5rem;
        color: white;
        position: absolute;
        right: 0;
        top: 0;
        display: grid;
        place-items: center;
    }

    .Footer .Socials {
    }

    .Footer .Socials > img {
        margin-top: 2.5rem ;
        margin-left: 2rem;
    }

    .Footer .Socials .Nav {
        margin-top: 1.5rem;
        display: flex;
        flex-direction: row;
        justify-content:center;
        
    }

    .Footer .Nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        list-style: none;
    }

    .Footer .Nav a {
        color: inherit;
        text-decoration: none;
    }

    .Footer .Nav a:hover {
        text-decoration: underline;
    }

`;