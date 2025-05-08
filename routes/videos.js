const express = require('express');
const router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'vidzy';

router.get('/', async (req, res) => {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);
    const videos = await db.collection('videos').find().toArray();
    res.json(videos);
});

router.post('/', async (req, res) => {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);
    const video = req.body;
    await db.collection('videos').insertOne(video);
    res.json(video);
});

router.put('/:id', async (req, res) => {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);
    const updatedVideo = req.body;
    await db.collection('videos').updateOne({ _id: new ObjectId(req.params.id) }, { $set: updatedVideo });
    res.json(updatedVideo);
});

router.delete('/:id', async (req, res) => {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);
    await db.collection('videos').deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ success: true });
});

module.exports = router;