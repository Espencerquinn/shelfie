let inventory = [];
let i= 0;
// let noteText :  '',

module.exports = {
    getInventory : (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({ errorMessage: "Ahh somethings is wrong" });
                console.log(err)
            });
    },
    createProduct : (req, res) => {
        let noteObj = req.body //the request has a body - hold in variable note 
        noteObj.id = ++i;
        notes.push(noteObj);
        res.status(200).send(noteObj);
        
    },
    editProduct : (req, res) => {
        console.log(req.params.id)
        let editedNote = req.body;
        console.log('req.body', editedNote)
        id = req.params.id
        console.log('edited object id', id)
        notes.forEach(noteObj => {
            if(id === req.params.id){
                console.log(id)
                console.log(noteObj.id)
                noteObj.note = editedNote.note;
            }
        }); 
        console.log(notes)
        res.status(200).send(notes)
    },
    deleteProduct : (req, res) => {
        let passedId = req.params.id //
        console.log(passedId)
        let newArr = notes.filter((noteObj) => {
            if (noteObj.id != passedId){
                return noteObj
            }
        })
        console.log(newArr)
        notes = newArr
        res.status (200).send(notes)
    }
}


  