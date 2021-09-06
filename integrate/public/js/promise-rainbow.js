const delayBackground = (color, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, timeout);
    });
}

delayBackground('red', 1000)
    .then(() => delayBackground('orange', 1000))
    .then(() => delayBackground('yellow', 1000))
    .then(() => delayBackground('green', 1000))
    .then(() => delayBackground('blue', 1000))
    .then(() => delayBackground('indigo', 1000))
    .then(() => delayBackground('violet', 1000))