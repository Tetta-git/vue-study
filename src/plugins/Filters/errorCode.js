/**
 * コードリスト（これも関数の外に出してスッキリ
 * @type {{A_002: string, A_001: string}}
 */
const codeList = {
    A_001: "必須です",
    A_002: "数字で"
};

/**
 * エラーコード変換
 * @param {string} code
 * @return {string} prefix 接頭語（引数１個目）
 * @return {string}
 */
export default (code, prefix) => {
    return prefix + "は" + codeList[code];
}

