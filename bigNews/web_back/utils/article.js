var article = {

  getCate: function (obj) {
    $.ajax({
      url: ARTICLE_GET,
      success: obj.callback
    })
  },

  editCate: function (obj) {
    $.ajax({
      type: 'post',
      url: ARTICLE_EDIT,
      data: obj.data,
      success: obj.callback
    });
  },

  delCate: function (obj) {
    $.ajax({
      type: 'post',
      url: ARTICLE_DEL,
      data: obj.data,
      success: obj.callback
    })
  },

  addCate: function (obj) {
    $.ajax({
      type: 'post',
      url: ARTICLE_ADD,
      data: obj.data,
      success: obj.callback
    })
  },





}