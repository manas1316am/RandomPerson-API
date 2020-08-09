import React from "react";
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaGlobe } from "react-icons/fa";

const MyCard = ({ details }) => {

    const refreshPage = () => {
        window.location.reload(false);
    }
  return (
    
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h1>
            <span className="pr-2">{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
        </CardTitle>
        <CardText>
          <FaMapMarkedAlt style={{ paddingRight: "5px" }} />
          {details.location?.city}
          <p>
            <FaPhone style={{ paddingRight: "5px" }} />
            {details.phone}
          </p>
          <p>
            <FaEnvelope style={{ paddingRight: "5px" }} />
            {details.email}
          </p>
          <p>
            <FaGlobe style={{ paddingRight: "5px" }} />
            Age: {details.dob?.age}
          </p>
        </CardText>
      </CardBody>
      <Button style={{background:"#E44236"}} onClick={refreshPage}>
        Reload Me
    </Button>
    </Card>
    
  );
};

export default MyCard;
