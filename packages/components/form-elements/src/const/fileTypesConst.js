// DOCUMENT
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
export const DOC_FILE_TYPES = {
    CSV: 'CSV',
    DOC: 'DOC',
    DOCX: 'DOCX',
    PDF: 'PDF',
    PPT: 'PPT',
    PPTX: 'PPTX',
    XLS: 'XLS',
    XLSX: 'XLSX',
};

export const DOC_FILE_MIME_TYPES = {
    [DOC_FILE_TYPES.CSV]: 'text/csv',
    [DOC_FILE_TYPES.DOC]: 'application/msword',
    [DOC_FILE_TYPES.DOCX]:
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    [DOC_FILE_TYPES.PDF]: 'application/pdf',
    [DOC_FILE_TYPES.PPT]: 'application/vnd.ms-powerpoint',
    [DOC_FILE_TYPES.PPTX]:
        'application/application/vnd.openxmlformats-officedocument.presentationml.presentation',
    [DOC_FILE_TYPES.XLS]: 'application/vnd.ms-excel',
    [DOC_FILE_TYPES.XLSX]:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
};

export const DOC_FILE_EXT = {
    [DOC_FILE_TYPES.CSV]: '.csv',
    [DOC_FILE_TYPES.DOC]: '.doc',
    [DOC_FILE_TYPES.DOCX]: '.docx',
    [DOC_FILE_TYPES.PDF]: '.pdf',
    [DOC_FILE_TYPES.PPT]: '.ppt',
    [DOC_FILE_TYPES.PPTX]: '.pptx',
    [DOC_FILE_TYPES.XLS]: '.xls',
    [DOC_FILE_TYPES.XLSX]: '.xlsx',
};

// IMAGE
// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
export const IMG_FILE_TYPES = {
    GIF: 'GIF',
    JPEG: 'JPEG',
    JPG: 'JPG',
    PNG: 'PNG',
    SVG: 'SVG',
    WEBP: 'WEBP',
};

export const IMG_FILE_MIME_TYPES = {
    [IMG_FILE_TYPES.GIF]: 'image/gif',
    [IMG_FILE_TYPES.JPEG]: 'image/jpeg',
    [IMG_FILE_TYPES.PNG]: 'image/png',
    [IMG_FILE_TYPES.SVG]: 'image/svg+xml',
    [IMG_FILE_TYPES.WEBP]: 'image/webp',
};

export const IMG_FILE_EXT = {
    [IMG_FILE_TYPES.GIF]: '.gif',
    [IMG_FILE_TYPES.JPEG]: '.jpeg',
    [IMG_FILE_TYPES.JPG]: '.jpg',
    [IMG_FILE_TYPES.PNG]: '.png',
    [IMG_FILE_TYPES.SVG]: '.svg',
    [IMG_FILE_TYPES.WEBP]: '.webp',
};

// MEDIA
// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers
export const MEDIA_FILE_TYPES = {
    MP3: 'MP3',
    MP4: 'MP4',
    QUICKTIME: 'QUICKTIME',
    WAV: 'WAV',
    WEBM: 'WEBM',
};

export const MEDIA_FILE_MIME_TYPES = {
    [MEDIA_FILE_TYPES.MP3]: 'audio/mp3',
    [`${MEDIA_FILE_TYPES.MP4}_AUDIO`]: 'audio/mp4',
    [`${MEDIA_FILE_TYPES.MP4}_VIDEO`]: 'video/mp4',
    [MEDIA_FILE_TYPES.QUICKTIME]: 'audio/quicktime',
    [MEDIA_FILE_TYPES.WAV]: 'audio/wav',
    [`${MEDIA_FILE_TYPES.WEBM}_AUDIO`]: 'audio/mp4',
    [`${MEDIA_FILE_TYPES.WEBM}_VIDEO`]: 'video/mp4',
};

export const MEDIA_FILE_EXT = {
    [MEDIA_FILE_TYPES.MP3]: '.mp3',
    [MEDIA_FILE_TYPES.MP4]: '.mp4',
    [MEDIA_FILE_TYPES.QUICKTIME]: '.mov',
    [MEDIA_FILE_TYPES.WAV]: '.wav',
    [MEDIA_FILE_TYPES.WEBM]: '.webm',
};
