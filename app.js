function createDOM(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }
    const element = document.createElement(node.tag);

    node.children.map(createDOM).forEach(element.appendChild.bind(element))

    return element;
}

// n개의 자식, n개의 속성과 값, 태그 이름
const vdom = {
    tag: 'p',
    props: {}, // key-value
    children: [ // n number of children, text, or none.
        {
            tag: 'h1',
            props: {}, 
            children: [
                "Make React"                
            ] 
        },
        {
            tag: 'ul',
            props: {},
            children: [
                {
                    tag: 'li',
                    props: {},
                    children: ['item 1']
                },
                {
                    tag: 'li',
                    props: {},
                    children: ['item 2']
                },   
            ]
        }   
    ] 
}

document.querySelector('#root').appendChild(createDOM(vdom));