import {Request, Response} from 'express';

const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());

server.all('/ipfs/:cid', (req: Request, res: Response) => {
  const cid = req.params.cid;
  if (cid === '123') {
    res.status(401).json({'status': 'invalid cid'});
    return;
  }
  res.redirect(301, `${process.env.IPFS_HOST}/ipfs/${cid}`);
});

const port = process.env.PORT || 5051;
console.log(`Listening on port ${port}`);
server.listen(port);
