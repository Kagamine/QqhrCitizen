﻿var lock = false;
var page = 0;
var tid = "";
var options = ['A', 'B', 'C', 'D'];
//加载新闻
function LoadNews() {
    if (lock) {
        return;
    }
    else {
        lock = true;
        $(".loadMore").text("正在加载~~");
        $.ajax({
            url: "/News/getNews",
            type: "post",
            data: { "page": page, "tid": tid },
        }).done(function (data) {
            var str = "";
            for (var i = 0 ; i < data.length; i++) {
                str += "<div class='Q-pList'><h2><a  href='/News/Show/" + data[i].ID + "' style='color:#000;' class='show'>" + data[i].Title + " </a></h2><p class='sub_title'>时间：" + moment(data[i].Time).format("YYYY-MM-DD HH:mm:ss") + "分类：" + data[i].TypeDictionary.TypeValue + "</p></div>";
            }
            $(".lstNews").append(str);
            if (data.length == 10) {
                lock = false;
                page++;
            } else {
                $(".loadMore").text("没有更多数据了！");
            }
        });
    }
}

//加载课程
function LoadCourses() {
    if (lock) {
        return;
    }
    else {
        lock = true;
        $(".loadMore").text("正在加载~~");
        $.ajax({
            url: "/Course/getCourses",
            type: "post",
            data: { "page": page, "tid": tid },
        }).done(function (data) {
            var str = "";
            for (var i = 0 ; i < data.length; i++) {
                str += "<div class='Q-pList'><h2><a  href='/Course/Show/" + data[i].ID + "' style='color:#000;' class='show'>" + data[i].Title + " </a></h2><p class='sub_title'>时间：" + moment(data[i].Time).format("YYYY-MM-DD HH:mm:ss") + "分类：" + data[i].TypeDictionary.TypeValue + " </p></div>";
            }
            $(".lstCourse").append(str);
            if (data.length == 10) {
                lock = false;
                page++;
            } else {
                $(".loadMore").text("没有更多数据了！");
            }
        });
    }
}

// 加载图书
function LoadEBooks() {
    if (lock) {
        return;
    }
    else {
        lock = true;
        $(".loadMore").text("正在加载~~");
        $.ajax({
            url: "/EBook/getEBookes",
            type: "post",
            data: { "page": page, "tid": tid },
        }).done(function (data) {
            var str = "";
            for (var i = 0 ; i < data.length; i++) {
                str += "<div class='Q-pList'><h2><a  href='/EBook/Show/" + data[i].ID + "' style='color:#000;' class='show'>" + data[i].Title + " </a></h2><p class='sub_title'>时间：" + moment(data[i].Time).format("YYYY-MM-DD HH:mm:ss") + "分类：" + data[i].TypeDictionary.TypeValue + "   <a href='/Upload/" + data[i].File.Path + "'>在线预览</a> <a href='/EBook/Download/" + data[i].ID + "'>下载</a></p></div>";
            }
            $(".lstEBook").append(str);
            if (data.length == 10) {
                lock = false;
                page++;
            } else {
                $(".loadMore").text("没有更多数据了！");
            }
        });
    }
}

function Load() {
    if ($(".lstNews").length > 0) {
        LoadNews();
    }
    if ($(".lstCourse").length > 0) {
        LoadCourses();
    }
    if ($(".lstEBook").length > 0) {
        LoadEBooks();
    }
}

$(document).ready(function () {
    $('a[data-toggle]').click(function () {
        $('.pop-menu').slideUp();
        var target = $(this).attr('data-toggle');
        var menu = $('#' + target);
        var offset = $(this).find('div').offset();
        menu.css('top', offset.top + 50);
        menu.css('left', offset.left + 2);
        menu.slideDown();
    });

    Load();

    $(window).scroll(
    function () {
        totalheight = parseFloat($(window).height())
           + parseFloat($(window).scrollTop());
        if ($(document).height() <= totalheight) {
            Load();
        }
    });

    $("#frmAddNote").submit(function () {
        var userid = $("#userId").val();
        if (userid == "") {
            CastMsg("请先登录，在添加笔记");
            return false;
        }
        return true;
    })

    $("#btnAnswerQuestion").click(function () {
        var str = "";
        var answers = $(".answer:checked");
        $.each(answers, function (i, item) {
            var answer = $(item).val();
            var rightAnswer = $(item).parents(".question").children(".roghtanswer").val();
            if (options[answer] != rightAnswer) {
                str = str + "第" + (i + 1) + "题错误，答案应该是" + rightAnswer;
            }
            else {
                str = str + "第" + (i + 1) + "题正确";
            }
        });
        $(".warning").html(str);
    });

});

$(document).on('click', function (e) {
    if ($(e.target).attr('data-toggle')) return;
    if ($(e.target).hasClass('pop-menu')) return;
    if ($(e.target).hasClass('nav-item')) return;
    if ($(e.target).parents('.pop-menu').length > 0) return;
    $('.pop-menu').slideUp();
});