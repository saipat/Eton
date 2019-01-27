# Eton

Eton is a clone of Evernote, which is a note taking application. Eton implements identical appearance and limited functionaly. 

Eton is a creation of Sai Lakshmi Pattabiraman.

Eton is single page application developed using Ruby, Rails, and PostgreSQL for the backend and React and Redux for the frontend. The project was designed and built in 10 days. Considering 10-day working time period, Eton was focused on simplicity with few of the crucial functionalities of Evernote. 

### Access

You can access the site at http://eton-fsp.herokuapp.com/#/

### Key Features

#### Rich Text Editing
Eton implements ReactQuill, a React Component that wraps around the popular Quill.js library. This allows for Rich Text Editing in all of the user's notes.

`   <div className="quill-div">
                        <ReactQuill placeholder="Type note content in here" onChange={this.updateBody} modules={modules} value={this.state.rich_txt_body} className="quill-body" id="quillText" ref={this.quillRef} />
                    </div>`
                    
![Imgur](https://i.imgur.com/4bQxUOa.png)

#### Image Upload
Eton lets users to upload images into their notes.
![Imgur](https://i.imgur.com/pMvAdUT.png)

#### CRUD experience
The ability to create, read, update and destroy notes, and notebooks and tags.

#### All notes

![Imgur](https://i.imgur.com/5dGij0M.png)

#### All Tags

![Imgur](https://i.imgur.com/ntctYXp.png)


#### All Notebooks

![Imgur](https://i.imgur.com/CcdC1vE.png)


### Future Features.
Search notes by tags
Note Search
Sort by date updated.
Autosave 

### Technologies

#### Back End
Ruby on Rails
PostgreSQL (database)
AJAX with a JSON API
#### Front End
React
Redux
React-Quill (text editing)
`const toolBarOpts = [
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    ["blockquote", "code-block"],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    ["clean"],
    ["link", "image", "video", "formula"]
];

const modules = {
    toolbar: toolBarOpts
}`
BCrypt (authorization)
ES6


