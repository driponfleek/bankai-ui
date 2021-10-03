/* eslint-disable import/prefer-default-export */
import {
    DOC_FILE_MIME_TYPES,
    DOC_FILE_EXT,
    IMG_FILE_TYPES,
    IMG_FILE_MIME_TYPES,
    IMG_FILE_EXT,
    MEDIA_FILE_TYPES,
    MEDIA_FILE_MIME_TYPES,
    MEDIA_FILE_EXT,
} from '../const/fileTypesConst';

const mediaTypesThatHaveAudioVideo = [
    MEDIA_FILE_TYPES.MP4,
    MEDIA_FILE_TYPES.WEBM,
];

const FILE_MIME_TYPES = {
    ...DOC_FILE_MIME_TYPES,
    ...IMG_FILE_MIME_TYPES,
    ...MEDIA_FILE_MIME_TYPES,
};

const FILE_EXTS = {
    ...DOC_FILE_EXT,
    ...IMG_FILE_EXT,
    ...MEDIA_FILE_EXT,
};

export const genFileTypeMeta = (TYPE, isVideo) => {
    const fileTypeMeta = {
        fileType: TYPE,
    };

    if (!TYPE) {
        return fileTypeMeta;
    }

    // Handle different JPG extensions
    if (TYPE === IMG_FILE_TYPES.JPEG || TYPE === IMG_FILE_TYPES.JPG) {
        const isJPEG = TYPE === IMG_FILE_TYPES.JPEG;
        fileTypeMeta.mimeType = FILE_MIME_TYPES[IMG_FILE_TYPES.JPEG];
        fileTypeMeta.extension =
            FILE_EXTS[isJPEG ? IMG_FILE_TYPES.JPEG : IMG_FILE_TYPES.JPG];

        return fileTypeMeta;
    }

    // Handle Media Types that have audio/video
    if (mediaTypesThatHaveAudioVideo.indexOf(TYPE) > -1) {
        const SUFFIX = isVideo ? '_VIDEO' : '_AUDIO';

        fileTypeMeta.mimeType = FILE_MIME_TYPES[`${TYPE}${SUFFIX}`];
        fileTypeMeta.extension = FILE_EXTS[TYPE];

        return fileTypeMeta;
    }

    // Everything Else
    fileTypeMeta.mimeType = FILE_MIME_TYPES[TYPE];
    fileTypeMeta.extension = FILE_EXTS[TYPE];

    return fileTypeMeta;
};
