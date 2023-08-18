export const mapActionTypeToId = (actionType: string) =>
    actionType
        .toLowerCase()
        .replace(/ success/g, '')
        .replace(/ failure/g, '')
        .trim()
        .replace(/ /g, '-');
