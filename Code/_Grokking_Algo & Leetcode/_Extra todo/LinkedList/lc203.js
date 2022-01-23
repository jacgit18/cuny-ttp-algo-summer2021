const LinkedList = require("../../../_DataStructuresBuiltUpClasses/DataStrucFactoryInterview");
const myLK = new LinkedList();

let LinkListArray = [1,2,6,3,4,5,6];
let head = myLK.ArrayLinkListDeserialize(LinkListArray);



const removeElements = (head, val)  =>{

    if (!head) {
        return head;
    }
    if (head.val === val) {
        return removeElements(head.next, val);
    }
    head.next = removeElements(head.next, val)
    return head;

};

let nodeVal = head.next.next.value


try {
    console.log(removeElements(head, nodeVal))// [1,2,3,4,5]

 } catch (e) {}