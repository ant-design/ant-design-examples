// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
import fs from 'fs';

const dir = "antd-output";
const baseDir = path.resolve(__dirname, "../../../static/css");

const outputCssPath = path.join(baseDir, dir);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { fileName, etag } = req.query;

  if (!fileName) {
    res.status(400).end();
    return;
  }
  const filePath = path.join(outputCssPath, fileName as string);
  if (!fs.existsSync(filePath)) {
    res.status(404).end(); // 返回 404 Not Found
  }

  
  const ifNoneMatch = req.headers['if-none-match'];
  if (ifNoneMatch === etag) {
    res.status(304).end(); // 返回 304 Not Modified
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  res.setHeader('Content-Type', 'text/css');

  // 设置响应头
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // 缓存时间为 1 小时
  res.setHeader('ETag', etag as string);

  res.end(content);
}
