const searchTextParserUtil = (description, searchTerm) => {
    if (!description) {
        return {};
    }

    const descLowerCase = description.toLowerCase();
    const searchTermLowerCase = searchTerm
        ? searchTerm.toLowerCase()
        : undefined;
    const idxOfSearchTerm = descLowerCase.indexOf(searchTermLowerCase);
    const searchTermLen = searchTerm ? searchTerm.length : 0;
    const descriptionLen = description.length;
    let boldText;
    let startText;
    let endText;

    if (idxOfSearchTerm > -1) {
        startText = description.substring(0, idxOfSearchTerm);
        boldText = description.substring(
            idxOfSearchTerm,
            idxOfSearchTerm + searchTermLen,
        );

        if (idxOfSearchTerm + searchTermLen < descriptionLen) {
            endText = description.substring(
                idxOfSearchTerm + searchTermLen,
                descriptionLen,
            );
        }
    } else {
        startText = description;
    }

    return {
        boldText,
        endText,
        startText,
    };
};

export default searchTextParserUtil;
