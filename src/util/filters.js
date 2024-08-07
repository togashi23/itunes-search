export function numberFormat(num) {
  return num.toString().replace(/([0-9]+?)(?=(?:[0-9]{3})+$)/g, '$1,');
}

export function dateFormat(strDate) {
  const date = new Date(strDate);
  return (
    date.getFullYear() +
    '/' +
    (date.getMonth() + 1) +
    '/' +
    date.getDate() +
    ' ' +
    date.getHours() +
    ':' +
    ('0' + date.getMinutes()).slice(-2)
  );
}

export function msTimeFormat(ms) {
  const h = String(Math.floor(ms / 3600000) + 100).substring(1);
  const m = String(Math.floor((ms - h * 3600000) / 60000) + 100).substring(1);
  const s = String(Math.round((ms - h * 3600000 - m * 60000) / 1000) + 100).substring(1);
  return m + ':' + s;
}
