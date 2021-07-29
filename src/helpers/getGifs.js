
export const getGifs = async (category) => {

    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=Ym4dZXSkcHyE4AHzh4W6uDCCRg3B2oST&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });

    return gifs;
}
