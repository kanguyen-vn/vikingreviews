export function truncate({ str, limit }) {
    console.log(str);
    console.log(limit);
    if (typeof str != "string" || typeof limit != "number") {
        console.log('input type error');
        return NaN;
    }
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  }