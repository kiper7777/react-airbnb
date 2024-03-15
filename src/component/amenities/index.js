import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import "./index.css";

import pool from "../amenities/pool.svg";
import gym from "../amenities/gym.svg";
import freeBreakfast from "../amenities/freeBreakfast.svg";
import freeWiFi from "../amenities/freeWiFi.svg";
import parking from "../amenities/parking.svg";
import petsAllowed from "../amenities/petsAllowed.svg";
import airportShuttle from "../amenities/airportShuttle.svg";
import conciergeService from "../amenities/conciergeService.svg";
import roomService from "../amenities/roomService.svg";
import childFriendly from "../amenities/childFriendly.svg";

export default function Amenities({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <Box shadow>
      <ul className="amenities">
        <Heading border>Зручності</Heading>

        <li className="amenities__list">
          {hasPool && (
            <ListItem imageSrc={pool}>
              <span className="amenities__list-item">Басейн</span>
            </ListItem>
          )}

          {hasGym && (
            <ListItem imageSrc={gym}>
              <span className="amenities__list-item">Спортивний зал</span>
            </ListItem>
          )}

          {hasFreeBreakfast && (
            <ListItem imageSrc={freeBreakfast}>
              <span className="amenities__list-item">
                Безкоштовний сніданок
              </span>
            </ListItem>
          )}

          {hasFreeWiFi && (
            <ListItem imageSrc={freeWiFi}>
              <span className="amenities__list-item">Безкоштовний Wi-Fi</span>
            </ListItem>
          )}

          {hasParking && (
            <ListItem imageSrc={parking}>
              <span className="amenities__list-item">
                Безкоштовний вуличний паркінг
              </span>
            </ListItem>
          )}

          {hasPetsAllowed && (
            <ListItem imageSrc={petsAllowed}>
              <span className="amenities__list-item">
                Дозволено розміщення з домашніми тваринами
              </span>
            </ListItem>
          )}

          {hasAirportShuttle && (
            <ListItem imageSrc={airportShuttle}>
              <span className="amenities__list-item">
                Трансфер до/з аеропорту
              </span>
            </ListItem>
          )}

          {hasConciergeService && (
            <ListItem imageSrc={conciergeService}>
              <span className="amenities__list-item">Консьєрж-сервіс</span>
            </ListItem>
          )}

          {hasRoomService && (
            <ListItem imageSrc={roomService}>
              <span className="amenities__list-item">
                Обслуговування номерів
              </span>
            </ListItem>
          )}

          {hasChildFriendly && (
            <ListItem imageSrc={childFriendly}>
              <span className="amenities__list-item">Підходить для дітей</span>
            </ListItem>
          )}
        </li>
      </ul>
    </Box>
  );
}
