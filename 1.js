const xmlString = `<<list>
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
</list>>

`;

const parser = new DOMParser();
const xml = parser.parseFromString(xmlString, 'application/xml');

const students = xml.querySelectorAll('student');

const result = {
  list: []
};

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const nameElement = student.querySelector('name');
  const firstName = nameElement.querySelector('first').textContent;
  const secondName = nameElement.querySelector('second').textContent;
  const age = Number(student.querySelector('age').textContent);
  const prof = student.querySelector('prof').textContent;
  const lang = nameElement.getAttribute('lang');
  const name = `${firstName} ${secondName}`;

  result.list.push({ name, age, prof, lang });
}

console.log(result);
