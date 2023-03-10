// 抛出错误
function getMonthName(mo) {
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (months[mo]) {
        return months[mo];
    } else {
        throw "11"; //throw keyword is used here
    }
}
function logMyErrors(e) {
    console.log(e)
}

try { // statements to try
    monthName = getMonthName(1); // function could throw exception
    console.log(monthName)
}
catch (e) {
    monthName = "unknown";
    logMyErrors(e); // pass exception object to error handler -> your own function
}

// 循环
var i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);
// 闭包
let a = 1
let b = 3
function x1(a, b) {
    let c = a + b
    function x2(c) {
        return a + b + c
    }
    return x2(c)
    console.log(x2(c))
}
x1(a, b)
console.log(x1(a, b))

// arguments使用
function myConcat(separator) {
    var result = ''; // 把值初始化成一个字符串，这样就可以用来保存字符串了！！
    var i;
    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}
myConcat(", ", "red", "orange", "blue")



// map
let dogMap = new Map()
// 正确添加map属性
dogMap.set('dahuang', 1)
dogMap.set('laifu', 2)
dogMap.values()
console.log(dogMap.values())
console.log(dogMap.entries())
// 错误赋值
// dogMap = {'dahuang': 1, 'laifu': 2}
let size = dogMap.size
// const iterator1 = dogMap[Symbol.iterator]();
// console.log(iterator1)

const kvArray = [['key1', 'value1'], ['key2', 'value2']];
const myMap = new Map(kvArray);
console.log(myMap.get('key1')); // "value1"
console.log(Array.from(myMap)); // 输出和 kvArray 相同的数组




// promise
let list = [1, 2, 3, 4]
for (let index = 0; index < list.length; index++) {
    // pro(list[index]).then((f) => {
    //     console.log(f)  // 1 2 3
    //     return pro2(f)
    // }, () => {
    //     console.log('catch', list[index])
    // }).then(() => {
    //     console.log(list[index])
    // }, () => {
    //     console.log('catch', list[index])
    // })
    // pro3(list[index])
}
function pro(f) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (f <= 3) {
                resolve(f)
            } else {
                reject()
            }
        }, 1000)
    })
}
function pro2(f) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (f <= 2) {
                resolve(f)
            } else {
                reject()
            }
        }, 2000)
    })
}

async function pro3(f) {
    try {
        let a = await pro(f)
        console.log(a)
        let b = await pro2(a)
        console.log(b)
    } catch (error) {
        console.log('catch')
    }
}


// 示例

function resolveAfter2Seconds() {
    console.log("starting slow promise"); // 2 // 2
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("slow"); // 6
            console.log("slow promise is done"); // 5 // 5
        }, 2000);
    });
}

function resolveAfter1Second() {
    console.log("starting fast promise"); // 3  // 3
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("fast"); // 7
            console.log("fast promise is done"); // 4 // 4
        }, 1000);
    });
}

async function sequentialStart() {
    console.log("==SEQUENTIAL START==");

    // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds();
    console.log(slow); // 2. this runs 2 seconds after 1.

    const fast = await resolveAfter1Second();
    console.log(fast); // 3. this runs 3 seconds after 1.
}

async function concurrentStart() {
    console.log("==CONCURRENT START with await=="); // 1
    const slow = resolveAfter2Seconds(); // starts timer immediately
    const fast = resolveAfter1Second(); // starts timer immediately

    // 1. Execution gets here almost instantly
    console.log(await slow); // 2. this runs 2 seconds after 1.
    console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}

function concurrentPromise() {
    console.log("==CONCURRENT START with Promise.all=="); // 1
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
        (messages) => {
            console.log(messages[0]); // slow // 6
            console.log(messages[1]); // fast // 7
        }
    );
}

async function parallel() {
    console.log("==PARALLEL with await Promise.all==");

    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))(),
    ]);
}

// sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
// setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"

// // wait again
// setTimeout(concurrentPromise, 7000); // same as concurrentStart

// // wait again
setTimeout(parallel, 1000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"