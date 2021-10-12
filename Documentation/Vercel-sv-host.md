# Serverless Functions

With Vercel, we can deploy Serverless Functions, which are pieces of code written with [backend languages](https://vercel.com/docs/concepts/functions/supported-languages#supported-languages) that take an HTTP request and provide a response.

You can use Serverless Functions to handle user authentication, form submission, database queries, custom slack commands, and more.

## Deploying Serverless Functions

To deploy Serverless Functions without any additional configuration, you can put files with extensions matching supported languages and exported functions in the `/api` directory at your project's root.

Then, push to your connected Git repository using a [Vercel for Git](https://vercel.com/docs/concepts/git) to receive a deployment automatically. You can deploy Serverless Functions to dozens of regions across the world.

### An Example Node.js Serverless Function

To deploy a [serverless Node.js API](https://vercel.com/docs/concepts/functions/supported-languages#node.js), provide a main export function like the following, in a `.js` file within the `/api` directory:

```js
module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
};
```

An example Node.js Serverless Function using Express.js-like helper methods from the [Request and Response objects](https://vercel.com/docs/runtimes#official-runtimes/node-js/node-js-request-and-response-objects).

The above example echoes the `body`, path `query`, and `cookies`, passed with the request object, as a JSON object using helper methods provided through the [Request and Response](https://vercel.com/docs/runtimes#official-runtimes/node-js/node-js-request-and-response-objects).

Then, all you need to do, to have a live API, is push to your connected Git repository using a [Vercel for Git](https://vercel.com/docs/concepts/git) to receive a deployment automatically.

The resulting deployment will contain your Node.js Serverless Function.

## Path Segments

Deploying Serverless Functions with Vercel gives you the ability to use path segments through file names instead of a complex routes file.

Creating a file using any of the [supported languages](https://vercel.com/docs/concepts/functions/supported-languages) in the `/api` directory and wrapping the filename in square brackets, such as `[name].js` will provide you with a file that takes a path segment and gives it to the function when requested with a value.

When using path segments, any dynamic filename can be used, this is indicated by the use of square brackets. The filename for the path segment is used solely for the purpose of providing a key name for accessing the value on the `req.query` object.

For example, creating a `name` directory (within `/api`) that contains a `[name].js` file will allow you to receive the path segment entered when accessing `/api/name/your-name` on the `req.query.name` object.

The following Node.js example code could then use the path segment in its functionality when requested:

```js
module.exports = (req, res) => {
  const {
    query: { name },
  } = req;

  res.send(`Hello ${name}!`);
};
```

## Execution Timeout

Serverless Functions on Vercel enforce a maximum execution timeout. This means that the function must respond to an incoming HTTP request before the timeout has been reached.

If the Serverless Function does not respond to the HTTP request within the timeout, then a `504` error status code is returned with the error code [`FUNCTION_INVOCATION_TIMEOUT`](https://vercel.com/docs/error/application/FUNCTION_INVOCATION_TIMEOUT).

The timeout is determined by the ["Serverless Function Duration (Seconds)"](https://vercel.com/docs/concepts/limits/overview#general-limits) limit, which is based on the plan that the Personal Account, or Team has enabled when creating the deployment.

### [Timeout conditions checklist](https://vercel.com/docs/concepts/functions/introduction#timeout-conditions-checklist)

If you are seeing an execution timeout error, check the following possible causes:

- The function isn't returning a response: The function must return an HTTP response, even if that response is an error. If no response is returned, the function will time out.
- The function is taking too long to process a request: Check that any API, or database requests you make in your function, are responding within the ["Serverless Function Duration (Seconds)"](https://vercel.com/docs/concepts/limits/overview#general-limits) limit applicable to your plan.
- You have an infinite loop within your function: Check that your function is not making an infinite loop at any stage of execution.
- There are upstream errors: Check that any external API or database that you are attempting to call doesn't have any errors.

## [Local Development]

Vercel provides an additional command with [Vercel CLI](https://vercel.com/cli) to help you develop Serverless Functions locally by replicating the production environment on Vercel with your localhost.

If you have an `api` directory like the [above examples](https://vercel.com/docs/concepts/functions/introduction#deploying-serverless-functions) on this page, you can run the following command to start a local development environment that supports your serverless API and allows you to develop locally, just make sure to install your project's dependencies first with `npm install`:

```
vercel dev
```

## [Logging Serverless Functions](https://vercel.com/docs/concepts/functions/introduction#logging-serverless-functions)

Each deployment at Vercel has a Functions section where you can see the calls to your Serverless Functions in real time. In order to log the functions properly, leave the Functions section open while your deployment is being accessed in the browser.

View of function activity (real-time) in the deployment.

Using the dropdown menu you can filter the logs so only a specific function is being shown. Mainly, all the paths defined by the files placed under the `/api` folder.

### [Next.js logs](https://vercel.com/docs/concepts/functions/introduction#next.js-logs)

In Next.js projects, the functions listed are those API Routes defined by the files placed in `pages/api` folder. However those pages that require server side rendering, mainly by calling `getServerSideProps`, will also be available both in the filter drop down and the real time logs.

### [Bundling Serverless Functions](https://vercel.com/docs/concepts/functions/introduction#bundling-serverless-functions)

In order to optimize resources, there is an internal process that bundles as many Serverless Functions as possible into a single Lambda. Such feature is currently only enabled for Next.js, but it will be enabled in other scenarios in the future.
