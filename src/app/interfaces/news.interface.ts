export interface INews {
    publishedDate: Date,
    title: string,
    image: URL,
    site: string,
    text: string,
    url: URL
}

export interface INewsState {
    content: Array<INews>
}
