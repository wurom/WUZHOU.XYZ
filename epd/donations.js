// 赞赏记录数据 —— 收到赞赏后在此手动添加一条即可（然后 git push 发布）。
// 字段说明：
//   name    : 支持者昵称（留空或省略则显示"匿名"）
//   amount  : 赞赏金额（数字，单位元）
//   message : 留言（可省略）
//   date    : 日期，格式 YYYY-MM-DD（用于排序，最新的排最上面）
window.DONATIONS = [
  { name: "匿名热心人", amount: 6.6,  message: "开源不易，请喝杯咖啡 ☕", date: "2026-06-18" },
  { name: "李先生",     amount: 20.0, message: "价签固件很好用，支持！",   date: "2026-07-02" },
  { name: "匿名用户",   amount: 8.8,  message: "感谢分享，持续关注",       date: "2026-08-11" },
  { name: "Wang",       amount: 10.0, message: "希望多出点好玩的功能页",   date: "2026-09-23" },
  { name: "热心人",       amount: 30.0, message: "鼎力支持，感谢！",   date: "2026-10-23" },
  { name: "王先生",       amount: 66.66, message: "努力加油666",   date: "2026-11-02" }
];
