export function mapLandingPage(data) {
    let { items } = data;
    let { Asset, Entry } = data.includes;

    let headings = [];
    let featuredImage = {};

    if (items && items[0].fields.headingSections) {
        headings = items[0].fields.headingSections.map(item => {
            return { ...item.fields };
        });
    }

    if (items && items[0].fields.featuredImage) {
        featuredImage = {
            ...items[0].fields.featuredImage.fields,
            picture: items[0].fields.featuredImage.fields.picture.fields.file.url,
        };
    }

    return { headings: headings, featuredImageData: featuredImage };
}

export function mapPageCards(data) {
    let { items } = data;
    let cards = items.reduce((total, amount) => {
        total.push({
            ...amount.fields,
            tourCardPicture: amount.fields.tourCardPicture.fields.file.url,
            id: amount.sys.id,
        });
        return total;
    }, []);

    return cards.sort((a, b) => b.id < a.id);
}

export function mapTourData(data) {
    let { items } = data;
    let { Asset, Entry } = data.includes;

    let headings = [];
    let highlights = [];
    let gallery = [];
    let itinerary = [];
    let included = '';
    let notIncluded = '';
    let tourDetail = '';
    let id = '';
    let title = '';

    if (items && items[0].fields.tourHeading) {
        headings = items[0].fields.tourHeading.map(item => {
            return { ...item.fields };
        });
    }

    if (items && items[0].fields.highlights) {
        highlights = items[0].fields.highlights.map(item => {
            return { ...item.fields, highlightPicture: item.fields.highlightPicture.fields.file.url };
        });
    }

    if (items && items[0].fields.gallery) {
        gallery = items[0].fields.gallery.map(item => {
            return { original: item.fields.file.url };
        });
    }

    if (items && items[0].fields.itinerary) {
        itinerary = items[0].fields.itinerary.map(item => {
            return { ...item.fields };
        });
    }

    if (items && items[0].fields.included) {
        included = items[0].fields.included;
    }

    if (items && items[0].fields.notIncluded) {
        notIncluded = items[0].fields.notIncluded;
    }

    if (items && items[0].fields.tourDetail) {
        tourDetail = items[0].fields.tourDetail;
    }

    if (items && items[0].fields.id) {
        id = items[0].fields.id;
    }

    if (items && items[0].fields.title) {
        title = items[0].fields.title;
    }

    return { headings, highlights, gallery, itinerary, included, notIncluded, tourDetail, id, title };
}
