export function numberFormat(num) {
  return num.toString().replace(/([0-9]+?)(?=(?:[0-9]{3})+$)/g, '$1,');
};

export function dateFormat(strDate) {
  let date = new Date(strDate);
  return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' ' + date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2);
}
