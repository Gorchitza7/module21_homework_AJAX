/*
Задание 1.

Вам дана заготовка и результат, который вы должны получить.
Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
*/

const xmlStr= `
    <list>
    <student>
        <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
    </list>`;

const parser = new DOMParser();
const xmlDom = parser.parseFromString(xmlStr, "text/xml");

const studentObj = {};

function getStudent(obj){
  const listNode = obj.querySelector('list');
  let studentIndex = 0;
  for (const studentNode of listNode.querySelectorAll('student')) {
    const nameNode = studentNode.querySelector('name');
    const firstNameNode = nameNode.querySelector('first');
    const secondNameNode = nameNode.querySelector('second');
    const ageNode = studentNode.querySelector('age');
    const profNode = studentNode.querySelector('prof');
    const langAttr = nameNode.getAttribute('lang');
    
    studentObj[studentIndex] = {
      name: `${firstNameNode.textContent} ${secondNameNode.textContent}`,
      age: Number(ageNode.textContent),
      prof: profNode.textContent,
      lang: langAttr
    }; 
    studentIndex++;      
  }      
  return studentObj;
}

const result = {
  list : Object.values(getStudent(xmlDom))
};

console.log("result", result);