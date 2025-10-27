import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";

export default function FeaturedWorks({ data }) {
  const handleViewProject = (item) => {
    if (item.url === "") {
      Swal.fire({
        icon: "info",
        title: "Project Unavailable",
        text: `${item.name} is currently under repair.`,
        confirmButtonText: "OK",
      });
    } else {
      window.open(item.url, "_blank");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Carousel
        interval={null}
        className="mt-4 w-100"
        style={{ maxWidth: "600px" }} // adjust width here
      >
        {data.map((item) => (
          <Carousel.Item key={item.id}>
            <Card className="p-3 h-100 text-center shadow">
              <img
                src={item.image}
                alt={item.name}
                className="d-block mx-auto mb-3"
                style={{ width: "100%", maxHeight: "300px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button
                  className="custom-btn-primary text-white shadow mt-2"
                  onClick={() => handleViewProject(item)}
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
