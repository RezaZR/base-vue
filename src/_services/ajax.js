export default class Ajax {
  static request(url, options) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(options.method, url);

      if (options.headers) {
        for (let key in options.headers) {
          if (options.headers.hasOwnProperty(key)) {
            xhr.setRequestHeader(key, options.headers[key]);
          }
        }
      }

      let data = "";
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
          data = JSON.parse(xhr.response);

          resolve(data);
        } else {
          data = xhr.response;
          if (data === "") {
            data = "Error while loading data.";
          }

          reject(data);
        }

        return;
      };

      if (options.data) {
        xhr.send(options.data);
      } else {
        xhr.send();
      }
    });
  }
}
