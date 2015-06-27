﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using System.Text;
using System.Text.RegularExpressions;

namespace QqhrCitizen.Models
{
    /// <summary>
    /// 新闻 by JX123
    /// </summary>
    public class News
    {
        public int ID { get; set; }
        [StringLength(40)]
        public string Title { get; set; }
        public string Content { get; set; }
        [ForeignKey("TypeDictionary")]
        public int NewsTypeID { get; set; }
        public virtual TypeDictionary TypeDictionary { get; set; }
        public DateTime Time { get; set; }
        [ForeignKey("User")]
        public int UserID { get; set; }
        public virtual User User { get; set; }

        /// <summary>
        /// 浏览数
        /// </summary>
        public int Browses { get; set; }

        public bool IsHaveImg { get; set; }

        public string FirstImgUrl { get; set; }

        public bool IsWord { get; set; }

        [NotMapped]
        public string Sumamry
        {
            get
            {
                var tmp = Content.Split('\n');
                if (tmp.Count() > 4)
                {
                    var ret = "";
                    for (var i = 0; i < 3; i++)
                    {
                        ret += tmp[i];
                    }
                    ret += "<p>……</p>";
                    return ret;
                }
                else return Content;
            }
        }

        [NotMapped]
        public List<string> ImgUrl
        {
            get
            {
                return Helpers.ImgSrcFilter.GetHtmlImageUrlList(Content);
            }
        }
    }
}