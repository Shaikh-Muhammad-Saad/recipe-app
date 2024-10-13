export const truncateText = (string: string = '', limit = 0) => {
    if (string.length <= limit) {
        return string;
    }
    return string.slice(0, limit) + '...';
}