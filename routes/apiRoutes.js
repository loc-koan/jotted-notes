const router = require('express').Router();
const { to } = require('await-to-js');
const Store = require('../db/store');

const store = new Store();
// api/notes
router.get('/notes', async (req, res) => {
    const [err, notes] = await to(store.getNotes());

    if (err) return res.status(500).json(err);
    return res.json(notes);
});

module.exports = router;
