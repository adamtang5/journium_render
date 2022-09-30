import JSSoup from "jssoup";

const textElements = [
    'p', 'h1', 'h2', 'pre', 'blockquote', 'ol', 'ul',
];

const stylingElements = [
    'strong', 'em', 'u', 's',
]

export const firstImage = contentHtml => {
    const soup = new JSSoup(contentHtml);
    const imgs = soup.findAll('img');
    return imgs.length ? [imgs[0].attrs.src, imgs[0].attrs.alt] : [];
};

export const firstParagraph = contentHtml => {
    const soup = new JSSoup(contentHtml);
    const paragraphs = soup.findAll('p');
    return paragraphs.length ? paragraphs[0].text : '';
};

export const hasNoText = contentHtml => {
    const soup = new JSSoup(contentHtml);
    let el = soup;
    while (el.nextElement) {
        if (el.text && el.text.trim()) {
            return false;
        }
        el = el.nextElement;
    }
    return true;
};
