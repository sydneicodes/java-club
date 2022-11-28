const Post = require("../models/Post");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const pendingOrders = await Post.find({ orderStatus: "pending" }) //find all pending orders 

      const completedOrders = await Post.find({ orderStatus: "completed" }) //find all completed orders

      res.render("profile.ejs", { pendingOrders: pendingOrders, compeletedOrders: completedOrders }); //sends the orders to the html file
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      // const commentDB = await Post.db.collection("comments").find( { OGpost: req.params.id }).toArray();
      res.render("post.ejs", { comments: commentDB, post: post, user: req.user });
     
    } catch (err) {
      console.log(err);
    }
  },
  placeOrder: async (req, res) => {
    console.log(req.body)
    try {
      await Post.create({
        customerName: req.body.customerName,
        size: req.body.size,
        drink: req.body.drink 
      });
      console.log("Order has been placed!");
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  },
  completeOrder: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          orderStatus: "complete",
          baristaName: req.user.userName //when order is completed, barista who completed order will be attached to order
        }
      );
      console.log("Completed!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  deleteCompletedOrder: async (req, res) => {
    try {
      await Post.remove({ _id: req.params.id });
      console.log("Completed!");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};