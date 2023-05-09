// 是否为外部连接
export function isExternal(path) {
   return /^(https?:|mailto:|tel:)/.test(path);
}
