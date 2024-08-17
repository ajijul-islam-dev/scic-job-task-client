import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Rating,
} from "@material-tailwind/react";

export default function ProductCard({ product }) {
  return (
    <Card className="">
      <CardHeader shadow={false} floated={false} className="h-40">
        <img
          src={product.image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {product.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${product.price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {product.description}
        </Typography>
        <div className="flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {product.category}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            <Rating value={parseInt(product.ratings)} readonly />
          </Typography>
        </div>
        <div className="">
          Date : {product.createdAt}
        </div>
      </CardBody>
      <CardFooter className="pt-0"></CardFooter>
    </Card>
  );
}
