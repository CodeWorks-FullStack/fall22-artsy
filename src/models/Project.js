import { Account } from "./Account.js"

export class Project {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.coverImg = data.coverImg
    this.creatorId = data.creatorId
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.projectImgs = data.projectImgs
    this.creator = new Account(data.creator)
  }
}
