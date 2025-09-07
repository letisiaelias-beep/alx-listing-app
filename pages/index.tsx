import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">ALX Listing App</h1>
      <Card
        title="Beautiful Apartment"
        description="2 bed, 2 bath apartment in the city center"
        imageUrl="/assets/house1.jpg"
      />
      <Button label="Book Now" onClick={() => alert("Booked!")} />
    </div>
  );
}
