const express = require("express");
const router = express.Router();
const formidable = require("formidable");
const fs = require("fs-extra");

router.get("/product", (req,res)=>{
  res.json([
      {
        _id: "5abd69902ded8b1b1a6f7d73",
        id: 11,
        image: "1.jpg",
        name: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 1",
        price: 80,
        stock: 130,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5abd69902ded8b1b1a6f7d72",
        id: 10,
        image: "2.jpg",
        name: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 2",
        stock: 280,
        price: 80,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5abd69902ded8b1b1a6f7d71",
        image: "3.jpg",
        id: 9,
        name: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 3",
        stock: 100,
        price: 80,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5abd69902ded8b1b1a6f7d70",
        id: 8,
        image: "4.jpg",
        name: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 4",
        stock: 100,
        price: 80,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5abd69902ded8b1b1a6f7d69",
        id: 7,
        image: "5.jpg",
        name: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 5",
        price: 80,
        stock: 100,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5abd69902ded8b1b1a6f7d59",
        id: 6,
        image: "6.jpg",
        name: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 6",
        stock: 100,
        price: 80,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5abd69902ded8b1b1a6f7d58",
        id: 5,
        image: "7.jpg",
        stock: 100,
        name: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 7",
        price: 80,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5abd69902ded8b1b1a6f7d57",
        id: 4,
        image: "8.jpg",
        name: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 8",
        stock: 13,
        price: 80,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5abd69902ded8b1b1a6f7d50",
        id: 3,
        name: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 9",
        image: "9.jpg",
        stock: 1,
        price: 80,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5b5ecf26581ff42b3c819aef",
        id: 1,
        name: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 10",
        image: "10.jpg",
        stock: 1,
        price: 80,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5b5ecf3d581ff42b3c819af9",
        id: 2,
        name: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 11",
        image: "11.jpg",
        stock: 1,
        price: 80,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5b5ed233581ff42b3c819c37",
        id: 14,
        name: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 12",
        image: "12.jpg",
        stock: 1000,
        price: 80,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5b5ed240581ff42b3c819c3e",
        id: 15,
        name: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 13",
        image: "13.jpg",
        stock: 1000,
        price: 80,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5b5ed24c581ff42b3c819c44",
        id: 16,
        name: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 14",
        image: "14.jpg",
        stock: 1000,
        price: 80,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5b5ed25e581ff42b3c819c4a",
        id: 17,
        name: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว 15",
        image: "15.jpg",
        stock: 1000,
        price: 80,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      }
    ]
  
  )
})


module.exports = router;
