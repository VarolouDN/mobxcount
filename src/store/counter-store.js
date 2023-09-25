import { makeAutoObservable } from "mobx"

class CounterStore{
count=0
    constructor(){
    makeAutoObservable(this)
    }



    increment(value){
      this.count = this.count+value
    }
    decrement(value){
      this.count = this.count-value
    }
}
const counterStore=new CounterStore()
export default counterStore