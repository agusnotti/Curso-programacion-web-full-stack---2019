use "NorthWind"

db.orders.count();

db.products.find().limit(5);

db.suppliers.find().sort({"City": 1});

db.products.aggregate([
   {
     $lookup:
       {
         from: "categories",
         localField: "CategoryID",
         foreignField: "CategoryID",
         as: "prod_cat"
       }
  }
])
