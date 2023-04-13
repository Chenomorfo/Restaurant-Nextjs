// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { LISTA_DIRECCIONES } from "../../../../public/localDB";

export default function handler(req, res) {
  res.status(200).json(LISTA_DIRECCIONES);
}
