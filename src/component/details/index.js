import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import "./index.css";
import guest from "../details/guests.svg";
import bedroom from "../details/bedrooms.svg";
import bed from "../details/beds.svg";
import bath from "../details/baths.svg";

export default function Details({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow>
      <ul className="details">
        <Heading border>Деталі властивості:</Heading>

        <li className="details__list">
          <ListItem imageSrc={guest}>{guests} гості</ListItem>
          <ListItem imageSrc={bedroom}>{bedrooms} спальня</ListItem>
          <ListItem imageSrc={bed}>{beds} ліжко</ListItem>
          <ListItem imageSrc={bath}>{baths} ванна кімната</ListItem>
        </li>
      </ul>
    </Box>
  );
}
