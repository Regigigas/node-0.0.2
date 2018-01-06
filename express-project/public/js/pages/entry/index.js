function Page() { }

$.extend(Page.prototype, {
  init: function () {
    this.createHeader();
    this.createAddEntry();
    this.createEntryList();
    this.createPagination();
  },
  createHeader: function () {
    var headerContainer = $(".js-header");
    this.header = new Header(headerContainer, 2);
  },
  createAddEntry: function () {
    var entryContainer = $(".js-container");
    this.addentry = new AddEntry(entryContainer);
    $(this.addentry).on("change", $.proxy(this.handleAddEntry, this))
  },
  createEntryList: function () {
    var entryContainer = $(".js-container");
    this.entryList = new EntryList(entryContainer);
    $(this.entryList).on("change", $.proxy(this.handleListChange, this))
  },
  createPagination: function () {
    var paginationContainer = $(".js-pagination");
    this.pagination = new Pagination(paginationContainer);
    $(this.pagination).on("change", $.proxy(this.handlePaginationChange, this))
  },
  handleListChange: function (e) {
    this.pagination.setTotal(e.total)
  },
  handlePaginationChange: function (e) {
    this.entryList.changePage(e.page);
  },
  handleAddEntry: function () {
    this.entryList.getListInfo();
  }
})
