/*import useEffect from 'react';*/
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Swal from 'sweetalert2'

export default function FeaturedWorks({ data }) {
  console.log(data);

  // const { id, name, description, image, url } = data


  const handleViewProject = (item) => {
    if (item.url === "") {
      Swal.fire({
        icon: 'info',
        title: 'Project Unavailable',
        text: `${item.name} is currently under repair.`,
        confirmButtonText: 'OK'
      });
    } else {
      window.open(item.url, '_blank');
    }
  };

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="mt-3 mt-md-5 px-0 px-md-3 g-4 col-10 col-md-10 col-lg-4">
          <Card className="mb-4 p-3 hover-pop h-100">
            <div className="d-flex row justify-content-center align-items-center">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-horizontal col-12 col-md-6 mb-md-4 mb-4"
              />
              <Card.Body className="p-0 col-12 col-md-6">
                <Card.Title className="mb-md-4 mb-2">{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button
                  className="custom-btn-primary text-white text-center shadow mt-2"
                  onClick={() => handleViewProject(item)}
                >
                  View Project
                </Button>
              </Card.Body>
            </div>
          </Card>
        </div>
      ))}
    </>
  );
}
