// import React, { useState } from 'react'
// import CommonSection from './../shared/CommonSection'

// import { Container,Row,Col } from 'reactstrap'

// import { useLocation } from 'react-router-dom'
// import { TourCard } from '../shared/TourCard'

// const SearchResultList = () => {

//   const location = useLocation()

//   const [data] = useState(location.state)

//   return (
//     <>
//       <CommonSection title={"Tour Search Result"} />
//       <section>
//         <Container>
//             <Row>
//                 {
//                   data.length === 0? (
//                     <h4 className='text-center'>No tour found</h4>
//                   ) : (
//                     data?.map(tour => (
//                       <Col lg='3' className="mb-4" key={tour._id}>
//                         <TourCard tour={tour} />
//                       </Col>
//                     ))
//                   )
//                 }
//             </Row>
//         </Container>
//       </section>
//     </>
//   )
// }

// export default SearchResultList


import React, { useEffect, useState } from 'react'
import CommonSection from './../shared/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import { TourCard } from '../shared/TourCard'
import { BASE_URL } from '../utils/config'
import Newsletter from './../shared/Newsletter'


const SearchResultList = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get query params from URL
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get('city');
  const distance = queryParams.get('distance');
  const maxGroupSize = queryParams.get('maxGroupSize');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${city}&distance=${distance}&maxGroupSize=${maxGroupSize}`);
        const result = await res.json();
        setData(result.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [city, distance, maxGroupSize]);

  return (
    <>
      <CommonSection title="Tour Search Result" />
      <section>
        <Container>
          <Row>
            {loading ? (
              <h4 className="text-center">Loading...</h4>
            ) : data.length === 0 ? (
              <h4 className="text-center">No tour found</h4>
            ) : (
              data.map(tour => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default SearchResultList;
