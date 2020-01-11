export const formatDecimals = decimals => {
    if (decimals === 0) {
        return '00';
    }

    if (decimals.toString().length == 1) {
        return decimals.toString() + '0';
    }

    return decimals.toString();
}