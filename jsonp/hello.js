
(function murtools() {
    function hello() {
        alert('hello world !');
    };

    const btn = document.createElement('button');
    btn.appendChild(document.createTextNode('hello'));
    document.body.appendChild(btn);
})();
