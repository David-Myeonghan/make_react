function createDOM(vdom) {
    const element = document.createElement(vdom.tag);

    return element;
}

// n개의 자식, n개의 속성과 값, 태그 이름
const vdom = {
    tag: 'p',
    props: {}, // key-value
    children: [ // n number of children or none.
        {
            tag: 'h1',
            props: {}, 
            children: [
                "Make React"                
            ] 
        }        
    ] 
}

document.querySelector('#root').appendChild(createDOM(vdom));