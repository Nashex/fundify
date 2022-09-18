// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as admin from "firebase-admin";
import type { NextApiRequest, NextApiResponse } from 'next'
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

type Data = {
  name: string
}

let serviceAccount = require("../../fundify-c8a58-firebase-adminsdk-12enn-814f41b864.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({
      status: "Invalid Request"
    })
  }
  const db = getFirestore();
  const charity = await db.collection("charities").doc(id).get();
  const tierSnapshot = await db.collection("charities").doc(id).collection("tiers").get();

  let tiers: any = [];
  tierSnapshot.forEach((doc: any) => {
    tiers = [{ id: doc.id, ...doc.data() }, ...tiers]
  });

  res.status(200).json({ data: charity.exists ? { ...charity.data(), tiers } : "" })
}
