import { Router } from "express";
import {
  listUsers,
  createUsers,
  deleteUsers,
  updateUsers,
} from "../services/user";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const userList = await listUsers();
    res.send(userList);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await createUsers(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:userId", async (req, res) => {
  try {
    await deleteUsers(req.params.userId);
    res.send();
  } catch (error) {
    res.status(404).send(error);
  }
});

router.put("/:userId", async (req, res) => {
  try {
    await updateUsers(req.params.userId, req.body);
    res.send();
  } catch (error) {
    res.status(404).send(error);
  }
})

export default router;
