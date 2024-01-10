const result ={
    success: ["max-length", "no-amd", "prefer-arrow-functionns"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Thay đổi code ở đây
    let failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }

    return failureItems;
};

const failureItems = makeList(result.failure);

console.log(failureItems);