
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/user/list", async (req, res) => {
    const data = await prisma.user.findMany();
    res.send({data : data});
})

app.listen(3000)