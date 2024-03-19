import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import "./index.css";

export default function Additional({
  rules,
  policy,
  transportation,
  languages,
  offers,
  instructions,
}) {
  return (
    <Box shadow>
      <ul className="additional">
        <Heading border>Додаткові властивості</Heading>

        <li className="additional__list">
          <ListItem title="Правила дому">{rules}</ListItem>
          <ListItem title="Політика скасування">{policy}</ListItem>
          <ListItem title="Місцевий транспорт">{transportation}</ListItem>
          <ListItem title="Мови хоста">{languages}</ListItem>
          <ListItem title="Спеціальні пропозиції:">{offers}</ListItem>
          <ListItem title="Інструкції щодо реєстрації">{instructions}</ListItem>
        </li>
      </ul>
    </Box>
  );
}
