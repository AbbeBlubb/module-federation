export const queuedFunction = (funcPromise) => {
    let queueFunc = null;
    let queue = [];
    let pending = false;

    return (msg) => {
        if (queueFunc) {
            queueFunc(msg);
        } else {
            queue.push(msg);

            if (!pending) {
                pending = true;
                funcPromise
                    .then(({ default: func }) => {
                        queueFunc = func;
                        queue.forEach(queueFunc);
                        queue = [];
                    })
                    .catch((err) => console.log(`Error getting queued function: `, err));
            }
        }
    };
};
