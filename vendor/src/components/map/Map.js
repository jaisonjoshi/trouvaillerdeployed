


const Map = ({googlelocation})=> {
    return(
            <div className="App">
              <iframe
              src={googlelocation}
                width="600"
                height="400"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                className="hidden md:block"
              ></iframe>
               <iframe
              src={googlelocation}
              width="500"
                height="350"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                className="hidden sm:block md:hidden "
              ></iframe>
               <iframe
              src={googlelocation}
              width="280"
                height="250"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                className="block sm:hidden "
              ></iframe>
            </div>
    )
}


export default Map