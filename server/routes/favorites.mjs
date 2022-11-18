import express from "express";
import db from "../db/db-connection.js";
const router = express.Router();


// * get favorite items */
// Create GET request in server.js that uses the junction table to join the two tables for the Favorites Page for a specific user.

app.get('/favorites/:id', cors(), async (req, res) => {
    const user_id = req.params.id;
    try {
      const { rows: favorites } = await db.query('SELECT * FROM favorites INNER JOIN skin_condition ON favorites.skin_id = skin_condition.id INNER JOIN user_accounts ON favorites.user_id = users.id WHERE favorites.user_id = $1', [user_id]);
      res.send(saved);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });

//saving favorite skin picture
app.post('/favorites/:id', cors(), async (req, res) => {
    const newSaved = {
        skin_id: req.body.skin_id,
        user_id: req.body.user_id,
    }
    const result = await db.query(
        'INSERT INTO favorites(skin_id, user_id) VALUES($1, $2) RETURNING *',
        [newSaved.skin_id, newSaved.user_id],
      );
      console.log(result.rows[0]);
      res.json(result.rows[0]);
});
    
app.delete(`/favorites/:id`, cors(), async(req,res) => {
    const savedId = req.params.id;
    await db.query('DELETE FROM favorites WHERE id=$1', [savedId]);
    res.status(200).end();
});
  
export default router