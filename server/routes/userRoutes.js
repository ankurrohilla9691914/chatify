import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is userGetRoute");
});
router.get("/:id", (req, res) => {
  console.log("@@@", req);
   
  res.send(`this is userGetRoute with ${req.params.id}`);
});
export default router;
