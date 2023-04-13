// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { COMBOS_MENU } from "../../../../public/localDB";

export default function handler(req, res) {
  res.status(200).json(COMBOS_MENU);
}
