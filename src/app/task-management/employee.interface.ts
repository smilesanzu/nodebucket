/**
 * Title: employee.interface.ts
 * Author: Professor Krasso
 * Co-Author: Janis Gonzalez
 * Date: 8/27/23
 * Description: employee interface for nodebucket application
 */

import { Item } from './item.interface'

export interface Employee {
  empId: number
  todo: Item[]
  done: Item[]
}