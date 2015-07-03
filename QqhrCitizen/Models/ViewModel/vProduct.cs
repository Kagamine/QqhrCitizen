﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QqhrCitizen.Models.ViewModel
{
    public class vProduct
    {
        public int ID { set; get; }

        public string Title { set; get; }

        public string Description { set; get; }

        public int UserID { set; get; }

        public string Username { set; get; }

        public string Price { set; get; }

        public DateTime Time { set; get; }

        public List<ProductFile> ProductImages { set; get; }

        public ProductFile ProductVideo { set; get; }


        public vProduct() { }

        public vProduct(Product model)
        {
            DB db = new DB();
            this.ID = model.ID;
            this.Title = model.Title;
            this.Description = model.Description;
            this.Price = model.Price;
            this.UserID = model.UserID;
            this.Username = model.User.Username;
            this.Time = model.Time;
            this.ProductImages = db.ProductFiles.Where(pf => pf.FileTypeAsInt == 0 && pf.ProductID == model.ID).ToList();
            this.ProductVideo = db.ProductFiles.Where(pf => pf.FileTypeAsInt == 1 && pf.ProductID == model.ID).FirstOrDefault();
        }
    }
}