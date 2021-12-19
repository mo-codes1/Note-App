(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // createNote.js
  var require_createNote = __commonJS({
    "createNote.js"(exports, module) {
      var createNote2 = (content) => {
        fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ content: `${content}` })
        }).then((response) => response.json()).then((data) => {
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
          newNoteEl.setAttribute("onclick", "document.querySelector('#displayed-note').innerText = newContent.innerText;");
          document.body.appendChild(newNoteEl);
        });
      };
      module.exports = createNote2;
    }
  });

  // displayNote.js
  var require_displayNote = __commonJS({
    "displayNote.js"(exports, module) {
      var displayNotes2 = () => {
        fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
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
            newNoteEl.setAttribute("onclick", "document.querySelector('#displayed-note').innerText = newContent.innerText;");
            document.body.appendChild(newNoteEl);
          });
        });
      };
      module.exports = displayNotes2;
    }
  });

  // index.js
  var createNote = require_createNote();
  var displayNotes = require_displayNote();
  var noteContent = document.querySelector("#content");
  var button = document.querySelector("#btn");
  var form = document.querySelector("#note-form");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    let content = noteContent.value;
    createNote(content);
    form.reset();
  });
  displayNotes();
})();
