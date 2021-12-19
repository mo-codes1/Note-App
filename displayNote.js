const displayNotes = () => { 
  fetch("http://localhost:3000/notes")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((note) => {

      newNoteEl = document.createElement("a");
      newContent = document.createElement("span");
      lineBr = document.createElement("br");
      newNoteId = document.querySelectorAll(".note").length + 1;

      newContent.innerText = note.content;
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
  });
};

module.exports = displayNotes