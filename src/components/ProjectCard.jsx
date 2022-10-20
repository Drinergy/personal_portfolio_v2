import React from 'react'
import { Col } from 'react-bootstrap'

export const ProjectCard = ({ title, description, imgUrl, links }) => {

  const redirectPage = () => {
    window.location.href = (links);
  };

  return (
    <Col sm={6} md={4} >
        <div className="proj-imgbx" onClick={redirectPage}>
            <img src={ imgUrl } />
            <div className="proj-txtx">
                <h4>{ title }</h4>
                <span>{ description }</span>
            </div>
        </div>
    </Col>
  )
}
