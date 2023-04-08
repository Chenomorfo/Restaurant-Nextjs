import { RESTAURANT_MENU } from "../../../../public/localDB";

export default function handler(req, res) {
  const { pid } = req.query;
  if (RESTAURANT_MENU[pid]) res.status(200).json(RESTAURANT_MENU[pid]);
  else res.status(404).json({ error: "No data" });
}
