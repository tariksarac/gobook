export function mapLandingPage(data) {
    let { items } = data;
    let { Asset, Entry } = data.includes;

    let headings = [];
    let featuredImage = {};

    if (items && items[0].fields.headingSections) {
        let headingIds = items[0].fields.headingSections.reduce((total, amount) => {
            total.push(amount.sys.id);
            return total;
        }, []);
        headingIds.forEach(item => {
            let heading = Entry.find(entry => item === entry.sys.id);
            heading && headings.push(heading.fields);
        });
    }
    if (items && items[0].fields.featuredImage) {
        let featuredImageRaw = Entry.find(entry => items[0].fields.featuredImage.sys.id === entry.sys.id);
        let pictureAsset = '';
        if (featuredImageRaw.fields.picture) {
            let pictureAssetObj = Asset.find(item => item.sys.id === featuredImageRaw.fields.picture.sys.id);
            pictureAsset = pictureAssetObj ? pictureAssetObj.fields.file.url : '';
        }

        featuredImage = { ...featuredImageRaw.fields, picture: pictureAsset };
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
            return {original: item.fields.file.url} ;
        });
    }

    if (items && items[0].fields.itinerary) {
        itinerary = items[0].fields.itinerary.map(item => {
            return { ...item.fields };
        });
    }

    if (items && items[0].fields.included) {
        included = items[0].fields.included
    }

    if (items && items[0].fields.notIncluded) {
        notIncluded = items[0].fields.notIncluded
    }

    if (items && items[0].fields.tourDetail) {
        tourDetail = items[0].fields.tourDetail
    }

    return { headings, highlights, gallery, itinerary, included, notIncluded, tourDetail };
}
