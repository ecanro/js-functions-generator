const xPromise = new Promise((resolve) => {
    let x = 1;

    setTimeout(() => {
        x=2;

        resolve(x);
    }, 3000);
})

    xPromise.then((foo) => {
    console.log(foo)
    })

    //** throw and cach para errors */
    //** y async await */