/**
 * Title: item.interface.ts
 * Author: Professor Krasso
 * Co-Author: Janis Gonzalez
 * Date: 8/27/23
 * Description: item interface for nodebucket application
 */


export interface Category {
  categoryName: string
  backgroundColor: string
}

export interface Item {
  _id?: string //optional property
  text: string
  category: Category
}