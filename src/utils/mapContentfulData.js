
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


