import UserService from "../services/userService.js"

console.log("User Component Loaded")

let userService=new UserService

userService.add()
userService.getById(1)
userService.list()