const arc = require('@architect/functions')
const asap = require('@architect/asap')

module.exports.handler = arc.http.async(asap({ passthru: true }), handler)

async function handler(event) {
  const { rawPath: path } = event;

  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8'
    },
    body: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <div>Hello World on Arc at path ${path}</div>
          <img style="width: 30px; height: 30px;" src="/might-light.png" />
        </body>
      </html>
    `
  }
}
