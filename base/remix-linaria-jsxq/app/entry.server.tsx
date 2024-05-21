import {
  createReadableStreamFromReadable,
  type EntryContext,
} from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { PassThrough } from "node:stream";
import { renderToPipeableStream, renderToString } from "react-dom/server";
import { renderHeadToString } from "remix-island";
import { Head } from "./root";

const ABORT_DELAY = 5000;
const COMMON_HEAD = `
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
`;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  if (1) {
    return new Promise((resolve, reject) => {
      let didError = false;

      const { pipe, abort } = renderToPipeableStream(
        <RemixServer context={remixContext} url={request.url} />,
        {
          onShellReady() {
            const head = renderHeadToString({
              request,
              remixContext,
              Head,
            });
            const body = new PassThrough();
            const stream = createReadableStreamFromReadable(body);

            responseHeaders.set("Content-Type", "text/html");

            resolve(
              new Response(stream, {
                headers: responseHeaders,
                status: didError ? 500 : responseStatusCode,
              })
            );

            body.write(
              `<!DOCTYPE html><html><head>${COMMON_HEAD}${head}</head><body><div id="root">`
            );
            pipe(body);
            body.write(`</div></body></html>`);
          },
          onShellError(err: unknown) {
            reject(err);
          },
          onError(error: unknown) {
            didError = true;

            console.error(error);
          },
        }
      );

      setTimeout(abort, ABORT_DELAY);
    });
  } else {
    const head = renderHeadToString({ request, remixContext, Head });
    const markup = renderToString(
      <RemixServer context={remixContext} url={request.url} />
    );
    const htmlMarkup = `<!DOCTYPE html><html><head>${COMMON_HEAD}${head}</head><body><div id="root">${markup}</div></body></html>`;

    responseHeaders.set("Content-Type", "text/html");

    return new Response(htmlMarkup, {
      status: responseStatusCode,
      headers: responseHeaders,
    });
  }
}
