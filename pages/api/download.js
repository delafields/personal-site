import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const { file } = req.query;
    const filePath = path.join(process.cwd(), 'public', 'products', file);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      res.status(404).send('File not found');
      return;
    }

    // Set appropriate headers for the file download
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename=${file}`);

    // Pipe the file stream to the response to initiate the download
    fs.createReadStream(filePath).pipe(res);

  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while downloading the file');
  }
}