export async function request({ url, body, headers, responseType = 'json', onProgress }) {
    return new Promise((resolve, reject) => {
        // 设置请求和响应
        const xhr = new XMLHttpRequest()
        xhr.withCredentials = true
        xhr.responseType = responseType

        // 设置回调
        xhr.onload = () => resolve(xhr)
        xhr.onerror = reject
        xhr.onabort = reject
        if (onProgress) {
            xhr.upload.onprogress = onProgress
        }

        // 打开连接
        xhr.open('POST', url)

        // 设置请求头
        if (body instanceof Blob || body instanceof ArrayBuffer) {
            xhr.setRequestHeader('Content-Type', 'application/octet-stream')
        } else {
            xhr.setRequestHeader('Content-Type', 'application/json')
        }
        if (headers) {
            for (let [key, value] of Object.entries(headers)) {
                if (String(value)) {
                    xhr.setRequestHeader(key, value)
                }
            }
        }

        xhr.send(body)
    })
}
