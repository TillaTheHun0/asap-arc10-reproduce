# asap-arc10-reproduce

> Make sure your `AWS_PROFILE` and `AWS_REGION` are set

`npm i` then `npm run deploy`.

Once deployed, navigate to your invoke url and observe the `500 Access Denied` error page.
This is because `asap` attempts to fetch `index.html` from the bucket,
and receives an `AccessDenied` error from S3, instead of the expected `NoSuchKey` error.
`asap` bubbles this error as a "pretty" error to the client, when it should actually `passthru` to the next handler

To be double sure this is the case, ensure a static file is served via `${invokeUrl}/might-light.png`

---

To see the app running with the asap shim [initial PR here](https://github.com/architect/asap/pull/408),
checkout `fix/asap-shim`, `npm i && npm run deploy`. Ensure the application now works.
