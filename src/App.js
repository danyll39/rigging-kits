import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Row } from "react-bootstrap";

function App() {

  const [results, setResults] = useState([])

  useEffect(() => {
    const fetchResults = async () => {
        const fetchedResults = await axios.get("https://gemlux.com/collections/rigging-kits/products.json")

        setResults(fetchedResults.data)
    }
    fetchResults();
}, []);
  console.log(results)
  return (
    <div className="App">
      <p className="header">Rigging Kits</p>
      <Row className="row" md={3}>
        {results.products.slice(0, 3).map((product, i) => {
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
          )})}
      </Row>
    </div >
  );
}

export default App;
