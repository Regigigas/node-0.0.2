function Pagination(container) {
  this.container = container;
  this.bindEvents();
}

$.extend(Pagination.prototype, {
  bindEvents: function () {
    this.container.on("click", $.proxy(this.handleClick, this));
  },
  handleClick: function (e) {
    var target = $(e.target),
    page = parseInt(target.text(), 10);
    $(this).trigger(new $.Event("change", {
      page: page
    }))
  },
  setTotal: function (total) {
    this.createDom(total);
    //alert('我是pagination.js')
  },
  createDom: function (total) {
    var str = "";
    for (var i = 1; i <= total; i++) {
      str += `<li><a href="javascript:;">${i}</a></li>`
    }
    this.container.html(str);
    console.log('我是要添加到页面的内容');
  }
})