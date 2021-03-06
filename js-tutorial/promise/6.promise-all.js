function getBanana() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('๐');
        } , 1000)
    });
}

function getApple() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('๐');
        }, 3000);
    });
}

function getOrange() {
    return Promise.reject(new Error('no orange'));
}

//๋ฐ๋๋์ ์ฌ๊ณผ๋ฅผ ๊ฐ์ด ๊ฐ์ ธ์ค๊ธฐ
getBanana()
    .then(banana =>
        getApple()
            .then((apple) => [banana, apple])
    ).then(console.log);

// Promise.all ๋ณ๋ ฌ์ ์ผ๋ก ํ๋ฒ์ ๋ชจ๋  Promise๋ค์ ์คํ@
Promise.all([getBanana(), getBanana()])
    .then((fruits) => console.log('all', fruits));

// Promise.race ์ฃผ์ด์ง ํ๋ก๋ฏธ์ค์ค์ ์ ์ผ ๋นจ๋ฆฌ ์ํ๋๊ฒ์ด ์ถ๋ ฅํจ
Promise.race([getBanana(), getApple()])
    .then((fruit) => console.log('rece', fruit));

// ์ฑ๊ณตํ์ ๋๋ง ๊ฐ์ ธ์ฌ๊ฑฐ๋ผ๋ฉด all
Promise.race([getBanana(), getApple(), getOrange()])
    .then((fruit) => console.log('error', fruit))
    .catch(console.log);


// ์ด ๋ชจ๋  ๊ฒฐ๊ณผ์ ๋ํด์ ๋ฐ์๋ณด๊ณ  ์ถ๋ค ํ๋ฉด allSettled๋ฅผ ์ฌ์ฉํจ
Promise.allSettled([getBanana(), getApple()])
    .then((fruit) => console.log('allSettled', fruit));

// ํ๋ก๋ฏธ์ค๋ ์ฝ๋ฐฑํจ์๋ฅผ ์ฌ์ฉํ์ง ์๊ณ  ๊น๋ํ๊ฒ ์ฌ์ฉํ  ์ ์๋ค




