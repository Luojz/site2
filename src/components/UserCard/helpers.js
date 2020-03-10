export function Component(name, callback) {
    const doc = document.currentScript.ownerDocument;
    const { content } = doc.querySelector('template');
    const node = doc.importNode(content, true);

    const prototype = Object.create(HTMLElement.prototype, {
        createdCallback() {
            const shadow = this.createShadowRoot(node);
            callback(shadow)
        }
    });

    document.registerElement(name, {
        prototype
    });
}