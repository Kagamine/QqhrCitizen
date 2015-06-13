﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QqhrCitizen.Models
{
    public enum TypeBelonger { 新闻, 文件, 资源链接, 电子书, 课程 }
    public enum Authority { User, Admin }
    public enum Sex { 女, 男 }
    public enum Role { User, Admin,NewsManager,EBookManager,CourseManager }

    public class CommonEnums
    {
        public static string[] Answers = { "A", "B", "C", "D"};

        public static string[] RoleDisply = { "用户", "超级管理员", "新闻管理员", "图书管理员", "课程管理员" };
    }
}