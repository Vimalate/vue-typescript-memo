/*
 * @Author: Vimalakirti
 * @Date: 2020-06-24 19:05:56
 * @LastEditTime: 2020-06-24 19:15:02
 * @Description: 
 * @FilePath: \Code\memo\src\model\ItemData.ts
 */ 
import Category from './CateEnum'
class ItemData{
  id!:number
  categoryId!:Category
  title!:string
  content!:string
  createTime!:string

  constructor(id: number = -1, categoryId: Category = -1, title: string = '', content: string = ''){
    this.id=id
    // 在 此 需要使用 枚举类型 代表 笔记分类
    this.categoryId = categoryId;
    this.title = title;
    this.content = content;
    this.createTime = this.toSelfDateStr(Date.now());
  } 
  toSelfDateStr(timeSpan: number): string {
    //1.将 时间戳 转成 日期对象
    let date = new Date(timeSpan);
    //2.使用 日期对象 的 getXXX 方法 依次获取 年月日 时分秒，拼接成 想要的格式
    let str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' +
        date.getHours() + ':' + date.getMinutes();
    //3.最后 将 日期字符串 返回
    return str;
}
}

export default ItemData;