import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Row } from "react-bootstrap";

function App() {

  const [results, setResults] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

    useEffect(() => {
      const fetchResults = async () => {
          const fetchedResults = await axios.get('https://gemlux.com/collections/rigging-kits/products.json' )


          setResults(fetchedResults.data)

      }
      fetchResults();
  }, []);
console.log(results)

  // fetch('https://gemlux.com/collections/rigging-kits/products.json')
  //   .then(response => response.json())
  //   .then((data) => console.log(data))
  // const myData = new Headers();
  // const myRequest = new Request('https://gemlux.com/collections/rigging-kits/products.json', {
  //   method: 'GET',
  //   headers: myData,
  //   mode: 'cors',
  //   cache: 'default',
  // });

  // fetch(myRequest)
  //   .then(response => response.blob())
  //   .then(myBlob => {
  //     myImage.src = URL.createObjectURL(myBlob);
  //   });


  // const myHeaders = new Headers();

  // const myRequest = new Request('flowers.jpg', {
  //   method: 'GET',
  //   headers: myHeaders,
  //   mode: 'cors',
  //   cache: 'default',
  // });

  // fetch(myRequest)
  //   .then(response => response.blob())
  //   .then(myBlob => {
  //     myImage.src = URL.createObjectURL(myBlob);
  //   });


  // axios.get('https://gemlux.com/collections/rigging-kits/products.json')
  //   .then(res => setResults(res.data))



  // useEffect(() => {
  //   fetch('https://gemlux.com/collections/rigging-kits/products.json')
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json()
  //       }
  //       throw response
  //     })
  //     .then(data => {
  //       setResults(data)
  //     })
  //     .catch(error => {
  //       console.error("error fetching data", error)
  //       setError(error)
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  // }, [])
  // console.log(results)


  // useEffect(() => {
  //   const url = "https://gemlux.com/collections/rigging-kits/products.json";

  //   const fetchData = async () => {

  //       try {
  //           const response = await fetch(url, {mode: 'cors'});
  //           const data = await response.json();
  //           setResults(data);


  //       } catch (error) {
  //           console.log("error", error);
  //       }
  //   };

  //   fetchData();
  // }, [])
  // console.log(results && results.products.map((x) => x.title))
  //   console.log(results)
  // fetch('https://gemlux.com/collections/rigging-kits/products.json')
  //    .then( response => response.json() )
  //    .then( data => console.log(data) )
  //    useEffect(() => {
  //     // GET request using fetch inside useEffect React hook
  //     fetch('https://gemlux.com/collections/rigging-kits/products.json')
  //         .then(response => response.json())
  //         .then(data => setResults(results.data));

  // // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);
  // console.log(data)

// fetch('https://gemlux.com/collections/rigging-kits/products.json')
  //   .then(response => response.json())
  //   .then((data) => console.log(data))
  return (
    <div className="App">
      <p className="header">Rigging Kits</p>
      {results && results.products.map((x) => {return <h1>{x.title}</h1>})}
  

      <Row className="row" md={3}>
        {results && results.products.slice(0, 3).map((product, i) => {
          return (
            <Col className="container" key={i}>
              <Card className="card mb-4 border-0" style={{ width: "258px", height: "258px" }} key={i}>
                <Card.Img className="image" variant="top" src={product.images[0].src} key={i} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Button className="button" href={"https://google.com"} variant="primary" target="_blank" style={{ width: "250px", height: "33px" }} key={i}>BUY NOW</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div >
  );
}

export default App;
