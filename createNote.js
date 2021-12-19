const createNote = (content) => {
  fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({content: `${content}` }),
  })
    .then((response) => response.json())
    .then((data) => {
      
      newNoteEl = document.createElement("a");
      newContent = document.createElement("span");
      lineBr = document.createElement("br");
      newNoteId = document.querySelectorAll(".note").length + 1;

      newContent.innerText = data.content;
      newNoteEl.className = "note";
      newNoteEl.id = "note-" + newNoteId;
      newNoteEl.append(newContent);
      newNoteEl.append(lineBr);
      newNoteEl.href = "#";
      newNoteEl.setAttribute(
        "onclick",
        "document.querySelector('#displayed-note').innerText = newContent.innerText;"
      );
      document.body.appendChild(newNoteEl);
    });
};

module.exports = createNote;
