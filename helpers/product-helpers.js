var db=require('../config/connection') 
var collection=require('../config/collections')
var objectId=require('mongodb').ObjectId
module.exports={
  
    addProduct:(product,callback)=>{

       db.get().collection('product').insertOne(product).then((data)=>{
        callback(data.insertedId)
       })
    },
    getAllProducts:()=>{
       return new Promise(async(reslove,reject)=>{
        let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
        reslove(products)
       }) 
    },
    deleteProduct:(proId)=>{
      return new Promise((reslove,reject)=>{
         db.get().collection(collection.PRODUCT_COLLECTION).deleteOne({_id:objectId(proId)}).then((response)=>{
           console.log(response);
            reslove(response)
         })
      })
    }

}