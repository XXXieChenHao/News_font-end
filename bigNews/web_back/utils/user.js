var user = {

  // 登陆页面
  login: obj => {
    $.ajax({
      type: 'post',
      url: USER_LOGIN,
      data: obj.data,
      success: obj.callback
    })
  },

  // 退出操作
  logout: obj => {
    $.ajax({
      type: 'post',
      url: USER_LOGOUT,
      data: obj.data,
      success: obj.callback
    })
  },

  // 获取基本信息
  getInfo: obj => {
    $.ajax({
      type: 'get',
      url: USER_INFO,
      data: obj.data,
      success: obj.callback
    })
  },

  getAllInfo: obj => {
    $.ajax({
      type: 'get',
      url: USER_INFO_GET,
      success: obj.callback,

    })
  },

  edit: (obj) => {
    $.ajax({
      type: 'post',
      data: obj.data,
      url: USER_INFO_EDIT,
      contentType: false,
      processData: false,
      success: obj.callback
    })

  }





}