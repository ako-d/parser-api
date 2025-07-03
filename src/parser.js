import Parser from '@postlight/parser';
import { corsSuccessResponse, corsErrorResponse } from './utils';

export default async function handler(req, res) {
  const url = req.query.url;

  if (!url) {
    res.status(400).json({ error: 'URL query parameter is required' });
    return;
  }

  try {
    const result = await Parser.parse(url);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error parsing URL' });
  }
}
