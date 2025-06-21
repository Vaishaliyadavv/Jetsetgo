import React from 'react'
import { TourCard } from '../../shared/TourCard';
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'

import useFetch from './../../hooks/useFetch.js'
import { BASE_URL } from './../../utils/config.js'



const FeaturedToursList = () => {
  return <>{
    tourData?.map(tour=>(
        <Col lg='3' className="mb-4" key={tour.id}>
            <TourCard tour={tour}/>
        </Col>
    ))
  }
  </>
}

export default FeaturedToursList