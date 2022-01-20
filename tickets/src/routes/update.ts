import express, { Request, Response } from "express";
import {
  requireAuth,
  validateRequest,
  NotFoundError,
  NotAuthorizedError,
} from "@victorandresrojas/common";
import { body } from "express-validator";
import { Ticket } from "../models/ticket";

const router = express.Router();

router.put(
  "/api/tickets/:id",
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
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) throw new NotFoundError();

    if (ticket.userId !== req.currentUser!.id) throw new NotAuthorizedError();

    ticket.set({
      title,
      price,
    });
    await ticket.save();

    res.json(ticket);
  }
);

export { router as updateTicketRouter };
