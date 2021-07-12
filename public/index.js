// 请求server拿到pfb list和fte list

// 构造http请求
const HOST = "chatbot.test.shopee.sg";

class BaseHttp {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }

  get(url, cb) {
    this.xhr.open("get", url);
    this.xhr.onload = (e) => responseHandler(e, cb);

    this.xhr.send();
  }
}

function responseHandler(res, cb) {
  const response = res.currentTarget.response;
  cb(response);
}

const pfb_xhr = new BaseHttp();
const fte_xhr = new BaseHttp();

pfb_xhr.get(
  "https://pfb.test.shopeemobile.com/api/cookies/get?hostname=chatbot.test.shopee.sg",
  function (res) {
    const map = JSON.parse(res);
    console.log("响应数据 = ", map);
    const dom = renderOptions(map);
    render(dom);
  }
);

// fte_xhr.get("", function (res) {});

function renderOptions(map) {
  return Object.entries(map).map(([key, values]) => {
    const wrapper = document.createElement("div");
    const select = document.createElement("select");
    wrapper.append(`${key}：`);
    values.forEach((item) => {
      const option = document.createElement("option");
      option.text = item;
      select.appendChild(option);
    });
    wrapper.appendChild(select);
    return wrapper;
  });
}

function render(dom) {
  const div = document.getElementById("app");
  const wrapper = document.createElement("div");
  dom.forEach((v) => wrapper.append(v));
  div.appendChild(wrapper);
}
