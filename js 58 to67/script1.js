 // i. What is node type of element having id "form-content".
 const formContentElement = document.getElementById("form-content");
 console.log("Node type of element with id 'form-content':", formContentElement.nodeType);

 // ii. Show node type of element having id "lastName" and its child node.
 const lastNameElement = document.getElementById("lastName");
 console.log("Node type of element with id 'lastName':", lastNameElement.nodeType);
 console.log("Child node of element with id 'lastName':", lastNameElement.firstChild.nodeType);

 // iii. Update child node of element having id "lastName".
 lastNameElement.firstChild.nodeValue = "Last Name: Updated Bank";

 // iv. Get First and last child of id "main-content".
 const mainContentElement = document.getElementById("main-content");
 console.log("First child of 'main-content':", mainContentElement.firstChild);
 console.log("Last child of 'main-content':", mainContentElement.lastChild);

 // v. Get next and previous siblings of id "lastName".
 console.log("Next sibling of 'lastName':", lastNameElement.nextSibling);
 console.log("Previous sibling of 'lastName':", lastNameElement.previousSibling);

 // vi. Get parent node and node type of element having id "email".
 const emailElement = document.getElementById("email");
 console.log("Parent node of element with id 'email':", emailElement.parentNode);
 console.log("Node type of element with id 'email':", emailElement.nodeType);
