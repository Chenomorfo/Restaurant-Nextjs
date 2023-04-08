import { RESTAURANT_MENU } from "../../../../public/localDB";

export default function handler(req, res) {
  res.status(200).json(RESTAURANT_MENU);
}
