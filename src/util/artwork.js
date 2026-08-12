/**
 * 任意のサイズのアートワークURLを生成
 *
 * @param {string} url 100x100のアートワークURL
 * @param {string} size 指定のアートワークサイズ(100x100, 200x200, 500x500, full)
 * @return {string} アートワークのURL
 */
export function artWorkUrl(url, size) {
  if (url === undefined) return '';
  if (size === 'full') size = '10000x10000-999';
  return url.replace(/100x100.*\.jpg/g, size + '.jpg');
}

/**
 * 画像のロードが完了したらダミー画像を除去
 *
 * @param {Event} event アートワークのimg要素のloadイベント
 */
export function hideLoading(event) {
  event.target.previousElementSibling.remove();
}
