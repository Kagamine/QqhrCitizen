﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QqhrCitizen.Models
{
    public enum TypeBelonger { 新闻, 文件, 资源链接, 电子书, 课程 }
    public enum Authority { All, Login }
    public enum Sex { 女, 男 }
    public enum Role { User, Business, Admin, NewsManager, EBookManager, CourseManager, LinkManager }

    public enum Place { Location, Native }

    public class CommonEnums
    {
        public static string[] Answers = { "A", "B", "C", "D" };

        public static string[] TypeBelongerDisply = { "新闻", "文件", "资源链接", "电子书", " 课程" };

        public static string[] RoleDisply = { "用户", "商户", "超级管理员", "新闻管理员", "电子书管理员", "课程管理员", "资源链接管理员" };

        public static string[] RouteDisplay = { "", "线路1", "线路2" };


    }
}