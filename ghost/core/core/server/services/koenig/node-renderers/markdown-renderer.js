const markdownHtmlRenderer = require('@tryghost/kg-markdown-html-renderer');
const {addCreateDocumentOption} = require('../render-utils/add-create-document-option');

function renderMarkdownNode(node, options = {}) {
    addCreateDocumentOption(options);
    const document = options.createDocument();

    const html = markdownHtmlRenderer.render(node.markdown || '', options);

    const element = document.createElement('div');
    element.innerHTML = html;

    // `type: 'inner'` will render only the innerHTML of the element
    // @see @tryghost/kg-lexical-html-renderer package
    return {element, type: 'inner'};
}

module.exports = renderMarkdownNode;
