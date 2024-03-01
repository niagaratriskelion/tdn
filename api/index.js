
import cors from 'cors';
import express from 'express';
import superagent from 'superagent';
import routes from './routes';
import fetch from 'node-fetch';

import { Octokit } from "@octokit/core";
const pas = "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"
// const octokit = new Octokit({
//     auth: `bearer ${pas}`
// });

const octokit = new Octokit({
    request: {
        fetch: fetch,
    },
    auth: `bearer ${pas}`
});
foo();
async function foo() {
    const response = await octokit.request("GET /niagaratriskelion/test", {
        headers: {
            "content-type": "text/json",
            "x-github-api-version": "2022-11-28",
            'User-Agent': `niagaratriskelion`,
            'Authorization': `bearer ${pas}`
        },
    });
    console.log(response, "---")
    // superagent
    //     .post('https://api.github.com/gists')
    //     .send({ "description": "Example of a gist", "public": false, "files": { "README.md": { "content": "Hello World" } } }) // sends a JSON post body
    //     .set('Authorization', `bearer ${pas}`)
    //     .set('User-Agent', `niagaratriskelion`)
    //     .set('X-GitHub-Api-Version', '2022-11-28')
    //     .end((err, response) => {
    //         console.log(response)
    //         if (err) {
    //             // next(err, req, res)
    //             console.log(err)
    //         }
    //         // next(null, req, res)
    //         console.log(response)
    //         // Calling the end function will send the request
    //     });
}
const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware

// app.use((req, res, next) => {
//   req.context = {
//     models,
//     me: models.users[1],
//   };
//   next();
// });

// * Routes * //


app.use('/', routes);

// * Start * //

app.listen(8800, () =>
    console.log(`Example app listening on port 8800!`),
);