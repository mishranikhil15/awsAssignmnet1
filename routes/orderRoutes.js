const { Orders } = require("../models/orderModel");
const { Timeline } = require("../models/timelineModel");
const orderRouter = require("express").Router();

orderRouter.get("/", async (req, res) => {
  console.log(req.body.email);
  const email = req.body.email;
  let data = await Orders.findAll({
    where: { email: email },
  });
  if (data.length == 0) {
    return res.status(404).send("No Orders");
  }
  res.send(data);
});

orderRouter.post("/create", async (req, res) => {
  let body = req.body;
  await Orders.create(body);
  await Timeline.create({ id: body.id, email: body.email });
  res.send("Order Created");
});

orderRouter.patch("/update/:id", async (req, res) => {
  let id = req.params.id;
  let status = req.body.status;
  console.log(status);
  await Orders.update(
    {
      Newstatus: status,
    },
    {
      where: { id: id },
    }
  );
  await Timeline.update(
    {
      Newstatus: status,
    },
    {
      where: { id: id },
    }
  );
  res.send("Status Updated");
});

module.exports = { orderRouter };
