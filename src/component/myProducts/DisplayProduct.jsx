import React from 'react';

class DisplayProduct extends React.Component {
constructor(props) {
    super(props)
    this.state = {
        count: 0
    }
}

decrement = (e) => {
    this.setState({count: this.state.count - 1} )
}
increment = (e) => {
    this.setState({count: this.state.count + 1})
}

render () {
    return(
        <div>
            <div className='pt-5 d-flex justify-content-between m-2 mainDiv'>
            <h1 className="m-4">My Products</h1>
             <div className="d-flex m-4"> 
            <h1>Jack Hanniel</h1>
            <svg
            width="53"
            height="54"
            viewBox="0 0 53 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.5 0C11.872 0 0 12.096 0 27C0 41.904 11.872 54 26.5 54C41.128 54 53 41.904 53 27C53 12.096 41.128 0 26.5 0ZM26.5 8.1C30.899 8.1 34.45 11.718 34.45 16.2C34.45 20.682 30.899 24.3 26.5 24.3C22.101 24.3 18.55 20.682 18.55 16.2C18.55 11.718 22.101 8.1 26.5 8.1ZM26.5 46.44C19.875 46.44 14.0185 42.984 10.6 37.746C10.6795 32.373 21.2 29.43 26.5 29.43C31.7735 29.43 42.3205 32.373 42.4 37.746C38.9815 42.984 33.125 46.44 26.5 46.44Z"
                fill="#320234"
                />
            </svg>
            </div>
        </div>
        <div>

        </div>
        </div>
    )
}
};

export default DisplayProduct;