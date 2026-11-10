const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp();
const db = getFirestore();

exports.getPosts = onRequest(async (req, res) => {
  const snapshot = await db.collection("posts").get();
  const posts = snapshot.docs.map(doc => doc.data());
  res.json(posts);
});

const { onRequest } = require("firebase-functions/v2/https");
const express = require("express");

const app = express();



app.get("/", (req, res) => {
  res.sendFile("/public/index.html");
});

// Pass the entire Express app into the Firebase HTTP trigger
exports.api = onRequest(app);