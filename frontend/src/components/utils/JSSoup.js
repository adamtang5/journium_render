import JSSoup from "jssoup";

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
