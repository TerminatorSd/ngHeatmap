

const getFullDom = () => {
    const dom = document.getElementsByTagName('html')[0].innerHTML;
    return dom;
}

const uploadDom = () => {
    const url = '';
    postData(url, getFullDom());
}

const postData = (url, data) => {
    const xhr = new XMLHttpRequest();
    xhr.open('post', url);
    xhr.send();
    xhr.onreadystatechange(() => {
        if (xhr.readyState === 4) {
            console.log('done');
        }
    })
}

const addClickListener = () => {
    window.addEventListener('click', (evt) => {
        const { target } = evt;
        if (target) {
            console.log(getSelector(target));
        }
    })
}

const getSelector = (el) => {
    if (!(el instanceof Element))
        return;
    var path = [];
    while (el.nodeType === Node.ELEMENT_NODE) {
        var selector = el.nodeName.toLowerCase();
        if (el.id) {
            selector += '#' + el.id;
            path.unshift(selector);
            break;
        } else {
            var sib = el, nth = 1;
            while (sib = sib.previousElementSibling) {
                if (sib.nodeName.toLowerCase() == selector)
                    nth++;
            }
            if (nth != 1)
                selector += ":nth-of-type(" + nth + ")";
        }
        path.unshift(selector);
        el = el.parentNode;
    }
    return path.join(" > ");

}

addClickListener();
// uploadDom();
