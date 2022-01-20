import express, { Request, Response } from "express";
import { requireAuth, validateRequest } from "@victorandresrojas/common";
import { body } from "express-validator";
import { Ticket } from "../models/ticket";

const router = express.Router();

router.post(
  "/api/tickets",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("El titulo es requerido"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("El precio debe ser mayor a 0")
      .not()
      .isEmpty()
      .withMessage("El precio es requerido"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, price } = req.body;
    const ticket = Ticket.build({ title, price, userId: req.currentUser!.id });
    await ticket.save();

    res.status(201).json(ticket);
  }
);

export { router as createTicketRouter };