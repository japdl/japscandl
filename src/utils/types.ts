export interface MangaAttributes {
    manga: string;
    chapter: string;
    page: string;
}

export interface MangaInfos {
    volumes: number;
    chapters: number;
    name: string;
}

export type DownloaderOnPage =
    (attributes: MangaAttributes,
        currentPage: number,
        totalPages: number) => void;

export type DownloaderOnChapter = (attributes: MangaAttributes, currentChapter: number, totalChapters: number) => void;

export type DownloaderOnVolume = (mangaName: string, current: number, total: number) => void;

export type ComponentFlags = {
    verbose: boolean;
    headless: boolean;
    fast: boolean;
    timeout: number;
}