/**
 * 数字にカンマをつける
 * @param {string|number} num
 * @return {string}
 */
export default num => {
    if (typeof num !== "number") return num;
    return Number(num).toLocaleString();
}