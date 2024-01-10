function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Thay đổi code ở đây
    return sentence;
}

console.log(spreadOut());