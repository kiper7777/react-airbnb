import Box from "../box";
import Heading from "../heading";
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
          <span imageSrc={guest}>{guests} гості</span>
          <span imageSrc={bedroom}>{bedrooms} спальня</span>
          <span imageSrc={bed}>{beds} ліжко</span>
          <span imageSrc={bath}>{baths} ванна кімната</span>
        </li>
      </ul>
    </Box>
  );
}
