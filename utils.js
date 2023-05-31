// first input, if statement ignored.  When continuing to type in search box
//timeoutId will exist and will be removed and a new one made, preventing search
//from happening every keystroke
const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay)
    };
};